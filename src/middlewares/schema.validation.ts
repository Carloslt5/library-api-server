import { type NextFunction, type Request, type Response } from 'express'
import { type AnyZodObject } from 'zod'

export const schemaValidation =
  (schema: AnyZodObject) => (req: Request, res: Response, next: NextFunction) => {
    try {
      schema.parse(req.body)
      next()
    } catch (error) {
      console.log('Error en el middleware de validacion', error)
    }
  }
