const express = require("express");
const getTask = require("../controller/getTask");
const createTask = require("../controller/createTask");
const verifyToken = require("../middleware/verifyToken");
const updateTaskById = require("../controller/updateTaskById");
const getTaskById = require("../controller/getTaskById");
const getTaskByDate = require("../controller/getTaskByDate");
const deleteTaskById = require("../controller/deleteTaskById");

const router = express.Router();

router.get("/tasks", verifyToken, getTask);
router.get("/tasks/:id", verifyToken, getTaskById);
router.get("/tasks/date/:date", verifyToken, getTaskByDate);
router.post("/tasks", verifyToken, createTask);
router.put("/tasks/:id", verifyToken, updateTaskById);
router.delete("/tasks/:id", verifyToken, deleteTaskById);

module.exports = router;
