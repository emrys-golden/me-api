/* eslint no-console: 0 */
const express = require('express');
const bodyParser = require('body-parser');
const api = require('../src');
const MongoManger = require('./mongo');
const config = require('./config');
const logger = require('./logger');

const app = express();

app.use(bodyParser.json());

app.use('/api/v1', api(config));

const mongo = new MongoManger(config);

mongo.connect(() => {
  const API_PORT = config.API_PORT || 3002;

  app.listen(API_PORT, () => {
    logger.info(`App listening on ${API_PORT}`);
  });
});
