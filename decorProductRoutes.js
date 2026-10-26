const express = require("express");
const router = express.Router();
const DecorProduct = require("../models/DecorProduct");
const multer = require("multer");
const path = require("path");

/* IMAGE STORAGE */
const storage = multer.diskStorage({
  destination: "./uploads",
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname));
  }
});

const upload = multer({ storage });

/* ADD DECOR PRODUCT */
router.post("/add", upload.single("image"), async (req, res) => {
  try {
    const decor = new DecorProduct({
      title: req.body.title,
      price: req.body.price,
      category: req.body.category,
      image: `/uploads/${req.file.filename}`
    });

    await decor.save();
    res.json({ success: true });
  } catch (err) {
    res.status(500).json(err);
  }
});

/* GET ALL DECOR PRODUCTS */
router.get("/", async (req, res) => {
  const products = await DecorProduct.find();
  res.json(products);
});
router.delete("/:id", async (req, res) => {
  try {
    await DecorProduct.findByIdAndDelete(req.params.id);
    res.json({ message: "Product deleted successfully" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});
module.exports = router;
