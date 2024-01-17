import { type BookID, type Book, type BookNotID } from '../types/book.type'
import { createClient } from '@supabase/supabase-js'
import { ModelError } from './error.t'

const supabaseUrl = process.env.SUPABASE_URL ?? ''
const supabaseKey = process.env.SUPABASE_KEY ?? ''
const db = createClient(supabaseUrl, supabaseKey)

class BookModel {
  async getAll(): Promise<Book[]> {
    const { data } = await db.from('books').select('*')
    return data ?? []
  }

  async getById({ id }: BookID): Promise<Book[] | null> {
    const result = await db
      .from('books')
      .select('title, author, categories, imageLink, link, title, year, id')
      .eq('id', id)
    if (result.error !== null) {
      throw new ModelError({ message: result.error.message, status: result.status })
    }
    return result.data
  }

  async createBook({ input }: { input: BookNotID }): Promise<Book[] | null> {
    const id = crypto.randomUUID()
    const newBook = { ...input, id }
    const { data } = await db.from('books').insert([newBook]).select()
    return data
  }

  async deleteBook({ id }: BookID): Promise<boolean> {
    const result = await db.from('books').delete().eq('id', id)
    if (result.error !== null) {
      throw new ModelError({ message: result.error.message, status: result.status })
    }
    return true
  }
}

export const bookmodel = new BookModel()
