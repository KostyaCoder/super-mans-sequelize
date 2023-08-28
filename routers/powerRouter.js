const powerRouter = require("express").Router();
const powerController = require("../controllers/powers.controller");

powerRouter.post("/", powerController.createSuperpower);
powerRouter.put("/:powerId", powerController.updateSuperpower);

module.exports = powerRouter;
