const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema(
  {
    customer: {
      email: String,
      firstName: String,
      lastName: String,
      phone: String,
      city: String,
      zip: String,
      address: String,
      landmark: String,
      country: {
        type: String,
        default: "India",
      },
    },

    items: [
      {
        productId: String,
        title: String,
        image: String,
        price: Number,
        qty: Number,
        size: String,
        color: String,
      },
    ],

    payment: {
      method: {
        type: String, // online | cod
      },
      cardType: String, // debit | credit
      cardLast4: String,
    },

    totalAmount: Number,

    status: {
      type: String,
      default: "Pending",
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Order", orderSchema);
