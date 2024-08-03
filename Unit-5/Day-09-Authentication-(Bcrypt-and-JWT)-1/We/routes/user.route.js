 const express = require("express");
 const userModel = require("../models/user.model");

 const userRouter = express.Router();

 userRouter.post("/register", async (req, res) => {
    const { name, email, password, age } = req.body;
    try {
         const user = await new userModel({
            name,
            email,
            password,
            age
         })
         await user.save()
        res.status(201).json({"Message":"user created successfully"});
    } catch (error) {
        res.status(404).json({"Error":error});
    }
 });



 userRouter.post("/login", async (req, res) => {
    // const {email, password} = req.body;
    try {
        // const user = await userModel.findOne({email, password});

        // if(!user){
        //     res.status(400).json({'Message': "Invalid User"})
        // }



        res.status(201).json({"Message":"user logged in successfully"});
    } catch (error) {
        res.status(404).json({"Error":error});
    }
 });

 module.exports = userRouter  