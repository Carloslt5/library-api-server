import { Router } from 'express'
import { createBook, deleteBook, getBooks, getById } from '../controllers/book.controllers'

const router = Router()

router.get('/', getBooks)
router.get('/:id', getById)
router.post('/create', createBook)
router.delete('/:id', deleteBook)

export default router
