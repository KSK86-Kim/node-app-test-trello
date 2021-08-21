const { UsersCategory } = require('./schemas')

const findById = (id) => {
  return UsersCategory.findById(id)
}

const findByEmail = (email) => {
  return UsersCategory.findOne({ email })
}

const create = (body) => {
  const { password } = body
  console.log(password)
  const newUser = new UsersCategory(body)
  newUser.setPassword(password)
  return newUser.save()
}

const updateToken = (id, token) => {
  return UsersCategory.findByIdAndUpdate(id, { token })
}

module.exports = {
  findById,
  findByEmail,
  create,
  updateToken,
}
