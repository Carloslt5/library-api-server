import { ModelError } from '../types/ModelError.type'
import { type BookID, type Book, type BookNotID } from '../types/book.type'
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.SUPABASE_URL ?? 'http://localhost:54321'
const supabaseKey =
  process.env.SUPABASE_KEY ??
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZS1kZW1vIiwicm9sZSI6ImFub24iLCJleHAiOjE5ODM4MTI5OTZ9.CRXP1A7WOeoJeXxjNni43kdQwgnWNReilDMblYTn_I0'
const db = createClient(supabaseUrl, supabaseKey)

class BookModel {
  async getAll(): Promise<Book[]> {
    const result = await db.from('books').select('*')
    if (result.error !== null) {
      throw new ModelError({ message: result.error.message, status: result.status })
    }
    return result.data
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
    const result = await db.from('books').insert([newBook]).select()
    if (result.error !== null) {
      throw new ModelError({ message: result.error.message, status: result.status })
    }
    return result.data
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
