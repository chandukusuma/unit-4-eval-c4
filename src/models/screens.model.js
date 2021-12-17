const mongoose = require("mongoose")

const screenSchema = new mongoose.Schema({

    name : {type:  String, required: true},
    theatre_ids: 
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "theatre",
            required: true
        }
    
})

const screen = mongoose.model("screen", screenSchema);

module.exports = screen