import { Request, Response, NextFunction } from 'express'
import Joi from 'joi'

export const handleValidator = (schema: Joi.ObjectSchema) => {
    return async (req: Request, res: Response, next: NextFunction) => {
        try {
            await schema.validateAsync(req.body)
            next()
        } catch (error) {
            res.status(400).json({message: 'Something went wrong', error: error})
        }
    }
}