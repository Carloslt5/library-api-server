import { type RequestHandler } from 'express'
import { bookmodel } from '../models/book.model'
import { type BookNotID } from '../schema/book.schema'
import { HTTPError } from '../error-handling/HTTPError'

export const getBooks: RequestHandler = async (req, res, next) => {
  try {
    const data = await bookmodel.getAll()
    data.rowCount === 0
      ? res.status(404).json({ message: 'There are no books' })
      : res.status(200).json(data.rows)
  } catch (error) {
    next(error)
  }
}

export const getById: RequestHandler = async (req, res, next) => {
  try {
    const { id } = req.params
    const result = await bookmodel.getById({ id })
    if (result.rowCount === 0) {
      throw new HTTPError(404, 'Book not found')
    } else {
      res.status(200).json(result.rows)
    }
  } catch (error) {
    next(error)
  }
}

export const createBook: RequestHandler = async (req, res, next) => {
  const input: BookNotID = req.body
  try {
    const result = await bookmodel.create({ input })
    if (result.rowCount === 0) {
      throw new HTTPError(404, 'Book not created')
    } else {
      res.status(200).json({ status: true, message: 'Book created' })
    }
  } catch (error) {
    next(error)
  }
}

export const updateBook: RequestHandler = async (req, res, next) => {
  const { id } = req.params
  const input: BookNotID = req.body
  try {
    const result = await bookmodel.update({ id, input })
    if (result.rowCount === 0) {
      throw new HTTPError(404, 'Book can not update')
    } else {
      res.status(200).json({ status: true, message: 'Book updated' })
    }
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
