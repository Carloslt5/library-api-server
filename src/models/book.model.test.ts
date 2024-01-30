import { Book } from '../schema/book.schema'
import { bookmodel, db } from './book.model'

const mockBooks: Book[] = [
  {
    id: '46610b86-8b18-4f92-884d-011974aaf7db',
    title: "The Hitchhiker's Guide to the Galaxy",
    author: 'Douglas Adams',
    categories: 'Science Fiction',
    link: 'https://example.com/hitchhikers-guide',
    year: 1979,
    imageURL: 'https://imagenURL.com',
  },
  {
    id: '7427b02d-7046-49c6-b393-3b10f67b1cb9',
    title: 'To Kill a Mockingbird',
    author: 'Harper Lee',
    categories: 'Fiction',
    link: 'https://example.com/to-kill-a-mockingbird',
    year: 1960,
    imageURL: 'https://imagenURL.com',
  },
]

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

    expect(spyFrom).toHaveBeenCalledWith('books')
    expect(result).toEqual(mockBooks)
  })

  it('getById should return a one book', async () => {
    const result = await bookmodel.getById({ id: mockBooks[0].id })

    expect(spyFrom).toHaveBeenCalledWith('books')
    expect(result).toEqual([mockBooks[0]])
  })
})
