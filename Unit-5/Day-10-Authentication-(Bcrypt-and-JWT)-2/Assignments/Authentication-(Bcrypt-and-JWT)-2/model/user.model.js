const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const { hashPassword, comparePassword } = require("../utils/hashPassword");

const userSchema = new mongoose.Schema({
  name: {
    type: "String",
    required: true,
  },
  age: {
    type: "Number",
    required: true,
  },
  email: {
    type: "String",
    required: true,
  },

  password: {
    type: "String",
    required: true,
  },
});

const userModel = mongoose.model("user", userSchema);

module.exports = userModel;
