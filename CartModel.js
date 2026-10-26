
const mongoose = require("mongoose");

const cartSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    image: { type: String },
    price: { type: Number, required: true },
    qty: { type: Number, default: 1 },
    color: { type: String },
    size: { type: String },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Cart", cartSchema);
