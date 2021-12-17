const express = require("express")

const Screen = require("../models/screens.model")

const router = express.Router();

router.post("/", async(req, res) => {

   try{
    const screen = await Screen.create(req.body);

    return res.status(201).send(screen)
   }
   catch(e){
    res.status(500).json({status: e.message})
   }
})

router.get("/", async(req, res) => {

    try{
     const screen = await Screen.find().populate("theatre_ids").lean().exec();
 
     return res.status(201).send(screen)
    }
    catch(e){
     res.status(500).json({status: e.message})
    }
 })

module.exports = router
