const imageRouter = require("express").Router();
const imageController = require("../controllers/images.controller");

imageRouter.post("/", imageController.createImage);

module.exports = imageRouter;
