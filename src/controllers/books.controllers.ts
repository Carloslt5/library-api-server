import { type Request, type Response, type NextFunction } from 'express'
import { db } from '../db'
import { type Book } from '../types/book.type'

export const getBooks = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  try {
    const booksCollection = await db.collection('books').get()
    const books = booksCollection.docs.map((doc) => {
      const { title, author, imageLink } = doc.data()
      return { id: doc.id, title, author, imageLink }
    })
    res.status(200).json(books)
  } catch (error) {
    next(error)
  }
}

export const getOneBook = async (
  req: Request,
  res: Response,
  next: NextFunction,
): Promise<void> => {
  const { id: bookId } = req.params

  try {
    const bookDoc = await db.collection('books').doc(bookId).get()
    const bookData = bookDoc.data()
    const responseData = {
      id: bookId,
      ...bookData,
    }
    res.status(200).json(responseData)
  } catch (error) {
    next(error)
  }
}

export const createBook = async (
  req: Request,
  res: Response,
  next: NextFunction,
): Promise<void> => {
  const newBookData: Book = req.body

  try {
    const defaultImg =
      'https://upittpress.org/wp-content/themes/pittspress/images/no_cover_available.png'

    if (newBookData.imageLink === '' || newBookData.imageLink.length < 5) {
      newBookData.imageLink = defaultImg
    }

    await db.collection('books').add(newBookData)
    res.status(202).json({ message: 'Book created!' })
  } catch (error) {
    next(error)
  }
}

export const editBook = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  const { id: bookID } = req.params
  const { author, imageLink, language, link, pages, title, year, country }: Book = req.body

  try {
    await db.collection('books').doc(bookID).update({
      author,
      title,
      year,
      pages,
      language,
      country,
      imageLink,
      link,
    })
    res.status(202).json({ message: 'Book edited!' })
  } catch (error) {
    next(error)
  }
}

export const deleteBook = async (
  req: Request,
  res: Response,
  next: NextFunction,
): Promise<void> => {
  const { id: bookID } = req.params
  try {
    await db.collection('books').doc(bookID).delete()
    res.status(202).json({ message: 'Book deleted!' })
  } catch (error) {
    next(error)
  }
}
