const express = require("express");

const app = express();

app.use(express.json());


const usersController = require("./controllers/users.controller");

const moviesCollection = require("./controllers/movieCollection.controller")

const theatreName = require("./controllers/theatre.controller");

const screenName = require("./controllers/screens.controller");

const showTime  = require("./controllers/shows.controller");

app.use("/shows", showTime);


app.use("/user", usersController);

app.use("/movies", moviesCollection)

app.use("/theatres", theatreName)

app.use("/screen", screenName)

module.exports = app;