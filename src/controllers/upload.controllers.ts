import { type RequestHandler } from 'express'
import { db } from '../models/book.model'
import fs from 'fs/promises'

export const uploadFile: RequestHandler = async (req, res) => {
  try {
    if (req.file !== undefined) {
      const imageData = req.file
      const storagePath = `public/${imageData.filename}`
      const fileContent = await fs.readFile(imageData.path)
      await db.storage.from('books').upload(storagePath, fileContent, {
        upsert: true,
        contentType: imageData.mimetype,
      })
      const { data } = db.storage.from('books').getPublicUrl(`public/${imageData.filename}`)

      res.send(data)
    } else {
      res.status(400).send('No se proporcionó ningún archivo')
    }
  } catch (error) {
    console.error('Error al cargar la imagen:', error)
  }
}
