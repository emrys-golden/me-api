const { sendOne, sendNotFound } = require('../controller-utils');

module.exports = (User, { logger }) => async (req, res, next) => {
  const { userId: id } = req.params;

  try {
    const user = await User.findOne({ id });

    if (user) {
      logger.info(`Found user ${id}`);

      return sendOne(res, user);
    }

    logger.info(`Could not find user ${id}`);

    return sendNotFound(res);
  } catch (error) {
    return next(error);
  }
};
