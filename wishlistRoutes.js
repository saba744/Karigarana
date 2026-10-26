const express = require("express");
const router = express.Router();
const Wishlist = require("../models/Wishlist");
const auth = require("../middleware/auth");


// ➕ Add / Remove Wishlist
router.post("/toggle", auth, async (req, res) => {
  const { product } = req.body;

  const exists = await Wishlist.findOne({
    userId: req.userId,
    productId: product.id
  });

  if (exists) {
    await Wishlist.deleteOne({ _id: exists._id });
    return res.json({ message: "Removed from wishlist" });
  }

  const wish = new Wishlist({
    userId: req.userId,
    productId: product.id,
    title: product.title,
    price: product.price,
    oldPrice: product.oldPrice,
    image: product.image,
    category: product.category
  });

  await wish.save();
  res.json({ message: "Added to wishlist" });
});


// 📦 Get Wishlist of user
router.get("/", auth, async (req, res) => {
  const data = await Wishlist.find({ userId: req.userId });
  res.json(data);
});

module.exports = router;
