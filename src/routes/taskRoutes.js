const express = require("express");
const router = express.Router();
const protect = require("../middlewares/authMiddleware");
const {
  createTask,
  updateTask,
  deleteTask,
} = require("../controllers/taskController");

router.use(protect);

router
  .route("/")
  .get((req, res) => {
    res.render("newTask");
  })
  .post(createTask)
  .put(updateTask)
  .delete(deleteTask);

module.exports = router;
