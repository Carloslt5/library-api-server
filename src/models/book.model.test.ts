import { mockBookInput, mockBooks, updateBookMock } from '../const/mockBooks'
import { Book, BookNotID } from '../schema/book.schema'
import { bookmodel, db } from './book.model'

jest.mock('@supabase/supabase-js', () => ({
  createClient: jest.fn(() => ({
    from: jest.fn(() => {
      return {
        select: jest.fn().mockImplementation(() => ({
          eq: (key: keyof Book, value: string) => {
            return { data: [mockBooks.find((book) => book[key] === value)] }
          },
          data: mockBooks,
          error: null,
        })),
        insert: jest.fn((newBook: Book) => {
          mockBooks.push(newBook)
          return { data: mockBooks }
        }),
        update: jest.fn((input: BookNotID) => {
          return {
            eq: (key: keyof Book, value: string) => {
              const indexToUpdate = mockBooks.findIndex((book) => book[key] === value)
              if (indexToUpdate !== -1) {
                // Update the book with new input directly in the array
                mockBooks[indexToUpdate] = { ...mockBooks[indexToUpdate], ...input }
              }
              return { data: mockBooks }
            },
          }
        }),
        delete: jest.fn(() => {
          return {
            eq: (key: keyof Book, value: string) => {
              const indexToDelete = mockBooks.findIndex((book) => book[key] === value)
              if (indexToDelete !== -1) {
                mockBooks.splice(indexToDelete, 1)
              }
              return { data: mockBooks }
            },
          }
        }),
      }
    }),
  })),
}))

const spyFrom: jest.SpyInstance = jest.spyOn(db, 'from')

describe('BookModel', () => {
  afterAll(() => {
    spyFrom.mockRestore()
    jest.clearAllMocks()
  })

  it('getAll should return an array of books', async () => {
    const result = await bookmodel.getAll()

    expect(spyFrom).toHaveBeenCalledWith('books')
    expect(Array.isArray(result)).toBe(true)
    expect(result).toEqual(mockBooks)
  })

  it('getById should return a one book', async () => {
    const findBookID = mockBooks[0].id
    const result = await bookmodel.getById({ id: findBookID })

    expect(spyFrom).toHaveBeenCalledWith('books')
    expect(Array.isArray(result)).toBe(true)
    expect(result).toEqual([mockBooks[0]])
  })

  it('createBook should return success request', async () => {
    const result = await bookmodel.createBook({ input: mockBookInput })

    expect(spyFrom).toHaveBeenCalledWith('books')
    expect(mockBooks.length).toBe(3)
    expect(mockBooks[2]).toHaveProperty('id')
    expect(result).toBe(true)
  })

  it('updateBook should return success request', async () => {
    const idToUpdate = mockBooks[0].id
    const result = await bookmodel.updateBook({ id: idToUpdate, input: updateBookMock })

    expect(spyFrom).toHaveBeenCalledWith('books')
    expect([mockBooks[0]]).toEqual([{ id: idToUpdate, ...updateBookMock }])
    expect(mockBooks.length).toBe(3)
    expect(result).toBe(true)
  })

  it('deleteBook should return success request', async () => {
    const idToDelete = mockBooks[1].id
    const result = await bookmodel.deleteBook({ id: idToDelete })

    expect(spyFrom).toHaveBeenCalledWith('books')
    expect(mockBooks.length).toBe(2)
    expect(mockBooks.map((book) => book.id)).not.toBe(idToDelete)
    expect(result).toBe(true)
  })
})
