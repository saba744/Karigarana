
const express = require("express");
const router = express.Router();
const Review = require("../models/Review");
const multer = require("multer");
const path = require("path");

// multer setup
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/reviews");
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname));
  },
});

const upload = multer({ storage });

//  ADD REVIEW
router.post("/", upload.single("productImage"), async (req, res) => {
  try {
    const {
      name,
      rating,
      comment,
      productName,
      reviewDate,
    } = req.body;

    const newReview = new Review({
      name,
      rating,
      comment,
      productName,
      reviewDate,
      productImage: `/uploads/reviews/${req.file.filename}`,
    });

    await newReview.save();
    res.status(201).json(newReview);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});


// 👉 GET ALL REVIEWS (NO CHANGE)
router.get("/", async (req, res) => {
  try {
    const reviews = await Review.find().sort({ createdAt: -1 });
    res.status(200).json(reviews);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});



module.exports = router;
