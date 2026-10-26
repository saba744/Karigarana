
const nodemailer = require("nodemailer");

const sendOrderEmail = async (toEmail, name) => {
  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    await transporter.verify(); // 🔥 test login

    await transporter.sendMail({
      from: `"Karigaran" <${process.env.EMAIL_USER}>`,
      to: toEmail,
      subject: "Thank you for visiting Karigaran 🌾",
      html: `<h2>Hello ${name}</h2><p>Order placed successfully</p>`
    });

    console.log("✅ Email sent to:", toEmail);
  } catch (err) {
    console.log("❌ Email error:", err.message);
  }
};

module.exports = sendOrderEmail;
