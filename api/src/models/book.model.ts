import { type Book, type BookID, type BookNotID } from '../schema/book.schema'
import { type QueryResult, Pool } from 'pg'

const config =
  process.env.NODE_ENV === 'test'
    ? {
        host: 'localhost',
        database: 'postgres',
        port: 5432,
        user: 'postgres',
        password: 'postgres',
      }
    : {
        host: process.env.DATABASE_HOST,
        database: process.env.DATABASE_NAME,
        port: 5432,
        user: process.env.DATABASE_USER,
        password: process.env.DATABASE_PASSWORD,
      }

export const db = new Pool(config)
class BookModel {
  async getAll(): Promise<QueryResult<Book[]>> {
    return await db.query('SELECT * FROM books')
  }

  async getById({ id }: { id: BookID }): Promise<QueryResult<Book[]>> {
    return await db.query('SELECT * FROM books WHERE id = $1', [id])
  }

  async create({ input }: { input: BookNotID }): Promise<QueryResult<Book[]>> {
    const id: BookID = crypto.randomUUID()
    const { title, author, description, categories, link, year, imageURL } = input
    return await db.query(
      `
    INSERT INTO books (id, title, author,description, categories, link, year, "imageURL")
    VALUES ($1, $2, $3, $4, $5, $6, $7, $8)`,
      [id, title, author, description, categories, link, year, imageURL],
    )
  }

  async update({ id, input }: { id: BookID; input: BookNotID }): Promise<QueryResult<Book[]>> {
    const { title, author, description, categories, link, year, imageURL } = input
    return await db.query(
      `
    UPDATE books
    SET title = $1, author = $2, description = $3, categories = $4, link = $5, year = $6, "imageURL" = $7
    WHERE id = $8 
  `,
      [title, author, description, categories, link, year, imageURL, id],
    )
  }

  async delete({ id }: { id: BookID }): Promise<QueryResult<Book[]>> {
    return await db.query('DELETE FROM books WHERE id = $1', [id])
  }
}

export const bookmodel = new BookModel()
