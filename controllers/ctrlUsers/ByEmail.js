const { users: service } = require('../../service')

const ByEmail = async(req, res, next) => {
  try {
    const { email } = req.body
    console.log(email)

    const user = await service.findByEmail(email)

    if (!user) {
      return res.status(409).json({
        status: 'error',
        code: 409,
        message: 'Email in use',
        data: 'Conflict',
      })
    }
    return res.json({
      status: 'success',
      code: 200,
      data: {
        user
      }
    })
  } catch (error) {
    next(error)
  }
}

module.exports = ByEmail

//   const { email } = req.body
//   console.log(email)

//   const qwe = service.findByEmail(email)
//   if (qwe) {
//     console.log('qwe')
//   }
