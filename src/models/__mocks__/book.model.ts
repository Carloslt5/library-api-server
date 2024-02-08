import { mockBooks } from '../../const/mockBooks'
import { Book, BookID, BookNotID } from '../../schema/book.schema'

class BookModel {
  async getAll() {
    return mockBooks
  }
  async getById({ id }: { id: BookID }) {
    const foundBook = mockBooks.find((book) => book.id === id)
    return [foundBook]
  }
  async createBook({ input }: { input: BookNotID }) {
    const id: BookID = crypto.randomUUID()
    const newBook: Book = { id, ...input }
    mockBooks.push(newBook)
    return mockBooks
  }
}

export const bookmodel = new BookModel()
