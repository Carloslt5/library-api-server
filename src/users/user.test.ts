import user from './user'

jest.mock('./user')

describe('testing mock', () => {
  test('uses mock user', () => {
    expect(user.name).toBe('Mock User')
  })
})
