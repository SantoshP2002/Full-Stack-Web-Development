const mongoose = require("mongoose");
const userSchema = new mongoose.Schema(
  {
    name: {
      type: "String",
      required: true,
    },
    age: {
      type: "Number",
    },
    email: {
      type: "String",
      require: true,
    },
    password: {
      type: "String",
      require: true,
    },
    gender: "String",
    city: "String",
  },
  { versionKey: false, timestamp: true }
);

module.export = userSchema;
