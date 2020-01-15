var express = require('express')
var router = express.Router()

//const authService = require('../api/user')
const user = require('../api/user') 

router.route('/login').post((req, res) => {
  user.login(req, res)
})

router.route('/user').post((req, res) => {
  user.create(req, res)
})

module.exports = router