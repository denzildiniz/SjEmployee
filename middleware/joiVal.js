const Joi = require('joi')

const joiSchema = Joi.object({
    name:Joi.string().min(3).max(20).required(),
    email: Joi.string().email({ minDomainSegments: 2, tlds: { allow: ['com', 'net','org'] } }).required(),
    designation:Joi.string().required()
    
})

module.exports = {joiSchema}