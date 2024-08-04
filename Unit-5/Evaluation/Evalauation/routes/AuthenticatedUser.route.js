const express = require("express");
const userModel = require("../user/user.schema");

const userRouter = express.Router();

// enroll
userRouter.post("/enroll", async (req, res) => {
  const { _id, username, password, enrolledCourses } = req.body;

  try {
    const user = await new userModel({
      _id,
      username,
      password,
      enrolledCourses,
    });

    await user.save();
    res.status(201).json({
      message: "Successfully enrolled in the course.",
    });
  } catch (error) {
    res.status(404).send({ Error: error });
  }
});

// cancel-enrollment
userRouter.post("/cancel-enrollment", async (req, res) => {
  const { _id, username, password, enrolledCourses } = req.body;

  try {
    const user = await new userModel({
      _id,
      username,
      password,
      enrolledCourses,
    });

    await user.save();
    res.status(201).json({
      message: "Successfully canceled enrollment.",
    });
  } catch (error) {
    res.status(404).send({ Error: error });
  }
});



