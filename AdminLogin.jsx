import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./adminAuth.css";


const AdminLogin = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const [errors, setErrors] = useState({});

  const isValidEmail = (email) => {
    return email.includes("@") && email.includes(".com");
  };

  const handleLogin = async () => {
    let newErrors = {};

    if (!isValidEmail(email)) {
      newErrors.email = "Please enter a valid email (must include @ and .com)";
    }

    if (password.length < 7) {
      newErrors.password = "Password must be at least 7 characters";
    }

    setErrors(newErrors);
    if (Object.keys(newErrors).length > 0) return;

    const res = await fetch("http://localhost:5000/api/admin/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password })
    });

    const data = await res.json();

    if (res.ok) {
      // sadmin name save
      localStorage.setItem("adminName", data.admin.name);
      navigate("/admin-dashboard");
    } else {
      alert(data.message);
    }
  };

  return (
    <div className="admin-auth-box">
      <h2>Admin Login</h2>

      <input
        placeholder="Email"
        onChange={(e) => {
          setEmail(e.target.value);
          setErrors({ ...errors, email: "" });
        }}
      />
      {errors.email && <p className="error-text">{errors.email}</p>}

      <div className="password-wrapper">
        <input
          placeholder="Password"
          type={showPassword ? "text" : "password"}
          onChange={(e) => {
            setPassword(e.target.value);
            setErrors({ ...errors, password: "" });
          }}
        />
        <span
              className="eye-icon"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? "🙈" : "👁"}
            </span>
      </div>
      {errors.password && <p className="error-text">{errors.password}</p>}

      <button onClick={handleLogin}>Login</button>
      <p>
        Don't have an account?{" "}
        <span
          className="login-link"
          onClick={() => navigate("/admin-signup")}
        >
         Signup
        </span>
      </p>
    </div>
  );
};

export default AdminLogin;
