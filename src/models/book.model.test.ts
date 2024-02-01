import { mockBookInput, mockBooks } from '../const/mockBooks'
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
          // in: jest.fn().mockReturnThis(),
          // is: jest.fn().mockReturnThis(),
          // order: jest.fn().mockReturnThis(),
          // gte: jest.fn().mockReturnThis(),
          // lte: jest.fn().mockReturnThis(),
          data: mockBooks,
          error: null,
        })),
        insert: jest.fn((newBook: Book) => {
          mockBooks.push(newBook)
          return { data: mockBooks }
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
    const result = await bookmodel.getById({ id: mockBooks[0].id })

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
})
