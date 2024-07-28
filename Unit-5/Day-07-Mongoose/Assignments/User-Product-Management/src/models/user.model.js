const mongoose = require("mongoose")
const userSchema  = require("../schemas/user.Schemas")

const UserModel = mongoose.model("User", userSchema)

module.exports = UserModel