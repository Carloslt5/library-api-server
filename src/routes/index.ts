import express from 'express'
import booksRoutes from './books.routes'

const router = express.Router()

router.use('/books', booksRoutes)

export default router
