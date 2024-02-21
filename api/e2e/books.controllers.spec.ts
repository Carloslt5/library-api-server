import { test, expect } from '@playwright/test'
import { mockBookInput } from './../src/const/mockBooks'
import { Book, BookID } from '../src/schema/book.schema'

test('should create book', async ({ request }) => {
  const getAllBooksBefore = await request.get('http://localhost:5005/api/books')
  expect(getAllBooksBefore.ok()).toBeTruthy()
  const allBooksBefore = await getAllBooksBefore.json()
  const numBooksBefore = allBooksBefore.length

  const createBook = await request.post(`http://localhost:5005/api/books/create`, {
    data: mockBookInput,
  })
  expect(createBook.ok()).toBeTruthy()
  expect(createBook.status()).toBe(200)
  const responseBody = await createBook.json()
  expect(responseBody).toStrictEqual({ success: true, message: 'Book created' })

  const getAllBooksAfter = await request.get('http://localhost:5005/api/books')
  expect(getAllBooksAfter.ok()).toBeTruthy()
  const allBooksAfter = await getAllBooksAfter.json()
  expect(allBooksAfter.length).toBe(numBooksBefore + 1)
})

test('should get all books', async ({ request }) => {
  const getAll = await request.get('http://localhost:5005/api/books')

  expect(getAll.ok()).toBeTruthy()
  expect(getAll.status()).toBe(200)
  const responseData = await getAll.json()
  expect(await responseData).toBeInstanceOf(Array)
  if (responseData.length > 0) {
    const firstBook = responseData[0]
    expect(firstBook).toHaveProperty('title')
    expect(firstBook).toHaveProperty('author')
    expect(firstBook).toHaveProperty('categories')
    expect(firstBook).toHaveProperty('link')
    expect(firstBook).toHaveProperty('year')
    expect(firstBook).toHaveProperty('imageURL')
  }
})

test('should get one books by ID', async ({ request }) => {
  let findBookByID: Book
  const getAllBooks = await request.get('http://localhost:5005/api/books')
  expect(getAllBooks.ok()).toBeTruthy()
  const allbooks = await getAllBooks.json()
  findBookByID = allbooks[0]

  const getOneByID = await request.get(`http://localhost:5005/api/books/${findBookByID.id}`)
  expect(getOneByID.ok()).toBeTruthy()
  expect(getOneByID.status()).toBe(200)
  const oneBook = await getOneByID.json()
  expect(oneBook).toStrictEqual([findBookByID])
})
