const mongoose = require('../db');
const { Schema } = mongoose;
const kindSchema = new Schema({
  data: {type: Object}
})
module.exports = mongoose.model('Kind', kindSchema, 'kind');