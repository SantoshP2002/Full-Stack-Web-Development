const mongoose = require("mongoose");

const tokenSchema = new mongoose.Schema({
    token: {
        type: "String",
        required: true,
    },
    expiresAt: {
        type: "Date",
        required: true,
    },
});

const tokenModel = mongoose.model("token", tokenSchema);
module.exports = tokenModel