const express = require("express");
const router = express.Router();
const User = require("../models/User");

router.get("/login", (req, res) => {
  res.render("auth/login");
});

router.get("/register", (req, res) => {
  res.render("auth/register");
});

module.exports = router;
