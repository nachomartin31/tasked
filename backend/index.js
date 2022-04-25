require("dotenv").config();
const express = require("express");
const debug = require("debug")("tasked");
const morgan = require("morgan");
const chalk = require("chalk");


require("./config/mongooseConfig")

const server = express();
const port = process.env.PORT || 4000;

server.use(morgan("dev"));
server.use(express.json());

server.listen(port, () => { debug(chalk.blue.bold(`Server is running on port ${port}`)); });
