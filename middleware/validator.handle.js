const boom = require('@hapi/boom')

function validator (schema, property){
    return (req, res, next) =>{
        const data = req[property]
        const {error} = schema.validator(data)
        if(error){
            next (boom.badRequest(error))
        }
        next()
    }
}

module.exports = {validator}