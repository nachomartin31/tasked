const { Router } = require("express");

const userRouter = Router();
const userController = require("../controllers/userController");

const {
  getUser,
  createUser,
  logIn,
  confirm,
  resetPassword,
  checkToken
} = userController;

userRouter.get("/", getUser);
userRouter.post("/", createUser);
userRouter.post("/login", logIn);
userRouter.get("/confirm/:token", confirm);
userRouter.get("/reset-password/:token", checkToken);
userRouter.post("/reset-password", resetPassword);

module.exports = userRouter;
