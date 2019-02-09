const { sendDeleted, sendNotFound } = require('../controller-utils');

module.exports = (User, { logger }) => async (req, res, next) => {
  const { userId: id } = req.params;

  try {
    const user = await User.findOne({ id });

    if (user) {
      logger.info(`Found user ${id}`);

      await User.remove({ id });

      logger.info(`Deleted user ${id}`);

      return sendDeleted(res);
    }

    logger.info(`Cound not find user ${id}`);

    return sendNotFound(res);
  } catch (error) {
    return next(error);
  }
};
