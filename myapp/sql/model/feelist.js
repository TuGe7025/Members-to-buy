const mongoose = require('../db');
const { Schema } = mongoose;
const feelistSchema = new Schema({
  data: {type: Object}
})
module.exports = mongoose.model('Feelist', feelistSchema, 'feedlist');


