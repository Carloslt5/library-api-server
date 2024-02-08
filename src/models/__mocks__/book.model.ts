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
  async updateBook({ id, input }: { id: BookID; input: BookNotID }) {
    const foundBookIndex = mockBooks.findIndex((book) => book.id === id)
    if (foundBookIndex !== -1) {
      mockBooks[foundBookIndex] = { ...mockBooks[foundBookIndex], ...input }
    }
    return mockBooks
  }
  async deleteBook({ id }: { id: BookID }) {
    const indexToDelete = mockBooks.findIndex((book) => book.id === id)
    if (indexToDelete !== -1) {
      mockBooks.splice(indexToDelete, 1)
    }
    return mockBooks
  }
}

export const bookmodel = new BookModel()
