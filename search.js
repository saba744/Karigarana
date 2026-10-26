const express = require("express");
const router = express.Router();
const Search = require("../models/Search");

router.post("/save-search", async (req, res) => {
  try {
    const { query } = req.body;

    if (!query) {
      return res.status(400).json({ message: "Query missing" });
    }

    await Search.create({ query });

    res.json({ success: true });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
});

module.exports = router;
