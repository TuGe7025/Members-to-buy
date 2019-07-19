const mongoose = require('../db');
const { Schema } = mongoose;
const newSchema = new Schema({
  data: {type: Object}
})
module.exports = mongoose.model('new', newSchema);