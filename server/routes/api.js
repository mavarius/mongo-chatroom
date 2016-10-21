const express = require('express')
const router = express.Router()

router.use('/chatrooms', require('./chatrooms'))
// router.use('/lobbies', require('./lobbies'))
// router.use('/users', require('./users'))

module.exports = router
