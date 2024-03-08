import z from 'zod'
const urlPattern = /^((https?:\/\/)?[\w-]+(\.[\w-]+)+\.?(:\d+)?(\/\S*)?)$/

const bookID = {
  id: z.string(),
}

const bookProperties = {
  author: z.string().min(5, 'Author requires a minimum of 5 characters').trim(),
  categories: z.string().trim(),
  description: z.string(),
  imageURL: z.string().url().trim(),
  link: z
    .string()
    .regex(urlPattern, { message: 'Link must be a valid URL. Example: www.google.com' })
    .trim(),
  title: z.string().min(2, 'Title requires a minimum of 2 characters').trim(),
  year: z.number().int().positive(),
}

export const OneBookSchema = z.object({
  params: z.object({
    ...bookID,
  }),
})

export const CreateBookSchema = z.object({
  body: z.object({
    ...bookProperties,
  }),
})

export const UpdateBookSchema = z.object({
  body: z.object({
    ...bookProperties,
  }),
  params: z.object({
    ...bookID,
  }),
})

const BookSchema = z.object({ ...bookProperties, ...bookID })
export type Book = z.infer<typeof BookSchema>
export type BookID = z.infer<typeof BookSchema>['id']
export type BookNotID = Omit<Book, 'id'>
