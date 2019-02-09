const shortid = require('shortid');
const { sendCreated } = require('../controller-utils');

module.exports = (User, { logger }) => async (req, res, next) => {
  try {
    const id = shortid.generate();

    const user = new User({
      ...req.body,
      id,
    });

    await user.save();

    logger.info(`Created user ${id}`);

    return sendCreated(res, user);
  } catch (error) {
    return next(error);
  }
};
