const { sendUpdated, sendNotFound } = require('../controller-utils');

module.exports = (Skill, { logger }) => async (req, res, next) => {
  const { skillId: id } = req.params;

  try {
    let skill = await Skill.findOne({ id });

    if (skill) {
      skill = {
        ...skill,
        ...req.body,
      };

      await skill.save();

      logger.info(`Found and updated user ${id}`);

      return sendUpdated(res, skill);
    }

    logger.info(`Could not find user ${id}`);

    return sendNotFound(res);
  } catch (error) {
    return next(error);
  }
};
