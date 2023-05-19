const Joi = require('joi')

const email = Joi.string().email()
const id = Joi.number().integer()
const password = Joi.string().min(10)
const role = Joi.string().min(5)

const createUserSchema = Joi.object({
    email: email.required(),
    password: password.required(),
    role: role
})

const updateUserSchema = Joi.object({
    email: email,
    role: role
})

const getUserSchema = Joi.object({
    id: id.required()
})

module.exports = {
    createUserSchema,
    updateUserSchema,
    getUserSchema
}