const express = require('express')
const router = express.Router()
const { ctrlUsers } = require('../../controllers')

router.get('/test', ctrlUsers.test)
router.get('/singup', ctrlUsers.registration)

module.exports = router
