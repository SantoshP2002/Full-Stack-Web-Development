const express = require("express");
const fs = require("fs");
const app = express();
const cors = require("cors")


app.use(express.json());
app.use(cors())     
//TimeLoger
// Middleware will run before every route
// app.use((req, res, next) => {
//   const startTime = new Date().getTime();
//   next();
//   const endTime = new Date().getTime();
//   console.log(`The Processing time is${endTime-startTime}ms`);
// });

app.use((req, res, next) => {
  fs.appendFileSync(
    "./logs.txt",
    `Client Visited ${req.url} and the method was ${Date()}\n`,
    "utf-8"
  );
  next();
});

// GET METHOD =>
app.get("/", (req, res) => {
  res.send("HOME PAGE");
});

app.get("/about", (req, res) => {
  res.send({"msg": "Home Page"});
});

app.get("/contact", (req, res) => {
  res.send({"msg": "About Page"});
});

app.get("/data", (req, res) => {
  res.send("DATA PAGE");
});

// add data
app.use((req, res, next) => {
  req.body.city = "Nagapur";
  next();
});

app.post("/add", (req, res) => {
  console.log(req.body);
  res.send("data has been posted");
});

app.listen(8080, () => {
  console.log("Running is server port on 8080");
});
