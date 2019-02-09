const { Schema } = require('mongoose');

module.exports = new Schema({
  id: {
    type: String,
  },
  name: {
    type: String,
    required: [true],
  },
  level: {
    type: Number,
    required: [true],
  },
  dividend: {
    type: Number,
    default: 100,
  },
});
