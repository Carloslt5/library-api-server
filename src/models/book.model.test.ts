import { mockBookInput, mockBooks, updateBookMock } from '../const/mockBooks'
import { bookmodel } from './book.model'

jest.mock('./book.model')

describe('BookModel', () => {
  afterAll(() => {
    jest.clearAllMocks()
  })

  it('getAll should return an array of books', async () => {
    const result = await bookmodel.getAll()

    expect(bookmodel.getAll).toHaveBeenCalledTimes(1)
    expect(Array.isArray(result)).toBe(true)
    expect(result).toStrictEqual(mockBooks)
  })

  it('getById should return a one book', async () => {
    const findBookID = mockBooks[0].id
    const result = await bookmodel.getById({ id: findBookID })

    expect(bookmodel.getById).toHaveBeenCalledTimes(1)
    expect(bookmodel.getById).toHaveBeenCalledWith({ id: findBookID })
    expect(Array.isArray(result)).toBe(true)
    expect(result).toStrictEqual([mockBooks[0]])
  })

  it('createBook should return success request', async () => {
    const result = await bookmodel.createBook({ input: mockBookInput })

    expect(bookmodel.createBook).toHaveBeenCalledTimes(1)
    expect(bookmodel.createBook).toHaveBeenCalledWith({ input: mockBookInput })
    expect(mockBooks.length).toBe(3)
    const newBook = mockBooks[mockBooks.length - 1]
    expect(newBook).toHaveProperty('id')
    expect(newBook.title).toStrictEqual(mockBookInput.title)
    expect(newBook.author).toStrictEqual(mockBookInput.author)
    expect(newBook.categories).toStrictEqual(mockBookInput.categories)
    expect(newBook.link).toStrictEqual(mockBookInput.link)
    expect(newBook.year).toStrictEqual(mockBookInput.year)
    expect(newBook.imageURL).toStrictEqual(mockBookInput.imageURL)
    expect(result).toBe(true)
  })

  it('updateBook should return success request', async () => {
    const idToUpdate = mockBooks[0].id
    const result = await bookmodel.updateBook({ id: idToUpdate, input: updateBookMock })

    expect([mockBooks[0]]).toStrictEqual([{ id: idToUpdate, ...updateBookMock }])
    expect(mockBooks.length).toBe(3)
    expect(result).toBe(true)
  })

  it('deleteBook should return success request', async () => {
    const idToDelete = mockBooks[1].id
    const result = await bookmodel.deleteBook({ id: idToDelete })

    expect(mockBooks.length).toBe(2)
    expect(mockBooks.map((book) => book.id)).not.toBe(idToDelete)
    expect(result).toBe(true)
  })
})
