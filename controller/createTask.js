const Task = require("../models/Task.js");
const { nanoid } = require("nanoid");

const createTask = async (req, res) => {
  const refreshToken = req.cookies.refreshToken;
  const userId = req.cookies.userId;
  if (!refreshToken) return res.status(401);

  const taskId = "task-" + nanoid(12);
  const { task_name, task_desc, category, priority, task_date } = req.body;

  try {
    await Task.create({
      id: taskId,
      task_name: task_name,
      task_desc: task_desc,
      category: category,
      priority: priority,
      task_date: task_date,
      user_id: userId,
    });

    res.status(201).send({
      error: false,
      message: "task has been created",
      data: {
        id: taskId,
        user_id: userId,
        task_name: task_name,
      },
    });
  } catch (error) {
    res.status(500).json({
      error: true,
      message: error.message,
    });
  }
};

module.exports = createTask;
