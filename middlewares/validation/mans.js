const yup = require("yup");

module.exports.MAN_CREATION_SCHEMA = yup.object({
  nickname: yup.string().required(),
  realName: yup.string(),
  originDescription: yup.string(),
  catchPhrase: yup.string(),
  powers: yup.array(),
});
