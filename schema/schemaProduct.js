const Joi = require('joi')

const name = Joi.string().alphanum().min(3).max(10)
const id = Joi.string().uuid()
const price = Joi.number().integer().min(10)
const details = Joi.string().min(10)

const schemaProductCreate = Joi.object({
    name: name.required(),
    price: price.required(),
    details: details.required()
})

const updateSchema = Joi.object({
    name: name,
    price: price,
    details: details
})

const getProductSchem = Joi.object({
    id: id.required()
})

module.exports = {
    schemaProductCreate,
    updateSchema,
    getProductSchem
}