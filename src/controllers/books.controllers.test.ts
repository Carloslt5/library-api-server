import { type Request, type Response } from 'express'
import { createBook, deleteBook, getBooks, getById, updateBook } from './book.controllers'
import { bookmodel } from '../models/book.model'
import { mockBookInput, mockBooks } from '../const/mockBooks'

// jest.mock('../models/book.model', () => {
//   return {
//     bookmodel: {
//       getAll: jest.fn().mockResolvedValue(mockBooks),
//       getById: jest.fn(() => [mockBooks[0]]),
//       createBook: jest.fn(),
//       updateBook: jest.fn(),
//       deleteBook: jest.fn(),
//     },
//   }
// })

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
  it.only('GET - should call bookmodel.getAll() & return books', async () => {
    const req = {} as Request
    // bookmodel.getAll = jest.fn().mockResolvedValue(mockBooks)
    const spyGetAll = jest.spyOn(bookmodel, 'getAll').mockResolvedValue(mockBooks)
    await getBooks(req, res, next)

    expect(spyGetAll).toHaveBeenCalled()
    expect(spyGetAll).toHaveBeenCalledTimes(1)
    expect(res.status).toHaveBeenCalledWith(200)
    expect(res.json).toHaveBeenCalled()
    expect(res.json).toHaveBeenCalledWith(mockBooks)
    expect(next).not.toHaveBeenCalled()
  })

  // it('GET - should call bookmodel.getById() & return one books by ID', async () => {
  //   const req = { params: { id: mockBooks[0].id } } as unknown as Request
  //   await getById(req, res, next)

  //   expect(bookmodel.getById).toHaveBeenCalledTimes(1)
  //   expect(bookmodel.getById).toHaveBeenCalledWith({ id: mockBooks[0].id })
  //   expect(res.status).toHaveBeenCalledWith(200)
  //   expect(res.json).toHaveBeenCalledWith([mockBooks[0]])
  //   expect(next).not.toHaveBeenCalled()
  // })

  // it('POST - should call bookmodel.createBook()', async () => {
  //   const req = { id: mockBooks[0].id, body: mockBookInput } as unknown as Request
  //   await createBook(req, res, next)

  //   expect(bookmodel.createBook).toHaveBeenCalledTimes(1)
  //   expect(bookmodel.createBook).toHaveBeenCalledWith({ input: mockBookInput })
  //   expect(res.status).toHaveBeenCalledWith(200)
  //   expect(res.json).toHaveBeenCalledWith({ success: true, message: 'Book created' })
  //   expect(next).not.toHaveBeenCalled()
  // })

  // it('PUT - should call bookmodel.updateBook()', async () => {
  //   const req = { params: { id: mockBooks[0].id }, body: mockBookInput } as unknown as Request
  //   await updateBook(req, res, next)

  //   expect(bookmodel.updateBook).toHaveBeenCalledTimes(1)
  //   expect(bookmodel.updateBook).toHaveBeenCalledWith({ id: mockBooks[0].id, input: mockBookInput })
  //   expect(res.status).toHaveBeenCalledWith(200)
  //   expect(res.json).toHaveBeenCalledWith({ success: true, message: 'Book updated' })
  //   expect(next).not.toHaveBeenCalled()
  // })

  // it('DELETE - should call bookmodel.deleteBook()', async () => {
  //   const req = { params: { id: mockBooks[0].id } } as unknown as Request
  //   await deleteBook(req, res, next)

  //   expect(bookmodel.deleteBook).toHaveBeenCalledTimes(1)
  //   expect(bookmodel.deleteBook).toHaveBeenCalledWith({ id: mockBooks[0].id })
  //   expect(res.status).toHaveBeenCalledWith(200)
  //   expect(res.json).toHaveBeenCalledWith({ success: true, message: 'Book deleted' })
  //   expect(next).not.toHaveBeenCalled()
  // })
})

// describe('Books controllers on bad request', () => {
//   it('GET - .getAll call next() on bad request', async () => {
//     const req = {} as Request
//     bookmodel.getAll = jest.fn(() => {
//       throw new Error()
//     })

//     await getBooks(req, res, next)
//     expect(bookmodel.getAll).toHaveBeenCalledTimes(1)
//     expect(next).toHaveBeenCalledWith(expect.any(Error))
//   })

//   it('GET - .getById call next() on bad request', async () => {
//     const req = { params: { id: mockBooks[0].id } } as unknown as Request
//     bookmodel.getById = jest.fn(() => {
//       throw new Error()
//     })

//     await getById(req, res, next)
//     expect(bookmodel.getById).toHaveBeenCalledTimes(1)
//     expect(next).toHaveBeenCalledWith(expect.any(Error))
//   })

//   it('POST - .createBook call next() on bad request', async () => {
//     const req = { params: { id: mockBooks[0].id }, body: mockBookInput } as unknown as Request
//     bookmodel.createBook = jest.fn(() => {
//       throw new Error()
//     })

//     await createBook(req, res, next)
//     expect(bookmodel.createBook).toHaveBeenCalledTimes(1)
//     expect(next).toHaveBeenCalledWith(expect.any(Error))
//   })

//   it('PUT - .updateBook call next() on bad request', async () => {
//     const req = { params: { id: mockBooks[0].id }, body: mockBookInput } as unknown as Request
//     bookmodel.updateBook = jest.fn(() => {
//       throw new Error()
//     })

//     await updateBook(req, res, next)
//     expect(bookmodel.updateBook).toHaveBeenCalledTimes(1)
//     expect(next).toHaveBeenCalledWith(expect.any(Error))
//   })

//   it('DELETE - .deleteBook call next() on bad request', async () => {
//     const req = { params: { id: mockBooks[0].id } } as unknown as Request
//     bookmodel.deleteBook = jest.fn(() => {
//       throw new Error()
//     })

//     await deleteBook(req, res, next)
//     expect(bookmodel.deleteBook).toHaveBeenCalledTimes(1)
//     expect(next).toHaveBeenCalledWith(expect.any(Error))
//   })
// })
