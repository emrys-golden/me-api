const { sendList, sendNotFound } = require('../controller-utils');

module.exports = (Users, { logger }) => async (req, res, next) => {
  const { userId: id } = req.params;

  try {
    const user = await Users.findOne({ id });

    if (user) {
      logger.info(`Found user ${id} with ${user.skills.length} skills`);
      return sendList(res, user.skills);
    }

    logger.info(`Could not find user ${id}`);

    return sendNotFound(res);
  } catch (error) {
    return next(error);
  }
};
