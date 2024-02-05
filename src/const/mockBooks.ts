import { Book, BookNotID } from '../schema/book.schema'

export const mockBooks: Book[] = [
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

export const mockBookInput: BookNotID = {
  title: 'The Song of Achilles',
  author: 'Madeline Miller',
  categories: 'Historical Fiction',
  link: 'https://example.com/song-of-achilles',
  year: 2011,
  imageURL: 'https://imagenURL.com',
}

export const updateBookMock: BookNotID = {
  title: 'Title update mock',
  author: 'Author update mock',
  categories: 'Categories update mock',
  link: 'https://example.com/hitchhikers-guide',
  year: 1111,
  imageURL: 'https://imagenURL.com',
}
