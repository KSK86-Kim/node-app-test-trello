const mongoose = require('mongoose')
const bCrypt = require('bcryptjs')
const Schema = mongoose.Schema

const userSchema = new Schema(
  {
    password: {
      type: String,
      require: [true, 'Password is required']

    },
    email: {
      type: String,
      require: [true, 'Email is required']
    },
    token: {
      type: String,
      default: null,
    },
    table: {
      type: Object,
      default: null,
      title: String,
      panels:
      {
        type: Object,
        title: String,

        tasks: {
          type: Array,
        }
      }
    },
  },
  // { timestamps: true }
  { versionKey: false, timestamps: true }
  // Потом посмотри зачем эти конфигурацию
)

userSchema.methods.setPassword = function (password) {
  this.password = bCrypt.hashSync(password, bCrypt.genSaltSync(3))
}

userSchema.methods.validPassword = function (password) {
  return bCrypt.compareSync(password, this.password)
}

const UsersCategory = mongoose.model('user', userSchema)

module.exports = UsersCategory
