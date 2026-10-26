import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./adminAuth.css";


const AdminSignup = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: ""
  });

  const [showPassword, setShowPassword] = useState(false);
  const [errors, setErrors] = useState({});

  const isValidEmail = (email) => {
    return email.includes("@") && email.includes(".com");
  };

  const handleSignup = async (e) => {
    e.preventDefault();

    let newErrors = {};

    if (!isValidEmail(form.email)) {
      newErrors.email = "Please enter a valid email (must include @ and .com)";
    }

    if (form.password.length < 7) {
      newErrors.password = "Password must be at least 7 characters";
    }

    setErrors(newErrors);
    if (Object.keys(newErrors).length > 0) return;

    const res = await fetch("http://localhost:5000/api/admin/signup", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form)
    });

    const data = await res.json();

    if (res.ok) {
      alert("Admin Registered Successfully");
      navigate("/admin-login");
    } else {
      alert(data.message);
    }
  };

  return (
    <div className="admin-auth-box">
      <h2>Admin Signup</h2>

      <input
        placeholder="Name"
        onChange={(e) => setForm({ ...form, name: e.target.value })}
      />

      <input
        placeholder="Email"
        type="email"
        onChange={(e) => {
          setForm({ ...form, email: e.target.value });
          setErrors({ ...errors, email: "" });
        }}
      />
      {errors.email && <p className="error-text">{errors.email}</p>}

      <div className="password-wrapper">
        <input
          placeholder="Password"
          type={showPassword ? "text" : "password"}
          onChange={(e) => {
            setForm({ ...form, password: e.target.value });
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

      <button onClick={handleSignup}>Signup</button>

      <p>
        Already have an account?{" "}
        <span
          className="login-link"
          onClick={() => navigate("/admin-login")}
        >
          Login
        </span>
      </p>
    </div>
  );
};

export default AdminSignup;
