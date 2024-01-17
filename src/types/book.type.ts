export interface Book {
  id: string
  author: string
  categories: string[]
  imageLink: string
  link: string
  title: string
  year: number
}

export type BookId = Pick<Book, 'id'>
