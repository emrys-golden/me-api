const { model } = require('mongoose');
const schema = require('./schema');

module.exports = model('Skill', schema);
