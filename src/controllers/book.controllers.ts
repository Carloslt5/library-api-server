import { type Request, type Response, type NextFunction } from 'express'
import { bookmodel } from '../models/book.model'

export const getBooks = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  try {
    const result = await bookmodel.getAll()
    res.json(result)
  } catch (error) {
    next(error)
  }
}

export const getById = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  const { id } = req.params
  try {
    const result = await bookmodel.getById({ id })
    res.json(result)
  } catch (error) {
    next(error)
  }
}

export const createBook = async (
  req: Request,
  res: Response,
  next: NextFunction,
): Promise<void> => {
  const input = req.body
  try {
    const result = await bookmodel.createBook({ input })
    res.json(result)
  } catch (error) {
    next(error)
  }
}
export const deleteBook = async (
  req: Request,
  res: Response,
  next: NextFunction,
): Promise<void> => {
  const { id } = req.params
  try {
    await bookmodel.deleteBook({ id })
    res.json({ success: true, message: 'Book deleted' })
  } catch (error) {
    next(error)
  }
}
