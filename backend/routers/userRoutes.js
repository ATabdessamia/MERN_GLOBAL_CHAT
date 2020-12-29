const express = require("express");
const {
  signup,
  login,
  protect,
  isLoggedIn,
  logOut,
} = require("../controllers/authControllers.js");

const {
  getAllUsers,
  getGlobalMessage,
  postGlobalMessage,
  getMe,
  getUser,
} = require("../controllers/userControllers.js");

const userRouter = express.Router();

userRouter.route("/").post(login);
userRouter.route("/signup").post(signup);
userRouter.route("/logout").get(logOut);

userRouter.use(isLoggedIn);
userRouter.use(protect);

userRouter.route("/users").get(getAllUsers);
userRouter.get("/me", getMe, getUser);
userRouter.route("/global").get(getGlobalMessage).post(postGlobalMessage);

module.exports = userRouter;
