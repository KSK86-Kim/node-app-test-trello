const { users: service } = require('../../service')

const logout = async(req, res, next) => {
  try {
    // console.log(req.user)
    const { id } = req.user
    await service.updateToken(id, null)
    return res.status(204).json({
      status: 'success',
      code: 204,
      data: 'No Content',
    })
  } catch (error) {
    next(error)
  }
}

module.exports = logout
