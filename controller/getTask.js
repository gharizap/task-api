const Task = require("../models/Task.js");

const getTask = async (req, res) => {
  const refreshToken = req.cookies.refreshToken;
  const userId = req.cookies.userId;
  if (!refreshToken) return res.status(401);

  const taskIsExist = Task.findAll({
    where: {
      user_id: userId,
    },
  });

  if (!taskIsExist) {
    return res.status(401).json({
      error: true,
      message: "Task not found",
    });
  }

  try {
    const task = await Task.findAll({
      where: {
        user_id: userId,
      },
    });
    res.status(200).json(task);
  } catch (error) {
    res.status(500).json({
      error: true,
      message: error.message,
    });
  }
};

module.exports = getTask;
