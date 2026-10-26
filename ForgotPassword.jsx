import React, { useState } from "react";
import axios from "axios";
import "./forgot.css";

function ForgotPassword() {
  const [email, setEmail] = useState("");
  const [token, setToken] = useState("");

  const sendRequest = async () => {
    // ✅ ONLY email validation added
    if (!email.includes("@") || !email.includes(".com")) {
      alert("Please enter a valid email address");
      return;
    }

    const res = await axios.post("http://localhost:5000/forgot-password", {
      email,
    });

    alert(res.data.message);

    if (res.data.success) {
      setToken(res.data.resetToken);
    }
  };

  return (
    <div className="forgot-container">
      <h2>Forgot Password</h2>

      <input
        type="email"
        placeholder="Please Enter Your Email"
        onChange={(e) => setEmail(e.target.value)}
      />

      <button onClick={sendRequest}>Send Reset Link</button>

      {token && (
        <div>
          <p>Click below to reset:</p>
          <a href={`/reset-password/${token}`}>Reset Password</a>
        </div>
      )}
    </div>
  );
}

export default ForgotPassword;
