import express from 'express'
import {
  createBook,
  getBooks,
  editBook,
  deleteBook,
  getOneBook,
} from '../controllers/books.controllers'

const router = express.Router()

router.get('/', getBooks)
router.get('/:id', getOneBook)
router.post('/create', createBook)
router.put('/edit/:id', editBook)
router.delete('/delete/:id', deleteBook)

export default router
