const mongoose = require('../db.js')
const Schema = mongoose.Schema
const HomelistSchema = new Schema({
  code: {type: Int32Array },
  message: {type: null},
  data: {type: Object},
  errtag: {type: Int32Array}
})
module.exports = mongoose.model('Homelist', HomelistSchema)