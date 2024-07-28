const mongoose = require("mongoose");

// Schema
const glassSchema = mongoose.Schema({
  color: String,
  brand: String,
  price: Number,
  material: String,
});

// Model
const GlassModel = mongoose.model("glass", glassSchema);

module.exports = GlassModel;
