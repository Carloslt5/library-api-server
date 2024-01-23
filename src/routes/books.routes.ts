import { Router } from 'express'
import {
  createBook,
  deleteBook,
  getBooks,
  getById,
  updateBook,
} from '../controllers/book.controllers'
import { schemaValidation } from '../middlewares/schema.validation'
import { CreateBookSchema, OneBookSchema, UpdateBookSchema } from '../schema/book.schema'

const router = Router()

router.get('/', getBooks)
router.get('/:id', schemaValidation(OneBookSchema), getById)
router.post('/create', schemaValidation(CreateBookSchema), createBook)
router.put('/edit/:id', schemaValidation(UpdateBookSchema), updateBook)
router.delete('/:id', schemaValidation(OneBookSchema), deleteBook)

export default router
