var express = require('express')
var fs = require('fs')
var router = express.Router()

/* GET users listing. */
router.get('/', function(req, res, next) {
  //res.send('respond with a resource users router')
})

router.get('/chat', function(req, res, next) {
  res.status(201).json({ item: 'sss' })
})

module.exports = router