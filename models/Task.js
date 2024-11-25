const mongoose = require("mongoose");

const taskSchema = mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    enum: ["pending", "ongoing", "completed"],
    default: "pending",
  },
});

const Task = mongoose.model("Task", taskSchema);

module.exports = Task;