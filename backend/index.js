require("dotenv").config();
const express = require("express");
const debug = require("debug")("tasked");
const morgan = require("morgan");
const chalk = require("chalk");

require("./config/mongooseConfig");

const server = express();
const port = process.env.PORT || 4000;

server.use(morgan("dev"));
server.use(express.json());

const userRouter = require("./routes/userRouter");

server.use("/users", userRouter);

const projectRouter = require("./routes/projectRouter");

server.use("/projects", projectRouter);

server.listen(port, () => { debug(chalk.blue.bold(`Server is running on port ${port}`)); });
