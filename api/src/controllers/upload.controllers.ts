import { type RequestHandler } from 'express'
import fs from 'fs/promises'
import { createClient } from '@supabase/supabase-js'
import { HTTPError } from '../error-handling/HTTPError'

const supabaseUrl = process.env.SUPABASE_URL ?? ''
const supabaseKey = process.env.SUPABASE_KEY ?? ''
export const db = createClient(supabaseUrl, supabaseKey)

export const uploadFile: RequestHandler = async (req, res, next) => {
  try {
    if (req.file === undefined) {
      throw new HTTPError(404, 'No file was provided')
    }
    if (req.file !== undefined) {
      const imageData = req.file
      const storagePath = `public/${imageData.filename}`
      const fileContent = await fs.readFile(imageData.path)
      await db.storage.from('books').upload(storagePath, fileContent)
      const { data } = db.storage.from('books').getPublicUrl(storagePath)
      res.json(data)
    }
  } catch (error) {
    throw new HTTPError(400, 'Error upload image')
  }
}
