const express = require('express')
const apiRouter = require('./server')
const cors = require('cors')
const { errorLogs, handleError } = require('./middleware/errorHandler')
const app = express()
const port = 3000

app.use(cors())

app.get('/', (req, res) => {
    res.send('hola')
})

apiRouter(app)

app.use(errorLogs)
app.use(handleError)

app.listen(port, (req, res) => {
    
})