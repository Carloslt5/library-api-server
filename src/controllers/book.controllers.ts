import { type Request, type Response, type NextFunction } from 'express'
import { bookmodel } from '../models/sql/book.model'

export const getBooks = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  try {
    const result = bookmodel.getAll()
    res.json(result)
  } catch (error) {
    next()
  }
}
