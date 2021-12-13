const express = require("express")

const Show = require("../models/shows.model")

const router = express.Router();

router.post("/", async(req, res) => {

   try{
    const show = await Show.create(req.body);

    return res.status(201).send(show)
   }
   catch(e){
    res.status(500).json({status: e.message})
   }
})

module.exports = router;