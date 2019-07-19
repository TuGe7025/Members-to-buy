const mongoose = require('../db');
const { Schema } = mongoose;
const categorySchema = new Schema({
  data: {type: Object}
})
module.exports = mongoose.model('category', categorySchema, 'category');