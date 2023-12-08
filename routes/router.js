const express = require("express");
const getTask = require("../controller/getTask");
const createTask = require("../controller/createTask");
const verifyToken = require("../middleware/verifyToken");
const updateTaskById = require("../controller/updateTaskById");
const getTaskById = require("../controller/getTaskById");
const deleteTaskById = require("../controller/deleteTaskById");

const router = express.Router();

router.get("/task", verifyToken, getTask);
router.get("/task/:id", verifyToken, getTaskById);
router.post("/task", verifyToken, createTask);
router.put("/task/:id", verifyToken, updateTaskById);
router.delete("/task/:id", verifyToken, deleteTaskById);

module.exports = router;
