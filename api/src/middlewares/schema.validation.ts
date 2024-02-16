import { type NextFunction, type Request, type Response } from 'express'
import { ZodError, type AnyZodObject } from 'zod'

export const schemaValidation =
  (schema: AnyZodObject) => (req: Request, res: Response, next: NextFunction) => {
    try {
      schema.parse({
        body: req.body,
        params: req.params,
        query: req.query,
      })
      next()
    } catch (error) {
      console.log('--- Zod Error ---', error)
      if (error instanceof ZodError) {
        return res.status(400).json(
          error.issues.map((issue) => ({
            path: issue.path,
            message: issue.message,
          })),
        )
      }
    }
  }
