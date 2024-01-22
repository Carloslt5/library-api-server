import z from 'zod'

export const BookSchema = z.object({
  id: z.string().optional(),
  author: z.string().min(5, 'Author requires a minimum of 5 characters').trim(),
  categories: z.string().trim(),
  imageURL: z.string().url().trim(),
  link: z.string().url({ message: 'link must be a valid URL' }).trim(),
  title: z.string().min(1, 'Title requires a minimum of 1 characters').trim(),
  year: z.number().int().positive(),
})

export type Book = z.infer<typeof BookSchema>
export type BookID = Pick<Book, 'id'>
export type BookNotID = Omit<Book, 'id'>
