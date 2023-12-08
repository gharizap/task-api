const Task = require("../models/Task.js");

const getTaskById = async (req, res) => {
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
      message: "Activity not found",
    });
  }

  if (userId !== taskIsExist.user_id) {
    return res.status(401).json({
      error: true,
      message: "Unauthorized",
    });
  }

  try {
    const task = await Task.findOne({
      where: {
        id: taskId,
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

module.exports = getTaskById;
