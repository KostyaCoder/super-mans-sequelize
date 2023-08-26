// const createHttpError = require("http-errors");
const { Superman, Superpowers, sequelize } = require("../db/models");

module.exports.createSuperman = async (req, resp, next) => {
  const t = await sequelize.transaction();

  try {
    const {
      body,
      body: { powers },
    } = req;

    const man = await Superman.create(body, { transaction: t });
    for (const powerName of powers) {
      const [power] = await Superpowers.findOrCreate({
        where: { name: powerName },
        transaction: t,
      });

      await man.addSuperpowers(power, { transaction: t });
    }

    await t.commit();

    resp.status(201).send({ data: man });
  } catch (error) {
    await t.rollback();
    next(error);
  }
};
