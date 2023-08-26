const supermanRouter = require("express").Router();
const supermanController = require("../controllers/mans.controller");
const { findMan } = require("../middlewares/findMan.mv");

supermanRouter.post("/", supermanController.createSuperman);
supermanRouter.get("/", supermanController.getSupermans);
supermanRouter.get("/:manId", findMan, supermanController.getSuperman);
supermanRouter.put("/:manId", findMan, supermanController.updateSuperman);
supermanRouter.delete("/:manId", findMan, supermanController.deleteSuperman);

module.exports = supermanRouter;
