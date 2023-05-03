const express = require('express')
const productsServices = require('../services/servicesProducts')
const router = express.Router()

router.get('/', async (req, res, next) => {

    try {
        const products = await productsServices.getAllProducts(req, res)

        res.json(products)
    } catch (error) {
        next(error)
    }
})

module.exports = router