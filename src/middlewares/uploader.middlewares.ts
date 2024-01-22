import multer, { type Multer } from 'multer'
const storage = multer.diskStorage({
  destination: 'uploads/',
})
export const upload: Multer = multer({ storage })
