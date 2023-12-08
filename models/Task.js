const { Sequelize } = require("sequelize");
const db = require("../config/Database.js");

const { DataTypes } = Sequelize;

const Task = db.define(
  "task",
  {
    task_name: DataTypes.STRING,
    task_desc: DataTypes.STRING,
    category: DataTypes.STRING,
    priority: DataTypes.STRING,
    task_date: DataTypes.DATE,
    user_id: DataTypes.STRING,
  },
  {
    freezeTableName: true,
  }
);

module.exports = Task;
