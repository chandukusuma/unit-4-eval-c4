const express = require("express");

const app = express();

app.use(express.json());


const usersController = require("./controllers/users.controller");

app.use("/user", usersController);

module.exports = app;