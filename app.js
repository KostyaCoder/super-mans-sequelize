const express = require('express');
const router = require('./routers');
const basicError = require("./middlewares/error/basic");

const app = express();
app.use(express.json());
app.use(router);
app.use(basicError);

module.exports = app;