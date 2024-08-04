const mongoose = require("mongoose");

const connection = mongoose.connect(MONGO_URI)


module.exports = connection
