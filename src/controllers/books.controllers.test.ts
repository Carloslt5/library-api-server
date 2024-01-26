import { type Request, type Response } from 'express'
import { createBook, getBooks, getById, updateBook } from './book.controllers'
import { bookmodel } from '../models/book.model'
import { Book, BookNotID } from '../schema/book.schema'

const mockBooks: Book[] = [
  {
    id: '46610b86-8b18-4f92-884d-011974aaf7db',
    title: "The Hitchhiker's Guide to the Galaxy",
    author: 'Douglas Adams',
    categories: 'Science Fiction',
    link: 'https://example.com/hitchhikers-guide',
    year: 1979,
    imageURL: 'https://imagenURL.com',
  },
  {
    id: '7427b02d-7046-49c6-b393-3b10f67b1cb9',
    title: 'To Kill a Mockingbird',
    author: 'Harper Lee',
    categories: 'Fiction',
    link: 'https://example.com/to-kill-a-mockingbird',
    year: 1960,
    imageURL: 'https://imagenURL.com',
  },
]

const mockBookInput: BookNotID = {
  title: 'The Song of Achilles',
  author: 'Madeline Miller',
  categories: 'Historical Fiction',
  link: 'https://example.com/song-of-achilles',
  year: 2011,
  imageURL: 'https://imagenURL.com',
}

jest.mock('../models/book.model', () => {
  return {
    bookmodel: {
      getAll: jest.fn(() => mockBooks),
      getById: jest.fn(() => [mockBooks[0]]),
      createBook: jest.fn(),
      updateBook: jest.fn(),
    },
  }
})

const res = {} as Response
const next = jest.fn()

describe('Books controllers', () => {
  afterEach(() => {
    jest.clearAllMocks()
  })

  beforeEach(() => {
    res.status = jest.fn().mockReturnThis()
    res.json = jest.fn().mockReturnThis()
  })

  it('GET - should call bookmodel.getAll() & return books on successful request', async () => {
    const req = {} as Request
    await getBooks(req, res, next)

    expect(bookmodel.getAll).toHaveBeenCalledTimes(1)
    expect(res.status).toHaveBeenCalledWith(200)
    expect(res.json).toHaveBeenCalledWith(mockBooks)
    expect(next).not.toHaveBeenCalled()
  })

  it('GET - should call bookmodel.getById() & return one books by ID on successful request', async () => {
    const req = { params: { id: mockBooks[0].id } } as unknown as Request
    await getById(req, res, next)

    expect(bookmodel.getById).toHaveBeenCalledTimes(1)
    expect(bookmodel.getById).toHaveBeenCalledWith({ id: mockBooks[0].id })
    expect(res.status).toHaveBeenCalledWith(200)
    expect(res.json).toHaveBeenCalledWith([mockBooks[0]])
    expect(next).not.toHaveBeenCalled()
  })

  it('POST - should call bookmodel.createBook() on successful request', async () => {
    const req = { id: mockBooks[0].id, body: mockBookInput } as unknown as Request
    await createBook(req, res, next)

    expect(bookmodel.createBook).toHaveBeenCalledTimes(1)
    expect(bookmodel.createBook).toHaveBeenCalledWith({ input: mockBookInput })
    expect(res.status).toHaveBeenCalledWith(200)
    expect(res.json).toHaveBeenCalledWith({ success: true, message: 'Book created' })
    expect(next).not.toHaveBeenCalled()
  })

  it('PUT - should call bookmodel.updateBook() on successful request', async () => {
    const req = { params: { id: mockBooks[0].id }, body: mockBookInput } as unknown as Request
    await updateBook(req, res, next)

    expect(bookmodel.updateBook).toHaveBeenCalledTimes(1)
    expect(bookmodel.updateBook).toHaveBeenCalledWith({ id: mockBooks[0].id, input: mockBookInput })
    expect(res.status).toHaveBeenCalledWith(200)
    expect(res.json).toHaveBeenCalledWith({ success: true, message: 'Book updated' })
    expect(next).not.toHaveBeenCalled()
  })
})
