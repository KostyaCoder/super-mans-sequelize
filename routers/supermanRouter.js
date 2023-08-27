const supermanRouter = require("express").Router();
const supermanController = require("../controllers/mans.controller");
const powerRouter = require("./powerRouter");
const imageRouter = require("./imageRouter");
const { uploadeFile } = require("../middlewares/uploadeFile.mv");
const { findMan } = require("../middlewares/findMan.mv");
const { validateMans } = require("../middlewares/validate.mv");

supermanRouter.post(
  "/",
  uploadeFile.single("photo"),
  validateMans,
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
