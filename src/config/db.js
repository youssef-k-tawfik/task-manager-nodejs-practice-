const mongoose = require("mongoose");

// setup mongoose
mongoose
  .connect(process.env.DATABASE_URL)
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.error("DB connection error:", err));

module.exports = mongoose;
