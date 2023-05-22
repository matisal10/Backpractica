const Joi = require('joi')

const id = Joi.number().integer()
const name = Joi.string().min(3).max(15)
const img = Joi.string().uri()

const createCategory = Joi.object({
    name: name.required(),
    img: img.required()
})

const updateCategory = Joi.object({
    name: name,
    img: img
})

const getCategory = Joi.object({
    id: id.required()
})

module.exports = {
    createCategory,
    updateCategory,
    getCategory
}