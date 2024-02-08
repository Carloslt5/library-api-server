import { ModelError } from './ModelError.type'

describe('ModelError', () => {
  it('should create an instance of ModelError with the correct properties', () => {
    const errorMessage = 'Test error message'
    const errorStatus = 404
    const modelError = new ModelError({ message: errorMessage, status: errorStatus })

    expect(modelError instanceof Error).toBe(true)
    expect(modelError.message).toBe(errorMessage)
    expect(modelError.status).toBe(errorStatus)
  })
})
