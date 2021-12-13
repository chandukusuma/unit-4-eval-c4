const express = require("express");

const user = require("../models/users.model");

const router = express.Router();

router.post("/", async (req, res) => {

    try{

        const User = await user.create(req.body);

        return res.status(201).json({User});
    }
    catch(e){

        return res.status("500").json({status: "Failed", message: e.message});
    }
})


module.exports = router