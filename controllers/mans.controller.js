// const createHttpError = require("http-errors");
const { Superman, Superpowers } = require("../db/models");

module.exports.createSuperman = async (req, resp, next) => {
  try {
    const {
      body,
      body: { powers },
    } = req;

    const man = await Superman.create(body);
    for (const powerName of powers) {
      const power = await Superpowers.create({name: powerName});
      man.addSuperpowers(power);
    }

    resp.status(201).send({ data: man });
  } catch (error) {
    next(error);
  }
};
