export interface Book {
  id: string
  author: string
  categories: string
  imageLink: string
  link: string
  title: string
  year: number
}

export type BookID = Pick<Book, 'id'>
export type BookNotID = Omit<Book, 'id'>
