console.log("starting app");

// load libs
const express = require("express");
const app = express();
const expressLayouts = require("express-ejs-layouts");


// load routes
const indexRouter = require("./routes/indexRoutes");
const authRouter = require("./routes/authRoutes");

// setup express
app.set("view engine", "ejs");
app.set("views", __dirname + "/views");
app.set("layout", "layouts/layout");
app.use(expressLayouts);
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true })); // true allows parsing of nested objects in the request body

// setup routes
app.use("/", indexRouter);
app.use("/auth", authRouter);

module.exports = app;
