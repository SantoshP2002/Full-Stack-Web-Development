const express = require("require")
const mongoose = require("mongoose")

const app = express();

app.use(express.json())

const userSchema = new mongoose.Schema({
    name: String,
    age: Number,
    email: String,
    password: String,
    gender: String
})


const userModel = mongoose.model("User", userSchema)







app.listen(8080,()=>{
    console.log("Server is running on port 8080");
} )