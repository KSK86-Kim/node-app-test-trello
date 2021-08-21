const express = require('express')
const router = express.Router()
const { ctrlUsers } = require('../../controllers')
const { auth } = require('../../helpers')

router.get('/test', ctrlUsers.test)
router.get('/ByEmail', ctrlUsers.ByEmail)

router.post('/singup', ctrlUsers.registration)
router.post('/login', ctrlUsers.login)
router.get('/current', auth, ctrlUsers.current)
router.post('/logout', auth, ctrlUsers.logout)

module.exports = router
