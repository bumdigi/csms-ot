const authService = require('../auth')
const User = require('../models/user.model')

const login = async (req, res, next) => {
  const { email, password } = req.body

  const user = await User.find({email, password})

  if (!user) return res.status(401).json({ error: 'Login failure' })

  const accessToken = authService.signToken(user.id)
  res.json({ accessToken, user })
}

const create = async (req, res) => {
  const {email, password, name} = req.body
  const user = new User({email, password, name})
  await user.save()
  res.status(200).json({ code: 200 })
}

module.exports = {
  login,
  create
}