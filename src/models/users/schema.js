const { Schema } = require('mongoose');
const Skill = require('../skills/schema');

module.exports = new Schema({
  id: {
    type: String,
  },
  name: {
    type: String,
    required: [true],
  },
  occupation: {
    type: String,
    required: [true],
  },
  location: {
    type: String,
  },
  bio: {
    type: String,
  },
  skills: {
    type: [Skill],
  },
  profileImage: {
    type: String,
    data: Buffer,
  },
});
