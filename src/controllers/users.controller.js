const express = require("express");

const user = require("../models/users.model");

const upload = require("../middlewares/upload")

const router = express.Router();

router.post("/", upload.single("profile"), async (req, res) => {

    try{

        const User = await user.create({

            name : req.body.name,

            email : req.body.email,

            password: req.body.password,

            profile : req.file.path,

            roles: req.body.roles
            
        });

        return res.status(201).send(User);
    }
    catch(e){

        return res.status("500").json({status: "Failed", message: e.message});
    }
})


module.exports = router