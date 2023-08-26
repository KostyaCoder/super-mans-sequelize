const supermanRouter = require("express").Router();
const supermanController = require("../controllers/mans.controller");
const { findMan } = require("../middlewares/findMan.mv");
const powerRouter = require("./powerRouter");

supermanRouter.post("/", supermanController.createSuperman);
supermanRouter.get("/", supermanController.getSupermans);
supermanRouter.get("/:manId", findMan, supermanController.getSuperman);
supermanRouter.put("/:manId", findMan, supermanController.updateSuperman);
supermanRouter.delete("/:manId", findMan, supermanController.deleteSuperman);

supermanRouter.use("/:manId/powers", findMan, powerRouter);

module.exports = supermanRouter;
