const current = async(req, res, next) => {
  try {
    const user = req.user
    res.status(200).json({
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

module.exports = current
