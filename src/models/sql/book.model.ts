import { type Book } from '../../types/book.type'

const booksJSON = [
  {
    author: 'Chinua Achebe',
    country: 'Nigeria',
    imageLink: 'images/things-fall-apart.jpg',
    language: 'English',
    link: 'https://en.wikipedia.org/wiki/Things_Fall_Apart\n',
    pages: 209,
    title: 'Things Fall Apart',
    year: 1958,
  },
]

class BookModel {
  getAll(): Book[] {
    return booksJSON
  }
}

export const bookmodel = new BookModel()
