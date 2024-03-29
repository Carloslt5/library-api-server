import { type Request, type Response } from 'express'
import { createBook, deleteBook, getBooks, getById, updateBook } from './book.controllers'
import { bookmodel } from '../models/book.model'
import { mockBookInput, mockBooks, updateBookMock } from '../const/mockBooks'

jest.mock('../models/book.model')

const res = {} as Response
const next = jest.fn()

beforeEach(() => {
  res.status = jest.fn().mockReturnThis()
  res.json = jest.fn().mockReturnThis()
})
afterEach(() => {
  jest.clearAllMocks()
})

describe('Books controllers on successful request', () => {
  it('GET - should call bookmodel.getAll() & return books', async () => {
    const req = {} as Request
    await getBooks(req, res, next)

    expect(bookmodel.getAll).toHaveBeenCalledTimes(1)
    expect(res.status).toHaveBeenCalledWith(200)
    expect(res.json).toHaveBeenCalledWith(mockBooks)
    expect(next).not.toHaveBeenCalled()
  })

  it('GET - should call bookmodel.getById() & return one books by ID', async () => {
    const bookID = mockBooks[0].id
    const req = { params: { id: bookID } } as unknown as Request
    await getById(req, res, next)

    expect(bookmodel.getById).toHaveBeenCalledTimes(1)
    expect(bookmodel.getById).toHaveBeenCalledWith({ id: bookID })
    expect(res.status).toHaveBeenCalledWith(200)
    expect(res.json).toHaveBeenCalledWith([mockBooks[0]])
    expect(next).not.toHaveBeenCalled()
  })

  it('POST - should call bookmodel.createBook()', async () => {
    const createBookID = mockBooks[0].id
    const req = { id: createBookID, body: mockBookInput } as unknown as Request
    await createBook(req, res, next)

    expect(bookmodel.create).toHaveBeenCalledTimes(1)
    expect(bookmodel.create).toHaveBeenCalledWith({ input: mockBookInput })
    expect(res.status).toHaveBeenCalledWith(200)
    expect(res.json).toHaveBeenCalledWith({ status: true, message: 'Book created' })
    expect(next).not.toHaveBeenCalled()
  })

  it('PUT - should call bookmodel.updateBook()', async () => {
    const updateBookID = mockBooks[0].id
    const req = { params: { id: updateBookID }, body: updateBookMock } as unknown as Request
    await updateBook(req, res, next)

    expect(bookmodel.update).toHaveBeenCalledTimes(1)
    expect(bookmodel.update).toHaveBeenCalledWith({ id: updateBookID, input: updateBookMock })
    expect(res.status).toHaveBeenCalledWith(200)
    expect(res.json).toHaveBeenCalledWith({ status: true, message: 'Book updated' })
    expect(next).not.toHaveBeenCalled()
  })

  it('DELETE - should call bookmodel.deleteBook()', async () => {
    const deleteBookID = mockBooks[0].id
    const req = { params: { id: deleteBookID } } as unknown as Request
    await deleteBook(req, res, next)

    expect(bookmodel.delete).toHaveBeenCalledTimes(1)
    expect(bookmodel.delete).toHaveBeenCalledWith({ id: deleteBookID })
    expect(res.status).toHaveBeenCalledWith(200)
    expect(res.json).toHaveBeenCalledWith({ message: 'Book deleted' })
    expect(next).not.toHaveBeenCalled()
  })
})

describe('Books controllers on bad request', () => {
  it('GET - .getAll call next() on bad request', async () => {
    const req = {} as Request
    bookmodel.getAll = jest.fn(() => {
      throw new Error()
    })
    await getBooks(req, res, next)

    expect(bookmodel.getAll).toHaveBeenCalledTimes(1)
    expect(next).toHaveBeenCalledWith(expect.any(Error))
  })

  it('GET - .getById call next() on bad request', async () => {
    const bookID = mockBooks[0].id
    const req = { params: { id: bookID } } as unknown as Request
    bookmodel.getById = jest.fn(() => {
      throw new Error()
    })
    await getById(req, res, next)

    expect(bookmodel.getById).toHaveBeenCalledTimes(1)
    expect(next).toHaveBeenCalledWith(expect.any(Error))
  })

  it('POST - .createBook call next() on bad request', async () => {
    const createBookID = mockBooks[0].id
    const req = { params: { id: createBookID }, body: mockBookInput } as unknown as Request
    bookmodel.create = jest.fn(() => {
      throw new Error()
    })
    await createBook(req, res, next)

    expect(bookmodel.create).toHaveBeenCalledTimes(1)
    expect(next).toHaveBeenCalledWith(expect.any(Error))
  })

  it('PUT - .updateBook call next() on bad request', async () => {
    const updateBookID = mockBooks[0].id
    const req = { params: { id: updateBookID }, body: updateBookMock } as unknown as Request
    bookmodel.update = jest.fn(() => {
      throw new Error()
    })
    await updateBook(req, res, next)

    expect(bookmodel.update).toHaveBeenCalledTimes(1)
    expect(next).toHaveBeenCalledWith(expect.any(Error))
  })

  it('DELETE - .deleteBook call next() on bad request', async () => {
    const deleteBookID = mockBooks[0].id
    const req = { params: { id: deleteBookID } } as unknown as Request
    bookmodel.delete = jest.fn(() => {
      throw new Error()
    })
    await deleteBook(req, res, next)

    expect(bookmodel.delete).toHaveBeenCalledTimes(1)
    expect(next).toHaveBeenCalledWith(expect.any(Error))
  })
})
