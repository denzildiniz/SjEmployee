const CustomApiError = require('../error/custom-error')

const errorhandlerMiddleware = (err, req,res,next) =>{
    if(err instanceof CustomApiError){
        return res.status(err.statusCode).json({
            msg:err.message
        })
    }
    return res.status(err.status).json({
        msg:'something went wrong'
    })
}

module.exports = errorhandlerMiddleware