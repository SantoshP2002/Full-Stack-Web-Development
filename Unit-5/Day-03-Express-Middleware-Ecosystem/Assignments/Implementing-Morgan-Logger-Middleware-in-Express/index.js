const express = require("express")
const morgan = require("morgen")
const fs = require("fs")
const path = require("path")
const { log } = require("console")

const app = express()
const PORT = 8080 || 4320


app.listen(PORT, ()=>{
    console.log("App is Running on", PORT);
})