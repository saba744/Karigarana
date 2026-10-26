
const mongoose = require("mongoose");

const reviewSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },

  productName: {
    type: String,
    required: true,
  },

  productImage: {
    type: String,
    required: true,
  },

  rating: {
    type: Number,
    required: true,
    min: 1,
    max: 5,
  },

  comment: {
    type: String,
    required: true,
  },
   reviewDate: {
      type: Date,
      required: true,
    },
},
{
  timestamps: true, 
});

module.exports = mongoose.model("Review", reviewSchema);
