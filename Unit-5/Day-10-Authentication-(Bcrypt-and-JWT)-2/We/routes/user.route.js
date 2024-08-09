const express = require("express");
const userModel = require("../models/user.model");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

const userRouter = express.Router();

userRouter.post("/register", async (req, res) => {
  const { name, email, password, age } = req.body;
  try {
    let user;
    bcrypt.hash(password, 5, function (err, hash) {
      if (err) {
        res
          .status(500)
          .json({ message: `error occured during hashing of password` });
      } else {
        user = new userModel({
          name,
          email,
          password: hash,
          age,
        });
      }
    });
    await user.save();
    res.status(201).json({ Message: "user registered successfully" });
  } catch (error) {
    res.status(404).json({ Error: error });
  }
});

userRouter.post("/login", async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await userModel.findOne({ email, password });

    if (!user) {
      return res.status(400).json({ Message: "Invalid User" });
    }
    const token = jwt.sign({ name: "santosh", role: user.role }, "masai");

    res.status(201).json({ Message: "user logged in successfully", token });
  } catch (error) {
    res.status(404).json({ Error: error });
  }
});

module.exports = userRouter;
