const express = require("express");
const router = express.Router();

// load models
const Task = require("../models/Task");

router.get("/", (req, res) => {
  res.render("index");
});

module.exports = router;
