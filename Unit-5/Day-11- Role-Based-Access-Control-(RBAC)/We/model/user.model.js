const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: {
    type: "String",
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

  role: {
    type: "String",
    required: true,
    default: "guest",
    enum: ["guest", "member", "librarian"],
  },
});

const usermodel = mongoose.model("user", userSchema);
module.exports = usermodel;
