

const express = require("express");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const cors = require("cors");



dotenv.config();
const transporter = require("./config/mailer"); 
const orderRoutes = require("./routes/orderRoutes");
const wishlistRoutes = require("./routes/wishlistRoutes");

const searchRoutes = require("./routes/search");
const mailRoutes = require("./routes/mail");
const reviewRoutes = require("./routes/reviewRoutes");
const adminRoutes = require("./routes/adminRoutes");


const app = express();
app.use(cors({
  origin: "http://localhost:3000",
 methods: ["GET", "POST", "DELETE"],

  credentials: true
}));

app.use(express.json());
app.use("/api/cart", require("./routes/cartRoutes"));
app.use("/api/order", orderRoutes);
app.use("/api/wishlist", wishlistRoutes);
app.use("/api/reviews", reviewRoutes);
app.use("/uploads", express.static("uploads"));
app.use("/api/purchase", require("./routes/purchaseRoutes"));

app.use("/api/admin", adminRoutes);

app.use("/api/decor-products", require("./routes/decorProductRoutes"));

app.use("/api", searchRoutes);
app.get("/test-mail", async (req, res) => {
  try {
    await transporter.sendMail({
      from: `"Team Karigarana" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_USER,
      subject: "Test Mail ",
      text: "If you received this, mail config is working 🎉"
    });

    res.send("MAIL SENT SUCCESSFULLY ");
  } catch (err) {
    console.error(err);
    res.status(500).send("MAIL FAILED ");
  }
});
app.use("/api/mail", mailRoutes);


// MongoDB
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB Connected"))
  .catch(err => console.log(err));

// User Model
const userSchema = new mongoose.Schema({
  name: String,
  email: { type: String, unique: true },
  password: String,
  lastLogin: { type: Date }   // ✅ add this
});

const User = mongoose.model("User", userSchema);

// Test Route
app.get("/", (req, res) => {
  res.send("Server running on port 5000");
});

// ✅ GET ALL USERS (Admin Panel)
app.get("/api/users", async (req, res) => {
  try {
    const users = await User.find();   // hashed password bhi aayega
    res.json(users);
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
});


// Signup
app.post("/signup", async (req, res) => {
  try {
    const { name, email, password } = req.body;

    const exists = await User.findOne({ email });
    if (exists)
      return res.json({ success: false, message: "Email already exists" });

    const hashed = await bcrypt.hash(password, 10);

    const newUser = new User({
      name,
      email,
      password: hashed
      
    });

    await newUser.save();

    res.json({ success: true, message: "Signup successful!" });

  } catch (err) {
    res.json({ success: false, message: "Something went wrong", error: err });
  }
});

// Login
app.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });
    if (!user)
      return res.json({ success: false, message: "User not found" });

    const valid = await bcrypt.compare(password, user.password);
    if (!valid)
      return res.json({ success: false, message: "Wrong password" });
     user.lastLogin = new Date();
    await user.save();

    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET);

    res.json({
      success: true,
      message: "Login successful!",
      token
    });

  } catch (err) {
    res.json({ success: false, message: "Something went wrong", error: err });
  }
});
// ----- Forgot Password -----
app.post("/forgot-password", async (req, res) => {
  const { email } = req.body;

  const user = await User.findOne({ email });
  if (!user) return res.json({ success: false, message: "Email not found" });

  // Simple token (no email sending)
  const resetToken = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: "15m" });

  res.json({
    success: true,
    message: "Password reset link generated",
    resetToken
  });
});

// ----- Reset Password -----
app.post("/reset-password/:token", async (req, res) => {
  try {
    const token = req.params.token;
    const { newPassword } = req.body;

    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    const hashed = await bcrypt.hash(newPassword, 10);

    await User.findByIdAndUpdate(decoded.id, { password: hashed });

    res.json({ success: true, message: "Password updated successfully" });

  } catch (err) {
    res.json({ success: false, message: "Invalid or expired token" });
  }
});


const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
