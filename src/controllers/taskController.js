const Task = require("../models/taskModel");

const getTasks = async (req, res) => {
  console.log("Getting all tasks");
  try {
    const tasks = await Task.find({});
    console.log("Tasks found");
    res.status(200).json({ tasks });
  } catch (error) {
    console.log("Error getting tasks:", error.message);
    res.status(500).json({ message: "Server error" });
  }
};

const createTask = async (req, res) => {
  console.log("Creating new task");

  const { title, description } = req.body;
  try {
    const task = await Task.create({ title, description });
    console.log("Task created successfully");
    res.status(201).json({ task });
  } catch (error) {
    console.log("Error creating task:", error.message);
    res.status(500).json({ message: "Server error" });
  }
};

const updateTask = async (req, res) => {
  console.log("Updating task");

  const { title, description } = req.body;
  try {
    const task = await Task.findOneAndUpdate({ title }, { description });
    console.log("Task updated successfully");

    res.status(201).json({ task });
  } catch (error) {
    console.log("Error updating task:", error.message);
    res.status(500).json({ message: "Server error" });
  }
};

const deleteTask = async (req, res) => {
  console.log("Deleting task");
  const { title } = req.body;
  try {
    const task = await Task.findOneAndDelete({ title });
    console.log("Task deleted successfully");
    res.status(201).json({ task });
  } catch (error) {
    console.log("Error deleting task:", error.message);
    res.status(500).json({ message: "Server error" });
  }
};

module.exports = { getTasks, createTask, updateTask, deleteTask };
