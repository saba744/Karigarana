
import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./frill.css";
const FrillDecorProduct = () => {
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState(null);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("title", title);
    formData.append("price", price);
    formData.append("image", image);

    try {
      await axios.post(
        "http://localhost:5000/api/decor-products/add",
        formData,
        {
          headers: { "Content-Type": "multipart/form-data" }
        }
      );

      alert("Product Added Successfully ");

      // Reset form
      setTitle("");
      setPrice("");
      setImage(null);

      //  Navigate to Admin Dashboard
      navigate("/admin-dashboard");
    } catch (err) {
      console.error(err);
      alert("Error adding product ");
    }
  };

  return (
    <div className="frill-page-wrapper">
    <div className="frill-product-container">
      <h2>Add Product</h2>

      <form className="frill-product-form" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Product Name"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />

        <input
          type="number"
          placeholder="Price"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          required
        />

        <input
          type="file"
          onChange={(e) => setImage(e.target.files[0])}
          required
        />

        <button type="submit" className="frill-submit-btn">➕ Add Product</button>
      </form>
    </div>
    </div>
  );
};

export default FrillDecorProduct;
