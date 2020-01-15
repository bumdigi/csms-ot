var express = require('express')
var router = express.Router()

const authService = require('../api/user')
const list = require('../api/list') 

router.route('/list').post((req, res) => {
  list.create(req, res)
})

router.route('/list/:columnId').get((req, res) => {
  list.get(req, res)
})

module.exports = router