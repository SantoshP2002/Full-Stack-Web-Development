const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
    username:{
        type: String,
        required: true,
    },

    password: {
        type: String,
        required: true
    },

    enrolledCourses: {
        type: String,
        required: true,
    }
});

const usermodel = mongoose.model("User", userSchema)

module.exports = usermodel