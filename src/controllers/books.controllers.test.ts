import { type Request, type Response } from 'express'
import { getBooks } from './book.controllers'
import { bookmodel } from '../models/book.model'

const mockBooks = [
  {
    id: '46610b86-8b18-4f92-884d-011974aaf7db',
    created_at: '2024-01-23T11:15:35.451594+00:00',
    title: "The Hitchhiker's Guide to the Galaxy",
    author: 'Douglas Adams',
    categories: 'Science Fiction',
    link: 'https://example.com/hitchhikers-guide',
    year: 1979,
    imageURL: 'https://imagenURL.com',
  },
  {
    id: '7427b02d-7046-49c6-b393-3b10f67b1cb9',
    created_at: '2024-01-23T12:54:16.043461+00:00',
    title: 'To Kill a Mockingbird',
    author: 'Harper Lee',
    categories: 'Fiction',
    link: 'https://example.com/to-kill-a-mockingbird',
    year: 1960,
    imageURL: 'https://imagenURL.com',
  },
]

jest.mock('../models/book.model', () => {
  return {
    bookmodel: {
      getAll: jest.fn(() => mockBooks),
      getById: jest.fn(() => [mockBooks[0]]),
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
    res.status = jest.fn().mockReturnValue(res)
    res.json = jest.fn().mockReturnValue(res)
  })

  it('GET - should return books on successful request', async () => {
    const req = {} as Request
    await getBooks(req, res, next)

    expect(bookmodel.getAll).toHaveBeenCalledTimes(1)
    expect(res.status).toHaveBeenCalledWith(200)
    expect(res.json).toHaveBeenCalledWith(mockBooks)
    expect(next).not.toHaveBeenCalled()
  })
})
