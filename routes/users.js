var express = require('express')
var router = express.Router()

let User = require('../models/user.model')

router.route('/user')
  .post((req, res) => {
    console.log(req.body)
    let user = new User(req.body)
    user.save()
      .then(() => {
        res.status(200).json({'business': 'business in added successfully'})
      })
      .catch(() => {
        res.status(400).send(`user add fail.`)
      })
  })
  .get((req, res) => {
    console.log(req.body)
    User.find((err, users) => {
      if (err) {
        res.json(err)
      } else {
        res.json(users)
      }
    })
})

module.exports = router