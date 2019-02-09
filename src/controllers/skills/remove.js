const { sendDeleted, sendNotFound } = require('../controller-utils');

module.exports = (Skill, { logger }) => async (req, res, next) => {
  const { skillId: id } = req.params;

  try {
    const skill = await Skill.findOne({ id });

    if (skill) {
      await Skill.remove({ id });

      logger.info(`Found and deleted user ${id}`);

      return sendDeleted(res);
    }

    logger.info(`Could not find user ${id}`);

    return sendNotFound(res);
  } catch (error) {
    return next(error);
  }
};
