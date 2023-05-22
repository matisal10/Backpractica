const express = require('express')
const productsServices = require('../services/servicesProducts')
const router = express.Router()
const validatorHandler = require('../middleware/validator.handle')
const { schemaProductCreate, updateSchema, getProductSchem } = require('../schema/schemaProduct')

var bodyParser = require('body-parser')

var jsonParser = bodyParser.json()
// var urlencodedParser = bodyParser.urlencoded({ extended: false })
// router.get('/:id', validatorHandler(getProductSchem, "params"), async (req, res, next) => {
//     try {
//         const getOneProduct = await productsServices.getOneProduct(req, res)
//         res.json(getOneProduct)
//     } catch (error) {
//         next(error)
//     }

// })

router.get('/', async (req, res, next) => {
    try {
        const { id } = req.params;
        if (id) {
            const getOneProduct = await productsServices.getOneProduct(id)
            res.send({ getOneProduct })
        }
        else {
            const products = await productsServices.getAllProducts(req, res)
            res.send({ products })
        }

    } catch (error) {
        next(error)
    }
})


router.post('/', jsonParser, validatorHandler(schemaProductCreate, "body"), async (req, res, next) => {
    try {
        const body = req.body
        const create = await productsServices.createProduct(body)
        res.send({ create })
    } catch (error) {
        next(error)
    }

})

module.exports = router