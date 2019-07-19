const mongoose = require('../db');
const { Schema } = mongoose;
const detailSchema = new Schema({
  data: {type: Object}
})
module.exports = mongoose.model('detail', detailSchema);