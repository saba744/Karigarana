const mongoose = require("mongoose");

const decorProductSchema = new mongoose.Schema(
  {
    title: String,
    price: Number,
    category: String,
    image: String
  },
  { timestamps: true }
);

module.exports = mongoose.model("DecorProduct", decorProductSchema);
