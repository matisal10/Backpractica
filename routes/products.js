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

router.get('/',validatorHandler(getProductSchem, "params"), async (req, res, next) => {
    const { id } = req.query;
    try {
        if (id) {
            const getOneProduct = await productsServices.getOneProduct(req, res)
            res.json(getOneProduct)
        }
        else {
            const products = await productsServices.getAllProducts(req, res)

            res.json(products)
        }

    } catch (error) {
        next(error)
    }
})


router.post('/',jsonParser, validatorHandler(schemaProductCreate, "body"), async (req, res, next) => {
    try {
        const create = await productsServices.createProduct(req, res)
        return create
    } catch (error) {
        next(error)
    }

})

module.exports = router