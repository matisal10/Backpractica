const express = require('express')
const router = express.Router()
const servicesCategory = require('../services/servicesCategory')
const validatorHandler = require('../middleware/validator.handle')
const { createCategory, updateCategory, getCategory } = require('../schema/schemaCategory')

var bodyParser = require('body-parser')

var jsonParser = bodyParser.json()


router.get('/', async (req, res, next) => {
    const { id } = req.query;
    try {
        if (id) {
            const category = await servicesCategory.getOnecategory(id)
            res.json(category)
        }
        else {
            const products = await servicesCategory.getAllCategory()
            res.json(products)
        }

    } catch (error) {
        next(error)
    }
})


router.post('/', jsonParser, validatorHandler(createCategory, "body"), async (req, res, next) => {
    try {
        const create = await servicesCategory.createCategory(req, res)
        return create
    } catch (error) {
        next(error)
    }

})

router.patch('/:id', jsonParser,
    validatorHandler(getCategory, 'params'),
    validatorHandler(updateCategory, 'body'),
    async (req, res, next) => {
        try {
            const { id } = req.params
            const body = req.body
            const updateCategory = await servicesCategory.updateCategory(id, body)
            return res.json(updateCategory)
        } catch (error) {
            next(error)
        }
    }
)

router.delete('/:id', async (req, res, next) => {
    try {
        const { id } = req.params
        const deleteCategory = await servicesCategory.deleteCategory({ id })
        return res.json(deleteCategory)
    } catch (error) {
        next(error)
    }
})


module.exports = router