
const faker = require('faker')
const pool = require('../libs/potsgres')

const getAllProducts = async (req, res) => {
    try {
        const query = 'SELECT * FROM task'
        const response = await pool.query(query)
        return response.rows
    } catch (error) {
        console.log(error)
    }
}

const createProduct = async (req, res) => {
    try {
        const body = req.body
        console.log(body)
        res.json({
            ok: true,
            data: body,
        })
    }
    catch (error) {
        console.log(error)
    }
}

const getOneProduct = (req, res) => {
    try {
        const { id } = req.params
        res.json({
            'id': id,
            'name': '',
            "price": 23,
            "category": ''
        })
        return id
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