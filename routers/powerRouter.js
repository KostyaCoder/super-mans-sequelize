const powerRouter = require("express").Router();
const powerController = require("../controllers/powers.controller");

powerRouter.post("/", powerController.createSuperpower);

module.exports = powerRouter;
