const { Op } = require("sequelize");
const { Superman, Superpowers, Images, sequelize } = require("../db/models");
const createHttpError = require("http-errors");

module.exports.createSuperman = async (req, resp, next) => {
  const t = await sequelize.transaction();

  try {
    const {
      file,
      body: { powers, ...body },
    } = req;

    if (!powers || powers.length === 0) {
      return next(createHttpError(400, "Power must be"));
    }

    //1
    const powersBdObj = await Superpowers.findAll({
      where: { name: { [Op.in]: powers } },
    });
    const powersBd = powersBdObj.map((x) => x.name);

    //2
    const powersForCreate = powers.filter((x) => !powersBd.includes(x));

    //3
    const newImage = [];
    if (file) {
      newImage.push({ path: file.filename });
    }

    const man = await Superman.create(
      {
        ...body,
        Superpowers: powersForCreate.map((x) => {
          return {
            name: x,
          };
        }),
        Images: newImage,
      },
      {
        include: [Superpowers, Images],
        transaction: t,
      }
    );

    await man.addSuperpowers(powersBdObj, { transaction: t });
    await t.commit();

    const returnValue = await Superman.findByPk(man.dataValues.id, {
      include: [
        { model: Superpowers, through: { attributes: [] } },
        { model: Images },
      ],
    });

    resp.status(201).send({ data: returnValue });
  } catch (error) {
    await t.rollback();
    next(error);
  }
};

module.exports.getSupermans = async (req, resp, next) => {
  try {
    const supermans = await Superman.findAll({
      include: [
        { model: Superpowers, through: { attributes: [] } },
        { model: Images },
      ],
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
    const { body, man } = req;

    const superman = await man.update(body);

    resp.status(200).send({ data: superman });
  } catch (error) {
    next(error);
  }
};

module.exports.deleteSuperman = async (req, resp, next) => {
  try {
    const { man } = req;

    man.destroy();

    resp.status(200).send({ data: man });
  } catch (error) {
    next(error);
  }
};
