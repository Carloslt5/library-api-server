import { type Request, type Response, type NextFunction, type Express } from 'express'
import { HTTPError } from './HTTPError'

export default (app: Express): void => {
  app.use((req, res, next) => {
    res.status(404).json({ message: 'This route does not exist' })
  })

  app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
    console.error('ERROR', req.method, req.path, err)

    if (err instanceof HTTPError) {
      res.status(err.status).json({ status: err.status, message: err.message })
      return
    }

    if (err.name === 'UnauthorizedError') {
      res.status(401).json({ message: 'No authorization token was found' })
    }

    if (!res.headersSent) {
      res.status(500).json({ message: 'Internal server error. Check the server console' })
    }
  })
}
