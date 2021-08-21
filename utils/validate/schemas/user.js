const Joi = require('joi')

const userSchema = Joi.object({
  email: Joi.string().email().required(),
  password: Joi.string().required(),
  table: Joi.object()
})

module.exports = userSchema
