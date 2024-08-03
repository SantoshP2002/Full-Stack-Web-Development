const mongoose = require("mongoose");

const connection = mongoose.connect(process.env.MONGo_URI);
module.exports = connection