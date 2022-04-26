const { Router } = require("express");

const userRouter = Router();
const userController = require("../controllers/userController");

const { checkAuth } = require("../middleware/checkAuth");

const {
  getUser,
  createUser,
  logIn,
  confirm,
  resetPassword,
  checkToken,
  newPassword,
  profile
} = userController;

userRouter.route("/")
  .get(getUser)
  .post(createUser);

userRouter.route("/login")
  .post(logIn);

userRouter.route("/confirm/:token")
  .get(confirm);

userRouter.route("/reset-password")
  .post(resetPassword);

userRouter.route("/reset-password/:token")
  .get(checkToken)
  .post(newPassword);

userRouter.get("/profile", checkAuth, profile);

module.exports = userRouter;
