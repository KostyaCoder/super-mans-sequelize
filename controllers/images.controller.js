module.exports.createImage = async (req, resp, next) => {
  try {
    const { file, man } = req;

    if (file) {
      const image = await man.createImage({ path: file.filename });
      resp.status(201).send({ data: image });
    } else {
      return next(createHttpError(404, "Invalid params"));
    }
  } catch (error) {
    next(error);
  }
};
