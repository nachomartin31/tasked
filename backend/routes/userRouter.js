const { Router } = require("express");

const userRouter = Router();
const userController = require("../controllers/userController");

const { getUser, createUser, logIn } = userController;

userRouter.get("/", getUser);
userRouter.post("/", createUser);
userRouter.post("/login", logIn);

module.exports = userRouter;
