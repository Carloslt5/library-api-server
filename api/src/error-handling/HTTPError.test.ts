import { HTTPError } from './HTTPError'

describe('HTTPError', () => {
  it('should create an instance of HTTPError with the correct properties', () => {
    const errorMessage = 'Test error message'
    const errorStatus = 404
    const httpError = new HTTPError(errorStatus, errorMessage)

    expect(httpError instanceof Error).toBe(true)
    expect(httpError.message).toBe(errorMessage)
    expect(httpError.status).toBe(errorStatus)
  })
})
