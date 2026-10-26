import React, { useState } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import "./reset.css";

function ResetPassword() {
  const { token } = useParams();
  const navigate = useNavigate();

  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [showNew, setShowNew] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  const resetNow = async () => {
    if (!newPassword || !confirmPassword) {
      alert("Please enter both fields");
      return;
    }

    // ✅ SAME validation as Signup (password length 6)
    if (newPassword.length < 6) {
      alert("Password must be at least 6 characters long");
      return;
    }

    if (newPassword !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    try {
      const res = await axios.post(
        `http://localhost:5000/reset-password/${token}`,
        { newPassword }
      );

      alert(res.data.message);
      if (res.data.success) navigate("/login");
    } catch (err) {
      alert(err.response?.data?.message || "Something went wrong");
    }
  };

  return (
    <div className="reset-container">
      <h2>Reset Password</h2>

      {/* New Password */}
      <label>New Password:</label>
      <div className="password-wrapper">
        <input
          type={showNew ? "text" : "password"}
          placeholder="Please Enter new password"
          onChange={(e) => setNewPassword(e.target.value)}
        />
        <span className="eye-icon" onClick={() => setShowNew(!showNew)}>
          {showNew ? "🙈" : "👁"}
        </span>
      </div>

      {/* Confirm Password */}
      <label>Confirm Password:</label>
      <div className="password-wrapper">
        <input
          type={showConfirm ? "text" : "password"}
          placeholder="Please Confirm new password"
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
        <span className="eye-icon" onClick={() => setShowConfirm(!showConfirm)}>
          {showConfirm ? "🙈" : "👁"}
        </span>
      </div>

      <button onClick={resetNow}>Update Password</button>
    </div>
  );
}

export default ResetPassword;
