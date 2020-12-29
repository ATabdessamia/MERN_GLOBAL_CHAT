const catchAsync = require("express-async-handler");

const User = require("../models/usersModel.js");
const GlobalMessage = require("../models/globalMessageModel.js");

const getAllUsers = catchAsync(async (req, res) => {
  const keyword = req.query.keyword
    ? {
        name: {
          $regex: req.query.keyword,
          $options: "i",
        },
      }
    : {};

  const users = await User.find({ ...keyword });

  if (!users) throw Error("Users not found :/");

  res.status(200).json({
    status: "success",
    resultes: users.length,
    data: {
      users,
    },
  });
});

const getMe = (req, res, next) => {
  req.params.id = req.user.id;
  next();
};

const getUser = catchAsync(async (req, res) => {
  const user = await User.findById(req.params.id);

  if (!user) throw Error("Not found Id");

  res.status(200).json({
    status: "success",
    data: {
      user,
    },
  });
});

const getGlobalMessage = catchAsync(async (req, res) => {
  const globalMessage = await GlobalMessage.aggregate([
    {
      $lookup: {
        from: "users",
        localField: "from",
        foreignField: "_id",
        as: "fromObj",
      },
    },
  ]).project({
    "fromObj.password": 0,
    "fromObj.__v": 0,
    "fromObj.date": 0,
  });

  if (!globalMessage) throw Error("Global Message not found :/");

  res.status(200).json({
    status: "success",
    data: {
      globalMessage,
    },
  });
});

const postGlobalMessage = catchAsync(async (req, res) => {
  const message = await GlobalMessage.create({
    from: req.user.id,
    body: req.body.body,
  });

  if (!message) throw Error("Global Message not found :/");

  req.io.sockets.emit("messages", req.body.body);

  res.status(200).json({
    status: "success",
    data: {
      message,
    },
  });
});

module.exports = {
  getAllUsers,
  getGlobalMessage,
  postGlobalMessage,
  getMe,
  getUser,
};
