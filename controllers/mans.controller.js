const createHttpError = require("http-errors");
const { Superman, Superpowers, sequelize } = require("../db/models");

module.exports.createSuperman = async (req, resp, next) => {
  const t = await sequelize.transaction();

  try {
    const {
      body,
      body: { powers },
    } = req;

    const man = await Superman.create(body, { transaction: t });
    man.dataValues.powers = [];

    for (const powerName of powers) {
      const [power] = await Superpowers.findOrCreate({
        where: { name: powerName },
        transaction: t,
      });

      await man.addSuperpowers(power, { transaction: t });
      man.dataValues.powers.push(power.name);
    }

    await t.commit();

    resp.status(201).send({ data: man });
  } catch (error) {
    await t.rollback();
    next(error);
  }
};

module.exports.getSupermans = async (req, resp, next) => {
  try {
    const supermans = await Superman.findAll({
      include: { model: Superpowers, through: { attributes: [] } },
    });
    resp.status(200).send({ data: supermans });
  } catch (error) {
    next(error);
  }
};

module.exports.getSuperman = async (req, resp, next) => {
  try {
    const { man } = req;

    resp.status(200).send({ data: man });
  } catch (error) {
    next(error);
  }
};

module.exports.updateSuperman = async (req, resp, next) => {
  try {
    const {
      body,
      man: { id },
    } = req;

    const [countRows, [superman]] = await Superman.update(body, {
      where: { id },
      returning: true,
    });

    resp.status(200).send({ data: superman });
  } catch (error) {
    next(error);
  }
};
