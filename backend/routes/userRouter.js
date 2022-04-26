const { Router } = require("express");

const userRouter = Router();
const userController = require("../controllers/userController");

const { getUser, createUser } = userController;

userRouter.get("/", getUser);
userRouter.post("/", createUser);

module.exports = userRouter;
