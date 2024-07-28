const express = require("express");
const mongoose = require("mongoose");
const UserModel = require("./src/models/user.model");

const app = express();

const mongoURI = "mongodb://127.0.0.1:27017/Mongoose";

app.use(express.json());

app.post("/create-user", async (req, res) => {
  const { name, email, password } = req.body;

  try {
    if (!name) {
      return res.status(400).send({ MSG: "Name is required" });
    }

    if (!email) {
      return res.status(400).send({ MSG: "Email is required" });
    }

    if (!password) {
      return res.status(400).send({ MSG: "Password is required" });
    }

    const userExist = await UserModel.findOne({ email });

    if (userExist) {
      return res.status(400).send({ MSG: "User already exists" });
    }

    const user = new UserModel({
      name,
      email,
      password,
      ...req.body,
    });
    await user.save();
    res.status(201).json({ MSG: "User created successfully", data: user });
  } catch (error) {
    res.status(500).send({ MSG: "User not created", error: error.message });
  }
});

app.get("/get-users", async (req, res) => {
  try {
    const users = await UserModel.find();
    res.status(200).send(users);
  } catch (error) {
    res.status(500).send({ MSG: "Error fetching users", error: error.message });
  }
});

app.patch("/update-user", async (req, res) => {
  const { _id, ...updateData } = req.body;
  try {
    await UserModel.findByIdAndUpdate(_id, updateData);
    res.status(200).send({ MSG: "User updated successfully" });
  } catch (error) {
    res.status(500).send({ MSG: "Failed to update user", error: error.message });
  }
});

app.listen(8080, async () => {
  try {
    await mongoose.connect(mongoURI);
    console.log("Connected to MongoDB");
  } catch (error) {
    console.log("Connection to MongoDB failed", error.message);
  }
  console.log("Server is running on port 8080");
});
