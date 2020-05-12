const express = require("express");
const routes = express.Router();
const UserController = require("./controlles/UserCOntroller");
routes.get("/users", UserController.index);

module.exports = routes;
