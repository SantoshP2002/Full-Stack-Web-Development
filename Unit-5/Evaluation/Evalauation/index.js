const mongoose = require("mongoose");
const express = require("express");

const connection  = mongoose.connect("./index.js");
const usermodel = mongoose.model("./user/user.schema.js")
const courseModel = mongoose.model("./schema/course.schema.js")
const PORT = 8080;

const app = express();


app.get("/", (req, res)=>{
    res.send("Hello World !")
})

app.listen(PORT, (req, res)=>{
    res.send({`Running on port ${PORT}`})
});




