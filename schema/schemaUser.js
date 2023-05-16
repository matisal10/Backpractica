const Joi = require('joi')

const email = Joi.string().email()
const id = Joi.number().integer()
const password = Joi.string().min(10)

const createUserSchema = Joi.object({
    email: email.required(),
    password: password.required()
})

const updateUserSchema = Joi.object({
    email: email,
})

const getUserSchema = Joi.object({
    id: id.required()
})

module.exports = {
    createUserSchema,
    updateUserSchema,
    getUserSchema
}