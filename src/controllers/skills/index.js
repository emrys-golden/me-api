const { Router: router } = require('express');
const create = require('./create');
const list = require('./list');
const update = require('./update');
const remove = require('./remove');

module.exports = (User, Skills, config) => {
  const api = router({ mergeParams: true });

  api.get('/', list(User, config));
  api.post('/', create(User, Skills, config));
  api.put('/:skillId', update(User, Skills, config));
  api.delete('/:skillId', remove(User, Skills, config));

  return api;
};
