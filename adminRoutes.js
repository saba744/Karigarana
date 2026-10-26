const express = require("express");
const router = express.Router();
const Admin = require("../models/Admin");

/* ================= ADMIN SIGNUP ================= */
router.post("/signup", async (req, res) => {
  const { name, email, password } = req.body;

  try {
    const existingAdmin = await Admin.findOne({ email });
    if (existingAdmin) {
      return res.status(400).json({ message: "Admin already exists" });
    }

    const admin = new Admin({
      name,
      email,
      password // (abhi plain, baad me bcrypt)
    });

    await admin.save();
    res.status(201).json({ message: "Admin registered successfully" });

  } catch (err) {
    res.status(500).json({ message: "Signup failed" });
  }
});

/* ================= ADMIN LOGIN ================= */
router.post("/login", async (req, res) => {
  const { email, password } = req.body;

  try {
    const admin = await Admin.findOne({ email, password });
    if (!admin) {
      return res.status(401).json({ message: "Invalid credentials" });
    }

    res.json({ message: "Login successful", admin });

  } catch (err) {
    res.status(500).json({ message: "Login failed" });
  }
});

module.exports = router;
