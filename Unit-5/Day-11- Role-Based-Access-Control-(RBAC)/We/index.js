const express = require("express");
const connection = require("./config/db");
const userModel = require("./model/user.model");
const userRouter = require("./routes/user.route");
const libraryRouter = require("./routes/library.route");
const authMiddleware = require("./middlewares/auth.middleware");``

const app = express();
const PORT = process.env.PORT || 8080;


app.use(express.json());
app.use("/user", userRouter);
app.use("/library",authMiddleware ,libraryRouter);


app.get("/", (req, res) => {
  res.send("Home Page");
});



app.listen(PORT, async () => {
  try {
    await connection;
    console.log(`connected to database and server is running on ${PORT}`);
  } catch (error) {
    console.log(`failed to connect to database ${error.message}`);
  }
});
