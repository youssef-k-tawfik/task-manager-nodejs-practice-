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
    enum: ["pending", "completed"],
    default: "pending",
  },
  dateAdded: {
    type: Date,
    default: Date.now,
    // default: () => Date.now(),
  },
  dateFinished: {
    type: Date,
  },
});

const Task = mongoose.model("Task", taskSchema);

module.exports = Task;
