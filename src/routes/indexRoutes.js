const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  if (!req.cookies.token) {
    return res.redirect("/auth/login");
  }
  res.redirect("/profile");
});

module.exports = router;
