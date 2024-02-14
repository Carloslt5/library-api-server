import { test, expect } from '@playwright/test'

test('get started link', async ({ request }) => {
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
