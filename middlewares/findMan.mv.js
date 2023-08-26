const createHttpError = require("http-errors");
const { Superman, Superpowers, Images } = require("../db/models");

module.exports.findMan = async (req, resp, next) => {
  try {
    const {
      params: { manId },
    } = req;

    const superman = await Superman.findByPk(manId, {
      include: [
        { model: Superpowers, through: { attributes: [] } },
        { model: Images },
      ],
    });

    if (!superman) {
      return next(createHttpError(404, "Superman not found"));
    }

    req.man = superman;

    next();
  } catch (error) {
    next(error);
  }
};
