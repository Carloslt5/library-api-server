import { type Book, type BookID, type BookNotID } from '../schema/book.schema'
import { ModelError } from '../types/ModelError.type'
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.SUPABASE_URL ?? 'http://localhost:54321'
const supabaseKey =
  process.env.SUPABASE_KEY ??
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZS1kZW1vIiwicm9sZSI6ImFub24iLCJleHAiOjE5ODM4MTI5OTZ9.CRXP1A7WOeoJeXxjNni43kdQwgnWNReilDMblYTn_I0'
export const db = createClient(supabaseUrl, supabaseKey)

class BookModel {
  async getAll(): Promise<Book[]> {
    const result = await db.from('books').select()
    if (result.error) {
      throw new ModelError({ message: result.error.message, status: result.status })
    }
    return result.data
  }

  async getById({ id }: { id: BookID }): Promise<Book[]> {
    const result = await db.from('books').select().eq('id', id)
    if (result.error) {
      throw new ModelError({ message: result.error.message, status: result.status })
    }
    return result.data
  }

  async createBook({ input }: { input: BookNotID }): Promise<boolean> {
    const id: BookID = crypto.randomUUID()
    const newBook: Book = { id, ...input }
    const result = await db.from('books').insert(newBook)
    if (result.error) {
      throw new ModelError({ message: result.error.message, status: result.status })
    }
    return true
  }

  async updateBook({ id, input }: { id: BookID; input: BookNotID }): Promise<boolean> {
    const result = await db.from('books').update(input).eq('id', id)
    if (result.error) {
      throw new ModelError({ message: result.error.message, status: result.status })
    }
    return true
  }

  async deleteBook({ id }: { id: BookID }): Promise<boolean> {
    const result = await db.from('books').delete().eq('id', id)

    if (result.error) {
      throw new ModelError({ message: result.error.message, status: result.status })
    }
    return true
  }
}

export const bookmodel = new BookModel()
