const { sendUpdated, sendNotFound } = require('../controller-utils');

module.exports = (User, { logger }) => (req, res) => {
  const { userId: id } = req.params;

  User.findOneAndUpdate({ id }, { ...req.body }, { new: true }, (error, user) => {
    if (error) {
      logger.warn(error);
    }

    if (user) {
      logger.info(`Found and updated user ${id}`);
      return sendUpdated(res, user);
    }

    logger.info(`Could not find user ${id} to update`);

    return sendNotFound(res);
  });
};
