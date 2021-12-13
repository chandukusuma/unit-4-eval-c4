const mongoose = require("mongoose");

const showSchema = mongoose.Schema({

    time: {type: String, required: true},
    movie : {type: String, required:true},
    total_seats : {type: Number, required: true},
    screen : [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref : "screen",
            required: true
        }
    ]
})

const show = mongoose.model("show", showSchema);

module.exports = show