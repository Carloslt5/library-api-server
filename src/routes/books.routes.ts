import { Router } from 'express'
import { getBooks, getById } from '../controllers/book.controllers'

const router = Router()

router.get('/', getBooks)
router.get('/:id', getById)

export default router
