const express = require("express");
const dotenv = require("dotenv").config();
const connection = require("./config/db");
const userRouter = require("./routes/user.route");
const userModel = require("./models/user.model");
const auth = require("./middleware/auth.middleware");
const checkAdmin = require("./middleware/checkAdmin");
const blacklistedToken = require("./blacklist")
const jwt = require("jsonwebtoken");

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

app.get("logout",(req, res) => {
  const token = req.headers.authorization.split(" ")[1]
  blacklistedToken.push(token)
  res.send("logout sucessfull....")
});

app.get("/get-accessToken",  (req, res) => {
  const refreshToken = req.headers.authorization.split(" ")[1];
  jwt.verify(refreshToken, process.env.JWT_SECRET_KEY2, function (err, decoded) {
      if(decoded){
        const accessToken = jwt.sign(
          { name: decoded.name, role: decoded.role },
          process.env.JWT_SECRET_KEY1,
          { expiresIn: "10m" }
        );
        res
          .status(200)
          .json({
            Message: "accessToken generated successfully",
            accessToken
          });
      }
    })
})

app.listen(PORT, () => {
  try {
    console.log(`Running on port ${PORT}, and db also connected`);
  } catch (error) {
    res.send(`Error ${error}`);
  }
});
