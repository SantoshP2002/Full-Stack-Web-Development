const mongoose = require("mongoose");
const url = "mongodb://127.0.0.1:27017/glassCap10";

const connection = mongoose.connect(url);

module.exports = connection;
