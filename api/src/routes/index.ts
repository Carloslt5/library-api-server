import { Router } from 'express'
import booksRoutes from './books.routes'
import uploadRoutes from './upload.routes'

const router = Router()

router.use('/books', booksRoutes)
router.use('/upload', uploadRoutes)

export default router
