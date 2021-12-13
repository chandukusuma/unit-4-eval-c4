const express = require("express")

const movies = require("../models/moviesCollection.model")

const collection = require("../middlewares/movie")

const router = express.Router();

router.post("", collection.single("Poster_url"), async(req, res) => {

    try{

        const Movie = await movies.create({

            name : req.body.name,
            actors: req.body.actors,
            languages : req.body.languages,
            directors: req.body.directors,
            Poster_url : req.file.path
        })

        return res.status(201).send(Movie);
    }
    catch(e){

        return res.status(500).json({status:"failed", message: e.message});
    }
})


module.exports = router