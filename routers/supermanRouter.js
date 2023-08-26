const supermanRouter = require("express").Router();
const supermanController = require("../controllers/mans.controller");

supermanRouter.post("/", supermanController.createSuperman);
supermanRouter.get("/", supermanController.getSupermans);
supermanRouter.get("/:manId", supermanController.getSuperman);

module.exports = supermanRouter;
