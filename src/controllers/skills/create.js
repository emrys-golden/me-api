const shortid = require('shortid');
const { sendCreated, sendRejected, sendNotFound } = require('../controller-utils');

module.exports = (User, Skill, { logger }) => async (req, res, next) => {
  try {
    const { userId } = req.params;

    const user = await User.findOne({ id: userId });

    if (user) {
      logger.info(`Found user ${userId}`);

      const skill = new Skill({
        ...req.body,
        id: shortid.generate(),
      });

      const possibleDuplicate = await Skill.findOne({ name: skill.name });

      if (possibleDuplicate) {
        logger.info(`Rejecting duplicate skill ${skill.name} for user ${userId}`);
        return sendRejected(res);
      }

      user.skills.push(skill);

      await user.save();

      logger.info(`Added ${skill.name} to user ${userId}`);

      return sendCreated(res);
    }

    logger.info(`Could not find user ${userId}`);

    return sendNotFound(res);
  } catch (error) {
    return next(error);
  }
};
