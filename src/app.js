console.log("starting app");

// load libs
const express = require("express");
const app = express();
const expressLayouts = require("express-ejs-layouts");
const cookieParser = require("cookie-parser");
require("./config/db");

// load routes
const indexRouter = require("./routes/indexRoutes");
const authRouter = require("./routes/authRoutes");
const profileRouter = require("./routes/profileRoutes");

// setup express
app.set("view engine", "ejs");
app.set("views", __dirname + "/views");
app.set("layout", "layouts/layout");
app.use(expressLayouts);
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true })); // true allows parsing of nested objects in the request body
app.use(cookieParser());

// setup routes
app.use("/", indexRouter);
app.use("/auth", authRouter);
app.use("/profile", profileRouter);

// 404 page
app.use((req, res) => {
  res.status(404).render("notFound");
});

module.exports = app;
