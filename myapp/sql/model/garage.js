const mongoose = require('../db');
const { Schema } = mongoose;
const garageSchema = new Schema({
  data: {type: Object}
})
module.exports = mongoose.model('garage', garageSchema, 'garage');