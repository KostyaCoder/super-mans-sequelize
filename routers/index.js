const router = require("express").Router();
const supermanRouter = require("./supermanRouter");

router.use("/supermans", supermanRouter);

module.exports = router;
