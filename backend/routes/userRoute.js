const express = require("express");

const { createUser, getUser, getAllUsers } = require("../controllers/user");

const api = express.Router();

api
.route("/")
.post(createUser)
.get(getAllUsers);

api
.route("/:id")
.get(getUser);


module.exports = api;
