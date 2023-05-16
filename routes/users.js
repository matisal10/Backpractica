const express = require('express')
const serviceUser = require('../services/servicesUsers')
const router = express.Router()
const {
    createUserSchema,
    updateUserSchema,
    getUserSchema
} = require('../schema/schemaUser')

const validatorHendler = require('../middleware/validator.handle')

var bodyParser = require('body-parser')

var jsonParser = bodyParser.json()

router.get('/', async (req, res, next) => {
    try {
        const getUsers = await serviceUser.getAllUsers(req, res)
        return res.send({ getUsers })
    } catch (error) {
        next(error)
    }

})

router.post('/', jsonParser,validatorHendler(createUserSchema,'body'), async (req, res, next) => {
    try {
        const body = req.body
        const create = await serviceUser.createUser(body)
        return create
    } catch (error) {
        next(error)
    }

})

router.patch('/:id', jsonParser,validatorHendler(updateUserSchema,'params'), async (req, res, next) => {
    try {
        const { id } = req.params
        const body = req.body
        const update = await serviceUser.updateUser({ id, body })
        return update
    } catch (error) {
        next(error)
    }

})

router.delete('/:id', jsonParser, async (req, res, next) => {
    try {
        const { id } = req.params
        const deleteUser = await serviceUser.deleteUser({id})
        return deleteUser
    } catch (error) {
        next(error)
    }

})

module.exports = router