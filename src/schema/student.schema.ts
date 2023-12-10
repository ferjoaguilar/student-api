import Joi from 'joi'

export const studentSchema = Joi.object({
    name: Joi.string().min(3).max(30).required(),
    lastname: Joi.string().min(3).max(30).required(),
    email: Joi.string().required().email(),
    especiality: Joi.string().required(),
    imageUrl: Joi.string().uri().required(),
    github: Joi.string().uri().required()
})