import { Router } from 'express'
import { createBook, getBooks, getById } from '../controllers/book.controllers'

const router = Router()

router.get('/', getBooks)
router.get('/:id', getById)
router.post('/create', createBook)

export default router
