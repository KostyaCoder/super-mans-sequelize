const supermanRouter = require("express").Router();
const supermanController = require("../controllers/mans.controller");
const { findMan } = require("../middlewares/findMan.mv");
const powerRouter = require("./powerRouter");
const { uploadeFile } = require("../middlewares/uploadeFile.mv");
const imageRouter = require("./imageRouter");

supermanRouter.post(
  "/",
  uploadeFile.single("photo"),
  supermanController.createSuperman
);
supermanRouter.get("/", supermanController.getSupermans);
supermanRouter.get("/:manId", findMan, supermanController.getSuperman);
supermanRouter.put("/:manId", findMan, supermanController.updateSuperman);
supermanRouter.delete("/:manId", findMan, supermanController.deleteSuperman);

supermanRouter.use("/:manId/powers", findMan, powerRouter);

supermanRouter.use(
  "/:manId/images",
  findMan,
  uploadeFile.single("photo"),
  imageRouter
);

module.exports = supermanRouter;
