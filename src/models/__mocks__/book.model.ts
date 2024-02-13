import { mockBooks } from '../../const/mockBooks'
import { Book, BookID, BookNotID } from '../../schema/book.schema'

export const bookmodel = {
  getAll: jest.fn().mockImplementation(() => {
    return mockBooks
  }),
  getById: jest.fn().mockImplementation(({ id }: { id: BookID }) => {
    const foundBook = mockBooks.find((book) => book.id === id)
    return [foundBook]
  }),
  createBook: jest.fn().mockImplementation(({ input }: { input: BookNotID }) => {
    const id: BookID = crypto.randomUUID()
    const newBook: Book = { id, ...input }
    mockBooks.push(newBook)
    return true
  }),
  updateBook: jest.fn().mockImplementation(({ id, input }: { id: BookID; input: BookNotID }) => {
    const foundBookIndex = mockBooks.findIndex((book) => book.id === id)
    if (foundBookIndex !== -1) {
      mockBooks[foundBookIndex] = { ...mockBooks[foundBookIndex], ...input }
    }
    return true
  }),
  deleteBook: jest.fn().mockImplementation(({ id }: { id: BookID }) => {
    const indexToDelete = mockBooks.findIndex((book) => book.id === id)
    if (indexToDelete !== -1) {
      mockBooks.splice(indexToDelete, 1)
    }
    return true
  }),
}
