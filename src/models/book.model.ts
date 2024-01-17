import { type BookId, type Book } from '../types/book.type'
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.SUPABASE_URL ?? ''
const supabaseKey = process.env.SUPABASE_KEY ?? ''
const db = createClient(supabaseUrl, supabaseKey)

class BookModel {
  async getAll(): Promise<Book[]> {
    const { data } = await db.from('books').select('*')
    return data ?? []
  }

  async getById({ id }: BookId): Promise<Book[] | null> {
    const { data } = await db
      .from('books')
      .select('title, author, categories, imageLink, link, title, year, id')
      .eq('id', id)
    if (data?.length === 0) return null
    return data
  }

  // async createBook({ input }) {
  //   // // const { title, author, categories, imageLink, link, title, year } = input
  //   // const id = crypto.randomUUID()
  //   // console.log('esto es lo que quiero añadir', input)
  //   // console.log('este es el id', id)
  // }
}

export const bookmodel = new BookModel()
