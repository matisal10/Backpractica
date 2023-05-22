const { boom } = require('@hapi/boom')
// const getConnection = require('../libs/postgres')
const { models } = require('../libs/sequelize')


const getAllCategory = async () => {
    const response = await models.Category.findAll({
    })
    return response
}

const getOnecategory = async (id) => {
    try {
        const category = await models.Category.findByPk(id, {
            include: ['products']
        })
        if (!category) {
            throw boom.notFound('Category not found')
        }
        return category
    } catch (error) {
        console.log(error)
    }
}


const createCategory = async (body) => {
    try {
        console.log(body)
        const newCategory = await models.Category.create(body)
        return newCategory
    } catch (error) {
        console.log(error)
    }
}

const updateCategory = async (id, body) => {
    try {
        const category = await models.Category.findByPk(id)
        if (!category) {
            return {
                error: 'Category not found'
            }
        }
        const response = await category.update(body)
        return { response }
    } catch (error) {
        console.log(error)
    }
}


const deleteCategory = async (id) => {
    try {
        const category = await models.Category.findOne(id)
        await category.destroy()
        return {
            message: 'Ctegory delete',
            id
        }
    } catch (error) {
        console.log(error)
    }
}



module.exports = {
    getOnecategory,
    getAllCategory,
    updateCategory,
    deleteCategory,
    createCategory

}
