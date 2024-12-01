const express = require("express");
const router = express.Router();

const { register, login } = require("../controllers/authController");

router
  .route("/login")
  .get((req, res) => {
    res.render("auth/login");
  })
  .post(login);

router
  .route("/register")
  .get((req, res) => {
    res.render("auth/register");
  })
  .post(register);

module.exports = router;
