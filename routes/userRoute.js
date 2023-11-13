const express = require("express");
const Router = express.Router();
const userController = require("../controller/loginController.js");

Router.get("/", userController.getUser);
Router.get("/:id", userController.getUserById);
Router.post("/add", userController.addUser);
Router.delete("/delete/:id", userController.deleteUser);

module.exports = Router;
