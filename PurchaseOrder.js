const mongoose = require("mongoose");

const purchaseOrderSchema = new mongoose.Schema({
  productName: String,
  price: Number,
  quantity: Number,    
  totalPrice: Number,
  image: String,
  paymentMode: String, // debit | credit | cod
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("PurchaseOrder", purchaseOrderSchema);
