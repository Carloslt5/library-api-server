import { type Book, type BookID, type BookNotID } from '../schema/book.schema'
import { ModelError } from '../error-handling/ModelError.type'
import { Pool } from 'pg'

export const db = new Pool({
  host: process.env.DATABASE_HOST,
  database: process.env.DATABASE_NAME,
  port: 5432,
  user: process.env.DATABASE_USER,
  password: process.env.DATABASE_PASSWORD,
})

class BookModel {
  async getAll(): Promise<Book[]> {
    try {
      const query = 'SELECT * FROM books'
      const result = await db.query(query)
      return result.rows
    } catch (error) {
      throw new ModelError({ message: 'Can not found books', status: 400 })
    }
  }

  async getById({ id }: { id: BookID }): Promise<Book[]> {
    try {
      const query = 'SELECT * FROM books WHERE id = $1'
      const result = await db.query(query, [id])
      return result.rows
    } catch (error) {
      throw new ModelError({ message: 'Can not found this book', status: 400 })
    }
  }

  async createBook({ input }: { input: BookNotID }): Promise<boolean> {
    const id: BookID = crypto.randomUUID()
    const { title, author, categories, link, year, imageURL } = input
    try {
      const query = `
      INSERT INTO books (id, title, author, categories, link, year, "imageURL")
      VALUES ($1, $2, $3, $4, $5, $6, $7)`
      const values = [id, title, author, categories, link, year, imageURL]
      await db.query(query, values)
      return true
    } catch (error) {
      throw new ModelError({ message: 'Can not created book', status: 400 })
    }
  }

  async updateBook({ id, input }: { id: BookID; input: BookNotID }): Promise<boolean> {
    const { title, author, categories, link, year, imageURL } = input
    try {
      const query = `
        UPDATE books
        SET title = $1, author = $2, categories = $3, link = $4, year = $5, "imageURL" = $6
        WHERE id = $7 
      `
      const values = [title, author, categories, link, year, imageURL, id]
      await db.query(query, values)
      return true
    } catch (error) {
      throw new ModelError({ message: 'Can not update book', status: 400 })
    }
  }

  async deleteBook({ id }: { id: BookID }): Promise<boolean> {
    try {
      const query = 'DELETE FROM books WHERE id = $1'
      const values = [id]
      await db.query(query, values)
      return true
    } catch (error) {
      throw new ModelError({ message: 'Can not delete book', status: 400 })
    }
  }
}

export const bookmodel = new BookModel()
