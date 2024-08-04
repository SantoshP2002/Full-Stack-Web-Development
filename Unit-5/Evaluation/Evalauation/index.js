const mongoose = require("mongoose");
const express = require("express");

const connection  = require("./index.js");
const usermodel = require("./user/user.schema.js")
const courseModel = require("./schema/course.schema.js")
const PORT = 8080;

const app = express();


app.get("/", (req, res)=>{
    res.send("Hello World !")
})


app.get("/courses", (req, res)=>{
        res.send("Data Getting success")
})

app.listen(PORT, (req, res)=>{
   try {
    console.log(`Running on port ${PORT}`)
   } catch (error) {
    res.send(`Error ${error}`)
   }
});




