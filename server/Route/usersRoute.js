const express = require("express");
const route = express.Router();

// // import controllar
const {
  CreateUser,
  login,
  getUser,
  updateUser,
} = require("../Controller/usersController");

// // api
route.get("/", getUser);
route.post("/create", CreateUser);
route.patch("/:id", updateUser);
route.post("/login", login);

// export
module.exports = route;
