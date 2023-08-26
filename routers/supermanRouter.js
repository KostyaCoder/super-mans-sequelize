const supermanRouter = require("express").Router();
const supermanController = require("../controllers/mans.controller");

supermanRouter.post("/", supermanController.createSuperman);
supermanRouter.get("/", supermanController.getSupermans);

module.exports = supermanRouter;
