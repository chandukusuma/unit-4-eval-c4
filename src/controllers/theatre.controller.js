const express = require("express")

const theatre = require("../models/theatres.model")

const router = express.Router();

router.post("", async (req, res) => {

    try{
        const Theatre = await theatre.create(req.body)

        return res.status(201).send(Theatre);
    }
    catch(e){
        return res.status("500").json({status: "Failed", message: e.message});
    }
})


router.get("/",  async (req, res) => {
    try{
        const Theatre = await theatre.find().lean().exec()

        return res.status(201).send(Theatre);
    }
    catch(e){
        return res.status("500").json({status: "Failed", message: e.message});
    }
})


module.exports = router