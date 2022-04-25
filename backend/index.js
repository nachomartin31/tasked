require("dotenv").config();
const express = require("express");
const debug = require("debug")("tasked");
const morgan = require("morgan");

const server = express();

server.use(morgan("dev"));
server.use(express.json());

const port = process.env.PORT || 4000;

server.listen(
  port,
  debug(`Server is running on port ${port}`)
);
