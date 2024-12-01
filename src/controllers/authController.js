const User = require("../models/User");
const generateToken = require("../utils/generateToken");

// Register new user
const register = async (req, res) => {
  console.log("registering new user");

  const { username, email, password } = req.body;

  try {
    // Check if user already exists
    const existingUser = await User.findOne({ email });
    console.log("User already Exist?", existingUser ? "Yes" : "No");

    if (existingUser) {
      console.log("Responding with user already exists");
      return res.status(400).json({ message: "User already exists" });
    }

    console.log("Creating new user");
    const user = await User.create({ username, email, password });
    console.log("User created successfully");

    console.log("Responding with token");

    res.status(201).json({
      token: generateToken(user._id),
      message: "User created successfully!",
    });
  } catch (error) {
    console.log("Error creating user:", error.message);
    res.status(500).json({ message: "Server error" });
  }
};

// Login user
const login = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email });
    if (!user || !(await user.comparePassword(password))) {
      return res
        .status(401)
        .json({ message: "Login credentials doesn't match!" });
    }

    const token = generateToken(user._id);
    res.cookie("token", token, {
      httpOnly: true,
      secure: true,
      sameSite: "strict",
      maxAge: 24 * 60 * 60 * 1000, // in ms
    });
    res.redirect("/profile");
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};

module.exports = { register, login };
