import { mockBooks } from '../../const/mockBooks'

class BookModel {
  async getAll() {
    return mockBooks
  }
}

export const bookmodel = new BookModel()
