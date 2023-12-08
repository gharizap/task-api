const express = require("express");
const dotenv = require("dotenv");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const router = require("./routes/router.js");
const db = require("./config/Database.js");
const Task = require("./models/Task.js");

dotenv.config();
const app = express();
const port = 4000;

async function startServer() {
  try {
    await db.authenticate();
    console.log("Database Connected...");
    await db.sync();
  } catch (error) {
    console.error(error);
  }

  app.use(cors());
  app.use(cookieParser());
  app.use(express.json());
  app.use(router);

  app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
  });
}

startServer();
