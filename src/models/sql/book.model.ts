import { type Book } from '../../types/book.type'

const booksJSON = [
  {
    author: 'J.K. Rowling',
    categories: ['Fantasy', 'Young Adult'],
    imageLink: 'https://example.com/book-cover.jpg',
    link: 'https://example.com/book-page',
    title: "Harry Potter and the Philosopher's Stone",
    year: 1997,
  },
]

class BookModel {
  getAll(): Book[] {
    return booksJSON
  }
}

export const bookmodel = new BookModel()
