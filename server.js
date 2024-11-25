// load dotenv if not in production
if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}
// load libs
const express = require("express");
const app = express();
const expressLayouts = require("express-ejs-layouts");
const mongoose = require("mongoose");
// load routes
const indexRouter = require("./routes/index");
// setup express
app.set("view engine", "ejs");
app.set("views", __dirname + "/views");
app.set("layout", "layouts/layout");
app.use(expressLayouts);
app.use(express.static("public"));
app.use(express.urlencoded({ extended: false }));

// setup routes
app.use("/", indexRouter);

// setup mongoose
mongoose.connect(process.env.DATABASE_URL);
const db = mongoose.connection;
db.on("error", (error) => console.error(error));
db.once("open", () => console.log("Connected to Mongoose"));

// setup server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () =>
  console.log(`Server running on port ${PORT}: http://localhost:${PORT}`)
);
