const mongoose = require("mongoose");

const userSchema = mongoose.Schema(
  {
    name: {
      type: "String",
      required: true,
    },
    email: {
      type: "String",
      required: true,
    },
    age: {
      type: "String",
      required: true,
    },
    password: {
      type: "String",
      required: true,
    },
    role:{
      type: "String",
      default: "user",
      required: true
    }
  },
  {
    versionKey: false,
  }
);


const userModel = mongoose.model("User", userSchema);

module.exports = userModel

