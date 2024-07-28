const express = require("express");
const userRouter = express.Router();

const createUserController = require("../controllers/user/createUser.controller");
const getAllUserController = require("../controllers/user/getAllUser.controller");
const updateUserController = require("../controllers/user/updateUser.controller");
const deleteUserController = require("../controllers/user/deleteUser.controller");

userRouter. post("/create-user", createUserController);
userRouter. get("/get-all-user", getAllUserController);
userRouter. patch("/update-user", updateUserController);
userRouter. delete("/delete-user", deleteUserController);

module.exports = userRouter
