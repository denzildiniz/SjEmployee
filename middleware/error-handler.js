const {CustomApiError} = require('../error/custom-error')
const Joi = require('joi')

const errorhandlerMiddleware = (err, req,res,next) =>{
    if(err instanceof CustomApiError){
        return res.status(err.statusCode).json({
            msg:err.message
        })
    }
    if(Joi.isError(err)){
        return res.status(422).json({msg:err.message})
    }

    return res.status(500).json({
        msg:'something went wrong'
    })
}

module.exports = errorhandlerMiddleware