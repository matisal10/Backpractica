// const getConnection = require('../libs/potsgres')
const { models } = require('../libs/sequelize')

const getAllUsers = async (req, res) => {
    try {
        const response = await models.User.findAll()
        return response
    } catch (error) {
        res.status(500).send(error.message)
    }
}

const createUser = async (body) => {
    try {
        const newUser = await models.User.create(body)
        return {
            user: newUser,
            message: 'User created'
        }
    } catch (error) {
        console.log(error)
    }
}

const updateUser = async ({ id, body }) => {
    try {
        const user = await models.User.findByPk(id)
        if (!user) {
            return {
                error: 'User not found'
            }
        }
        const response = await user.update(body)
        return response

    } catch (error) {
        console.log(error)
    }
}

const deleteUser = async (id) => {
    try {
        const user = await models.User.findOne(id)
        await user.destroy()
        return {
            message: 'User Delete ',
            id: id
        }
    } catch (error) {
        console.log(error)
    }
}

module.exports = {
    getAllUsers,
    createUser,
    updateUser,
    deleteUser
}