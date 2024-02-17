import { test, expect } from '@playwright/test'
import { mockBookInput } from './../src/const/mockBooks'

test.only('should create book', async ({ request }) => {
  const createBook = await request.post(`http://localhost:5005/api/books/create`, {
    data: mockBookInput,
  })
  expect(createBook.ok()).toBeTruthy()
  expect(createBook.status()).toBe(200)
  const responseBody = await createBook.json()
  expect(responseBody).toStrictEqual({ success: true, message: 'Book created' })

  const getAll = await request.get('http://localhost:5005/api/books')
  expect(getAll.ok()).toBeTruthy()
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
