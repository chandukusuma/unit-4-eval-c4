const express = require("express");

const app = express();

app.use(express.json());


const usersController = require("./controllers/users.controller");

const moviesCollection = require("./controllers/movieCollection.controller")

app.use("/user", usersController);

app.use("movies", moviesCollection)

module.exports = app;