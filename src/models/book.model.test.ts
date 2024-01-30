import { mockBookInput, mockBooks } from '../const/mockBooks'
import { Book } from '../schema/book.schema'
import { bookmodel, db } from './book.model'

jest.mock('@supabase/supabase-js', () => ({
  createClient: jest.fn(() => ({
    from: jest.fn(() => {
      return {
        select: jest.fn().mockImplementation(() => ({
          eq: (key: keyof Book, value: string) => {
            return { data: [mockBooks.find((book) => book[key] === value)] }
          },
          in: jest.fn().mockReturnThis(),
          is: jest.fn().mockReturnThis(),
          order: jest.fn().mockReturnThis(),
          gte: jest.fn().mockReturnThis(),
          lte: jest.fn().mockReturnThis(),
          data: mockBooks,
          error: null,
        })),
      }
    }),
  })),
}))

const spyFrom: jest.SpyInstance = jest.spyOn(db, 'from')

describe('BookModel', () => {
  afterAll(() => {
    spyFrom.mockRestore()
  })

  it('getAll should return an array of books', async () => {
    const result = await bookmodel.getAll()

    expect(spyFrom).toHaveBeenCalledWith('booksss')
    expect(result).toEqual(mockBooks)
    expect(Array.isArray(result)).toBe(true)
  })

  it('getById should return a one book', async () => {
    const result = await bookmodel.getById({ id: mockBooks[0].id })

    expect(spyFrom).toHaveBeenCalledWith('books')
    expect(Array.isArray(result)).toBe(true)
    expect(result).toEqual([mockBooks[0]])
  })

  // it('createBook should return success request', async () => {
  //   const result = await bookmodel.createBook({ input: mockBookInput })
  // })
})
