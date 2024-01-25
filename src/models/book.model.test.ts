import { bookmodel, db } from './book.model'

const mockBooks = [
  {
    id: '46610b86-8b18-4f92-884d-011974aaf7db',
    created_at: '2024-01-23T11:15:35.451594+00:00',
    title: "The Hitchhiker's Guide to the Galaxy",
    author: 'Douglas Adams',
    categories: 'Science Fiction',
    link: 'https://example.com/hitchhikers-guide',
    year: 1979,
    imageURL: 'https://imagenURL.com',
  },
  {
    id: '7427b02d-7046-49c6-b393-3b10f67b1cb9',
    created_at: '2024-01-23T12:54:16.043461+00:00',
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
    from: jest.fn(() => ({
      select: jest.fn().mockReturnValueOnce({
        data: mockBooks,
        error: null,
        status: 200,
      }),
    })),
  })),
}))

describe('BookModel', () => {
  it('getAll should return an array of books', async () => {
    const result = await bookmodel.getAll()
    expect(result).toEqual(mockBooks)
  })
})
