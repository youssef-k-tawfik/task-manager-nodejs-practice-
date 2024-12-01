const express = require("express");
const router = express.Router();
const protect = require("../middlewares/authMiddleware");

router.get("/", protect, (req, res) => {
  //   console.log("user from route: " + req.user);

  res.render("profile", { user: req.user });
});

module.exports = router;
