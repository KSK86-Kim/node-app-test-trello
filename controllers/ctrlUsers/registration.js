const { users: service } = require('../../service')
const { userSchema } = require('../../utils/validate/schemas')

const registration = async (req, res, next) => {
  try {
    const { email } = req.body
    console.log(email)
    const user = await service.findByEmail(email)
    if (user) {
      return res.status(409).json({
        status: 'error',
        code: 409,
        message: 'Email in use',
        data: 'Conflict',
      })
    }
    const { error } = userSchema.validate(req.body)
    if (error) {
      return res.status(400).json({
        status: 'error',
        code: 400,
        message: error.message,
      })
    }

    const newUser = await service.create(req.body)
    res.status(201).json({
      status: 'success',
      code: 201,
      data: {
        email: newUser.email,
      }
    })
  } catch (error) {
    next(error)
  }
}

module.exports = registration
