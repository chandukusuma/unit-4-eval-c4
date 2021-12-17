const express = require("express");

const app = express();

app.use(express.json());

var bodyParser = require('body-parser');
app.use(bodyParser.json({limit: "50mb"}));
app.use(bodyParser.urlencoded({limit: "50mb", extended: true, parameterLimit:50000}));



const usersController = require("./controllers/users.controller");

const moviesCollection = require("./controllers/moviesCollections.controller")

const theatreName = require("./controllers/theatre.controller");

const screenName = require("./controllers/screens.controller");

const showTime  = require("./controllers/shows.controller");



app.use("/shows", showTime);


app.use("/user", usersController);

app.use("/movies", moviesCollection)

app.use("/theatres", theatreName)

app.use("/screen", screenName)



module.exports = app;