
const express = require("express");
const router = express.Router();
const Order = require("../models/Order");




router.post("/place", async (req, res) => {
  try {
    const { customer, items, payment, totalAmount } = req.body;

    const order = new Order({
      customer,
      items,
      payment,
      totalAmount,
    });

    await order.save();


    res.status(201).json({
      message: "Order placed successfully",
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Order failed" });
  }
});

module.exports = router;
