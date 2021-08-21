const passport = require('passport')
const { ExtractJwt, Strategy } = require('passport-jwt')
require('dotenv').config()
const secret = process.env.JWT_SECRET_KEY
const { users: service } = require('../service')

const setting = {
  secretOrKey: secret,
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
}

passport.use(
  new Strategy(setting, async ({ id }, done) => {
    try {
      const user = await service.findById(id)
      if (!user) {
        return done(new Error('User not found'))
      }
      return done(null, user)
    } catch (error) {
      done(error)
    }
  })
)
