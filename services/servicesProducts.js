
const faker = require('faker')

const getAllProducts = (req, res) => {
    const products = []
    const { size } = req.query
    const limit = size || 5
    for (let index = 0; index < limit; index++) {
        products.push({
            name: faker.commerce.productName(),
            price: parseInt(faker.commerce.price(), 10),
            image: faker.image.imageUrl()
        })

    }
    return products
}

const createProduct = async (req, res) => {
    try {
        const body = req.body
        console.log(body)
        res.json({
            ok:true,
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