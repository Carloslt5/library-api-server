import { type RequestHandler } from 'express'
import { bookmodel } from '../models/book.model'
import { type BookNotID } from '../schema/book.schema'
import { ModelError } from '../error-handling/ModelError.type'

export const getBooks: RequestHandler = async (req, res, next) => {
  try {
    const data = await bookmodel.getAll()
    data.rowCount === 0
      ? res.status(404).json({ message: 'Books not found' })
      : res.status(200).json(data.rows)
  } catch (error) {
    next(error)
  }
}

export const getById: RequestHandler = async (req, res, next) => {
  try {
    const { id } = req.params
    const result = await bookmodel.getById({ id })
    result.rowCount === 0
      ? res.status(404).json({ message: 'Book not found' })
      : res.status(200).json(result.rows)
  } catch (error) {
    next(error)
  }
}

export const createBook: RequestHandler = async (req, res, next) => {
  const input: BookNotID = req.body
  try {
    await bookmodel.createBook({ input })
    res.status(200).json({ success: true, message: 'Book created' })
  } catch (error) {
    next(error)
  }
}

export const updateBook: RequestHandler = async (req, res, next) => {
  const { id } = req.params
  const input: BookNotID = req.body
  try {
    await bookmodel.updateBook({ id, input })
    res.status(200).json({ success: true, message: 'Book updated' })
  } catch (error) {
    next(error)
  }
}

export const deleteBook: RequestHandler = async (req, res, next) => {
  const { id } = req.params
  try {
    await bookmodel.delete({ id })
    res.status(200).json({ message: 'Book deleted' })
  } catch (error) {
    next(error)
  }
}
