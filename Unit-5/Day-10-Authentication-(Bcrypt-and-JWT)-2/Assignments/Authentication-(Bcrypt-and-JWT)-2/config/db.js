const mongoose = require("mongoose");
const dotenv = require("dotenv").config();


const connection = mongoose.connect(process.env.MONGO_URI);
module.exports = connection