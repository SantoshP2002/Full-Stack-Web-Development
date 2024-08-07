const express = require("express");
const dotenv = require("dotenv").config();
const connection = require("./config/db");
const userRouter = require("./routes/user.route");
const userModel = require("./models/user.model");
const auth = require("./middleware/auth.middleware");
const checkAdmin = require("./middleware/checkAdmin");

const app = express();
const PORT = process.env.PORT || 8080;

app.use(express.json());
app.use("/user", userRouter);

app.get("/", (req, res) => {
  res.send("Home Page");
});

app.get("/movies-data", (req, res) => {
  if (req.query.token == "idCard123") {
    res.send("Movie data....");
  } else {
    res.send("please login first");
  }
});
app.get("/dashboard", (req, res) => {
  res.send("dashboard data....");
});

app.get("/product", (req, res) => {
  res.send("product data....");
});

app.get("/cart", auth, (req, res) => {
  res.send("cart data....");
});

app.get("/checkout", auth, (req, res) => {
  console.log(req.body);

  res.send("checkout data....");
});
app.get("/update", [auth, checkAdmin], (req, res) => { 
  res.send("update data....");
});
app.get("/delete", auth, (req, res) => {
  res.send("delete data....");
});

app.listen(PORT, () => {
  try {
    console.log(`Running on port ${PORT}, and db also connected`);
  } catch (error) {
    res.send(`Error ${error}`);
  }
});
