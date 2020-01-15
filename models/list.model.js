const mongoose = require('mongoose')
const Schema = mongoose.Schema

let List = new Schema({
  title: {
    type: String
  },
  columnId: {
    type: String
  },
  pos: {
    type: Number
  }
},{
  collection: 'lists'
})

module.exports = mongoose.model('List', List)
