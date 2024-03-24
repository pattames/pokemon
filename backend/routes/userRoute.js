const express = require("express");

const {
  createUser,
  getUser,
  getAllUsers,
  updateUser,
  loginUser,
  signupUser,
} = require("../controllers/user");

const api = express.Router();

api.route("/").post(createUser).get(getAllUsers);
api.route("/:id").get(getUser).put(updateUser);

api.route("/login").post(loginUser);
api.route("/signup").post(signupUser);

module.exports = api;
