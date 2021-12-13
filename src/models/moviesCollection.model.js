const mongoose = require("mongoose")

const movieSchema = new mongoose.Schema({

    name : {type:String, required: true},

    actors: [{type: String, required: true}],

    languages : [{type: String, required: true}],

    directors : [{type: String, required: true}],

    Poster_url : [{type: String, required: true}],
},
{
    versionKey: false,
    timestamps: true
})


const movies = mongoose.model("movies", movieSchema)

module.exports = movies



