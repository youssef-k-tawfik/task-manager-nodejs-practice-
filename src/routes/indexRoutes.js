const express = require("express");
const router = express.Router();

// load models
// const Task = require("../models/Task");

// middlewares
function isAuthenticated(req, res, next) {
  // authenticate with jwt

  const authenticated = false;
  if (authenticated) {
    return next();
  } else {
    res.redirect("/auth/login");
  }
}

router.get("/", isAuthenticated, (req, res) => {
  res.render("index");
});

module.exports = router;
