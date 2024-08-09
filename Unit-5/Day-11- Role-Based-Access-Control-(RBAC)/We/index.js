const express = require("express");
const connection = require("./config/db");
const PORT = process.env.PORT || 8080;
const userRouter = require("./routes/user.route");
const userModel = require("./models/user.model");

const app = express();

app.get("/", (req, res) => {
  res.send("Home Page");
});

app.listen(PORT, async ()=>{
     try {
        await connection;
        console.log(`connected to database and server is running on ${PORT}`);
        
     } catch (error) {
        console.log(`failed to connect to database ${error.message}`);
     }
})
