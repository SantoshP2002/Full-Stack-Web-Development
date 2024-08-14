const express = require("express");
const dotenv = require("dotenv").config();
const connection = require("./config/db");
const router = require("./routes/auth.route");
const tokenModel = require("./model/token.model");
const userModel = require("./model/user.model");

const app = express();
const PORT = process.env.PORT || 8080;

app.use(express.json());

app.listen(PORT, () => {
    try {
        console.log(`Running on port ${PORT}, and db also connected`);
    } catch (error) {
        res.send(`Error ${error}`);
    }
})