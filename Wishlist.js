const mongoose = require("mongoose");

const wishlistSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true
  },

  productId: {
    type: Number,
    required: true
  },

  title: String,
  price: Number,
  oldPrice: Number,
  image: String,
  category: String,

}, { timestamps: true });

module.exports = mongoose.model("Wishlist", wishlistSchema);
