const express = require('express')
const serviceUser = require('../services/servicesUsers')
const router = express.Router()

router.get('/', async (req, res, next) => {
    try {
        const getUsers = await serviceUser.getAllUsers(req, res)
        return res.send({getUsers})
    } catch (error) {
        next(error)
    }
    
})

module.exports = router