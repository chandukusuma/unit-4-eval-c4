const mongoose = require("mongoose");

const userSchema =  new mongoose.Schema({

    name : {type: String, required: true},

    email: {type: String, required: true, unique:true},

    password : {type: String, required: true},

    profile : {type: String, required: true},

    roles: {type: String, required: true}
},
{
    versionKey: false,
    timestamps : true
})

const user = mongoose.model("user", userSchema)

module.exports = user;