const express = require('express');
const router = require('./routers');
const basicError = require("./middlewares/error/basic");
const constants = require('./constants');

const app = express();
app.use(express.json());
app.use(router);
app.use(express.static(constants.FILE_PATH));
app.use(basicError);

module.exports = app;