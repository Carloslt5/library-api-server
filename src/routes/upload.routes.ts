import { Router } from 'express'
import { upload } from '../middlewares/uploader.middlewares'

const router = Router()

router.post('/', upload.single('imageData'), (req, res) => {
  console.log('-------', req.file)
  res.send('holis')
})

export default router
