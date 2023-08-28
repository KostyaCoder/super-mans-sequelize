const powerRouter = require("express").Router();
const powerController = require("../controllers/powers.controller");

powerRouter.post("/", powerController.createSuperpower);
powerRouter.put("/:powerId", powerController.updateSuperpower);
powerRouter.delete("/:powerId", powerController.deletePower);

module.exports = powerRouter;
