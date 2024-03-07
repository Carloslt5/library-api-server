import { test, expect } from '@playwright/test'
import { mockBookInput, updateBookMock } from './../src/const/mockBooks'
import { Book } from '../src/schema/book.schema'

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
  expect(responseBody).toStrictEqual({ status: true, message: 'Book created' })

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
  expect(getAllBooks.status()).toBe(200)
  const allbooks = await getAllBooks.json()
  findBookByID = allbooks[0]

  const getOneByID = await request.get(`http://localhost:5005/api/books/${findBookByID.id}`)
  expect(getOneByID.ok()).toBeTruthy()
  expect(getOneByID.status()).toBe(200)
  const oneBook = await getOneByID.json()
  expect(oneBook).toStrictEqual([findBookByID])
})

test('should update one books by ID', async ({ request }) => {
  let findBookByID: Book
  const getAllBooks = await request.get('http://localhost:5005/api/books')
  expect(getAllBooks.ok()).toBeTruthy()
  expect(getAllBooks.status()).toBe(200)
  const allbooks = await getAllBooks.json()
  findBookByID = allbooks[0]

  const updateBookByID = await request.put(
    `http://localhost:5005/api/books/edit/${findBookByID.id}`,
    { data: updateBookMock },
  )
  expect(updateBookByID.ok()).toBeTruthy()
  expect(updateBookByID.status()).toBe(200)
  const responseBody = await updateBookByID.json()
  expect(responseBody).toStrictEqual({ status: true, message: 'Book updated' })

  const getOneByID = await request.get(`http://localhost:5005/api/books/${findBookByID.id}`)
  expect(getOneByID.ok()).toBeTruthy()
  expect(getOneByID.status()).toBe(200)
  const [updatedBook] = await getOneByID.json()
  updatedBook.year = parseInt(updatedBook.year)
  const expectedUpdatedBook = { id: findBookByID.id, ...updateBookMock }
  expect([updatedBook]).toStrictEqual([expectedUpdatedBook])
})

test('should delete one books by ID', async ({ request }) => {
  let findBookByID: Book
  const getAllBooksBefore = await request.get('http://localhost:5005/api/books')
  expect(getAllBooksBefore.ok()).toBeTruthy()
  expect(getAllBooksBefore.status()).toBe(200)
  const allBooksBefore = await getAllBooksBefore.json()
  findBookByID = allBooksBefore[0]
  const numBooksBefore = allBooksBefore.length

  const bookToDelete = await request.delete(`http://localhost:5005/api/books/${findBookByID.id}`)
  expect(bookToDelete.ok()).toBeTruthy()
  expect(bookToDelete.status()).toBe(200)
  const responseBody = await bookToDelete.json()
  expect(responseBody).toStrictEqual({ message: 'Book deleted' })

  const getAllBooksAfter = await request.get('http://localhost:5005/api/books')
  expect(getAllBooksAfter.ok()).toBeTruthy()
  expect(getAllBooksAfter.status()).toBe(200)
  const allBooksAfter = await getAllBooksAfter.json()
  expect(allBooksAfter).not.toContainEqual(findBookByID)
  expect(allBooksAfter.length).toBe(numBooksBefore - 1)
})
