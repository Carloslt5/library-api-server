import { type RequestHandler } from 'express'
import { bookmodel } from '../models/book.model'
import { type BookNotID } from '../schema/book.schema'

export const getBooks: RequestHandler = async (req, res, next) => {
  try {
    const result = await bookmodel.getAll()
    res.json(result)
  } catch (error) {
    next(error)
  }
}

export const getById: RequestHandler = async (req, res, next) => {
  const { id } = req.params
  try {
    const result = await bookmodel.getById({ id })
    res.json(result)
  } catch (error) {
    next(error)
  }
}

export const createBook: RequestHandler = async (req, res, next) => {
  const input: BookNotID = req.body
  try {
    await bookmodel.createBook({ input })
    res.json({ success: true, message: 'Book created' })
  } catch (error) {
    next(error)
  }
}

export const updateBook: RequestHandler = async (req, res, next) => {
  const { id } = req.params
  const input: BookNotID = req.body
  try {
    await bookmodel.updateBook({ id, input })
    res.json({ success: true, message: 'Book updated' })
  } catch (error) {
    next(error)
  }
}

export const deleteBook: RequestHandler = async (req, res, next) => {
  const { id } = req.params
  try {
    await bookmodel.deleteBook({ id })
    res.json({ success: true, message: 'Book deleted' })
  } catch (error) {
    next(error)
  }
}
