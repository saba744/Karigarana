
const express = require("express");
const router = express.Router();
const PurchaseOrder = require("../models/PurchaseOrder");
const axios = require("axios");

// SAVE ORDER
router.post("/create", async (req, res) => {
  try {
    console.log("ORDER API HIT");
    console.log("REQ BODY 👉", req.body); // ⭐ VERY IMPORTANT

    const order = new PurchaseOrder(req.body);
    await order.save();

    res.json({ success: true });
  } catch (err) {
    console.log("SAVE ERROR 👉", err);
    res.status(500).json({ success: false });
  }
});


// CASHFREE SESSION (SANDBOX)
router.post("/create-payment", async (req, res) => {
  try {
    const response = await axios.post(
      "https://sandbox.cashfree.com/pg/orders",
      {
        order_id: "order_" + Date.now(),
        order_amount: req.body.amount,
        order_currency: "INR",
        customer_details: {
          customer_id: "cust_001",
          customer_phone: "9999999999",
          customer_email: "test@gmail.com",
        },
      },
      {
        headers: {
          "x-client-id": "TEST1094602418b7450dde5050bbc96942064901",
          "x-client-secret": "cfsk_ma_test_1f1c87e48516e53e3e205410db11a571_28d9b8f1",
          "x-api-version": "2022-09-01",
          "Content-Type": "application/json",
        },
      }
    );

    res.json({
      payment_session_id: response.data.payment_session_id,
    });
  } catch (err) {
    console.log(err.message);
    res.status(500).json({ error: "Cashfree session failed" });
  }
});

// ✅ ADMIN - GET ALL PURCHASE ORDERS
router.get("/all", async (req, res) => {
  try {
    const orders = await PurchaseOrder.find().sort({ createdAt: -1 });
    res.json(orders);
  } catch (err) {
    console.log("FETCH PURCHASE ERROR 👉", err);
    res.status(500).json({ message: "Cannot fetch purchase orders" });
  }
});


module.exports = router;
