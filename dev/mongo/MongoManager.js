const mongoose = require('mongoose');
const logger = require('../logger');

class MongoManager {
  constructor(config) {
    this.config = config;
  }

  getMongoUrl() {
    return this.config.MONGODB_URI;
  }

  connect(cb) {
    const dbURL = this.getMongoUrl();

    try {
      mongoose.connect(dbURL, { useNewUrlParser: true });
      mongoose.connection.on('connecting', () => {
        logger.info('Connecting to MongoDB');
      });

      mongoose.connection.on('connected', () => {
        logger.info('Connected to MongoDB');

        if (cb) {
          cb();
        }
      });
    } catch (error) {
      logger.warn(`Connection Failure: ${error}`);
    }
  }
}

module.exports = MongoManager;
