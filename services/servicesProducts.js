const { boom } = require('@hapi/boom')
// const getConnection = require('../libs/postgres')
const { models } = require('../libs/sequelize')

const getAllProducts = async () => {
    try {
        const data = await models.Product.findAll({
            include: ['category']
        })
        return {
            data
        }
    } catch (error) {
        console.log(error)
    }
}

const createProduct = async (body) => {
    try {
        const product = await models.Product.create(body)
        return product
    }
    catch (error) {
        console.log(error)
    }
}

const getOneProduct = async (id) => {
    try {
        const data = await models.Products.findOne(id)
        if (!data) {
            throw boom.notFound('Product not found')
        }
        return data
    }
    catch (error) {
        console.log(error)
    }

}


module.exports = {
    getAllProducts,
    getOneProduct,
    createProduct
}