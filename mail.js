
const express = require("express");
const router = express.Router();
const transporter = require("../config/mailer");
const Subscriber = require("../models/Subscriber"); 

router.post("/send", async (req, res) => {
  const { email } = req.body;

  if (!email) {
    return res.status(400).json({ message: "Email required" });
  }

  try {
   //: Subscriber use 
    let existing = await Subscriber.findOne({ email });

    if (!existing) {
      // first time → save in DB
      await Subscriber.create({ email });
    }

    //  MAIL HAMESHA JAYEGA
    await transporter.sendMail({
      from: `"Team Karigarana" <${process.env.EMAIL_USER}>`,
     to: email.trim(),
      subject: "Thank you for joining us 💖",
      html: `
        <p>Hi 👋,</p>
        <p><strong>Thank you for joining us!</strong></p>
        <p>
          Be the first to know about new collections,
          launches, sales, and much more.
        </p>
        <p>
          Stay connected 💫<br/>
          <strong>Team Karigarana</strong>
        </p>
      `
    });

    if (existing) {
      return res.json({ message: "You are already subscribed 💛" });
    }

    res.json({ message: "Subscribed successfully 🎉 Check your email!" });

  } catch (error) {
    console.error("MAIL ERROR ", error);
    res.status(500).json({ message: "Mail sending failed" });
  }
});

module.exports = router;
