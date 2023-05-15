const getConnection = require('../libs/potsgres')

const getAllUsers = async (req, res) => {
    try {
        const client = await getConnection()
        const response = await client.query('SELECT * FROM task')
        return response.rows
    } catch (error) {
        res.status(500).send(error.message)
    }
}

module.exports = {
    getAllUsers
}