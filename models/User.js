const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    trim: true,
    minlength: 3,
  },
  email: {
    type: String,
    required: true,
    trim: true,
    minlength: 3,
    unique: true,
  },
  password: {
    type: String,
    required: true,
    minlength: 4,
  },
  tasks: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Task",
    },
  ],
});

const User = mongoose.model("User", userSchema);

module.exports = User;
