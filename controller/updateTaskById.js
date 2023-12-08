const Task = require("../models/Task.js");

const updateTaskId = async (req, res) => {
  const refreshToken = req.cookies.refreshToken;
  const userId = req.cookies.userId;
  const taskId = req.params.id;
  if (!refreshToken) return res.status(401);

  const taskIsExist = await Task.findOne({
    where: {
      id: taskId,
    },
  });

  if (!taskIsExist) {
    return res.status(404).json({
      error: true,
      message: "Task not found",
    });
  }

  if (userId !== taskIsExist.user_id) {
    return res.status(401).json({
      error: true,
      message: "Unauthorized",
    });
  }

  try {
    const { task_name, task_desc, category, priority, task_date } = req.body;

    await Task.update(
      {
        task_name: task_name,
        task_desc: task_desc,
        category: category,
        priority: priority,
        task_date: task_date,
      },
      {
        where: {
          id: taskId,
        },
      }
    );

    res.json({
      error: false,
      message: "success",
    });
  } catch (error) {
    res.status(404).json({
      error: true,
      message: error.message,
    });
  }
};

module.exports = updateTaskId;
