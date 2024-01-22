import { Router } from 'express'
import { upload } from '../middlewares/uploader.middlewares'
import { uploadFile } from '../controllers/upload.controllers'

const router = Router()

// eslint-disable-next-line @typescript-eslint/no-unsafe-argument
router.post('/', upload.single('imageData'), uploadFile)

export default router
