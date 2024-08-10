const express = require("express");
const userModel = require("../models/user.model");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

const userRouter = express.Router();

userRouter.post("/register", async (req, res) => {
  const { name, email, password, age } = req.body;
  try {
    // let user;
    bcrypt.hash(password, 5, async function (err, hash) {
      if (err) {
        res
          .status(500)
          .json({ message: `error occured during hashing of password` });
      } else {
        const user = new userModel({
          name,
          email,
          password: hash,
          age,
        });
        await user.save();
        res.status(201).json({ Message: "user registered successfully" });
      }
    });
  } catch (error) {
    res
      .status(404)
      .json({ Message: `Error occured during creation of user ${error}` });
  }
});

// LOGIN METHOD  :
userRouter.post("/login", async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await userModel.findOne({ email });

    if (!user) {
      return res.status(400).json({ Message: "User Not Found" });
    }

    if (user) {
      bcrypt.compare(password, user.password, function (err, result) {
        if (result) {
          const accessToken = jwt.sign(
            { name: user.name, role: user.role },
            process.env.JWT_SECRET_KEY1,
            { expiresIn: "10m" }
          );
          const refreshToken = jwt.sign(
            { name: user.name, role: user.role },
            process.env.JWT_SECRET_KEY2,
            { expiresIn: "1day" }
          );
          res
            .status(201)
            .json({
              Message: "user logged in successfully",
              accessToken,
              refreshToken
            });
        } else {
          res.status(400).json({ Message: "Wrong Password" });
        }
      });
    }
  } catch (error) {
    res.status(404).json({ Error: error });
  }
});

module.exports = userRouter;
