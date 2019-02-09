const { Router: router } = require('express');
const create = require('./create');
const get = require('./get');
const remove = require('./remove');
const update = require('./update');
const { Skills } = require('../../models');

const skills = require('../skills');

module.exports = (model, { config }) => {
  const api = router({ mergeParams: true });

  api.post('/', create(model, { config }));

  api.get('/:userId', get(model, { config }));

  api.delete('/:userId', remove(model, { config }));

  api.put('/:userId', update(model, { config }));

  const skillsApi = skills(model, Skills);

  api.use('/:userId/skills', skillsApi);

  return api;
};
