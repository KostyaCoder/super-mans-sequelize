const { sequelize } = require("../db/models");

module.exports.createSuperpower = async (req, resp, next) => {
  const t = await sequelize.transaction();

  try {
    const { body, man } = req;

    const power = await man.createSuperpower(body, { transaction: t });
    await man.addSuperpowers(power, { transaction: t });
    await t.commit();

    resp.status(201).send({ data: power });
  } catch (error) {
    await t.rollback();
    next(error);
  }
};
