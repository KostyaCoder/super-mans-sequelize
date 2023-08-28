const { sequelize, Superpowers } = require("../db/models");

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

module.exports.updateSuperpower = async (req, resp, next) => {
  try {
    const {
      body,
      params: { powerId },
    } = req;

    const [countRows, [superpower]] = await Superpowers.update(body, {
      where: { id: powerId },
      returning: true,
    });

    resp.status(200).send({ data: superpower });
  } catch (error) {
    next(error);
  }
};
