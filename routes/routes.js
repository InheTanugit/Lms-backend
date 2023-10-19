const express = require('express')
const { userRegistration,userLogin, getUsers } = require('../controller/authController')
const { checkAuth } = require('../constants/auth')
var passport = require('passport')
const { isAuthenticated } = require('../passportConfig ')

const router = express.Router()

router.post('/registerUser',userRegistration)

router.post('/userLogin', passport.authenticate('local'),userLogin)

router.get('/getUsers',isAuthenticated, getUsers)

module.exports = router