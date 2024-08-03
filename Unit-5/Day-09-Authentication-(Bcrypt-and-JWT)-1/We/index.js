const express = require("express");
const dotenv = require("dotenv").config();
const connection = require("./config/db");
const userRouter = require("./routes/user.route");
const userModel = require("./models/user.model");

const app = express();
const PORT = process.env.PORT || 8080;

app.use(express.json());
app.use('/user',userRouter)

app.get("/", (req, res) => {
  res.send("Home Page");
});

app.listen(PORT, () => {
  try {
    console.log(`Running on port ${PORT}, and db also connected`);
  } catch (error) {
    res.send(`Error ${error}`);
  }
});
