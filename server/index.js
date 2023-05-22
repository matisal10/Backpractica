const productRouter = require('../routes/products')
const userRouter = require('../routes/users')
const clientRouter = require('../routes/client')
const categoryRouter = require('../routes/category')

function apiRouter(app) {
    app.use('/products', productRouter),
    app.use('/users', userRouter),
    app.use('/clients', clientRouter),
    app.use('/categories',categoryRouter)
}

module.exports = apiRouter