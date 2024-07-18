const express = require("express");

const homeRouter = express.Router();

homeRouter.post("/", (req, res) => {
  res.send("Data received");
});

module.exports = homeRouter;
