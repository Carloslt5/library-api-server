import { Router } from 'express'
import {
  createBook,
  deleteBook,
  getBooks,
  getById,
  updateBook,
} from '../controllers/book.controllers'
import { schemaValidation } from '../middlewares/schema.validation'
import { BookSchema } from '../schema/book.schema'

const router = Router()

router.get('/', getBooks)
router.get('/:id', getById)
router.post('/create', schemaValidation(BookSchema), createBook)
router.post('/:id/edit', schemaValidation(BookSchema), updateBook)
router.delete('/:id', deleteBook)

export default router
