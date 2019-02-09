const { Router } = require('express');
const bodyParser = require('body-parser');
const { getErrorHandler } = require('./middleware');
const { Users } = require('./models');
const { users } = require('./controllers');

/**
 * Initialises the application API
 * @param  {object} config The API configuration object
 * @return {object}        The express object
 */
module.exports = (config) => {
  const router = Router();

  router.use(bodyParser.json());

  router.use('/users', users(Users, { config }));

  router.use(getErrorHandler(config));

  return router;
};
