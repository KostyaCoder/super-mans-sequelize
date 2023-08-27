const { MAN_CREATION_SCHEMA } = require("./validation/mans");

module.exports.validateMans = async function (req, resp, next) {
  try {
    await MAN_CREATION_SCHEMA.validate(req.body);
    next();
  } catch (error) {
    next(error);
  }
};
