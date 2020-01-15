const List = require('../models/list.model')

const create = async (req, res) => {
  //const userId = req.user.id
  let { title, columnId, pos } = req.body

  if (!title) res.status(400).end('no title')
  if (!columnId) res.status(400).end('no columnId')
  if (!pos) res.status(400).end('no pos')

  const list = new List({ title, pos, columnId })
  await list.save()

  res.status(200).json({ item: list })
}

const get = async (req, res) => {
  const { columnId } = req.params
  if (!columnId) return res.status(400).json({ error: 'no columnId' })
  const list = await List.find({columnId})
  res.status(200).json({ item: list})  
}

const update = async (req, res) => {
  const {id} = req.params
  let body = req.body

  if (!id) return res.status(400).json({error: 'no id'})

  const list = await models.List.findOne({
    where: { id }
  })
  if (!list) return res.status(404).json({error: 'no list'})

  Object.keys(body).forEach(key => {
    let value = body[key]
    if (typeof value === 'string') value = value.trim()
    
    if (!value) return 
    list[key] = value
  })

  await list.save()

  res.json({ item: list })
}

const destroy = async (req, res) => {
  const { id } = req.params
  if (!id) return res.status(400).json({ error: 'no id' })

  const cardIds = await models.Card.findAll({
    where: { listId: id }
  }).map(card => card.id)

  if (cardIds.length) {
    await models.Card.destroy({
      where: {
        id: { [models.Op.in]: cardIds }
      }
    })
  }

  await models.List.destroy({
    where: { id }
  })

  res.status(204).end()
}

module.exports = {
  create,
  get,
  update,
  destroy
}