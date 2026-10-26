import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { allProducts } from "./data/productsData";
import "./SearchResult.css";

function SearchResult() {
  const location = useLocation();
  const navigate = useNavigate();
  const [results, setResults] = useState([]);


  const query =
    new URLSearchParams(location.search).get("q") || "";

  useEffect(() => {
    if (query) {
      fetch("http://localhost:5000/api/save-search", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ query }),
      });
    }
  }, [query]);
  useEffect(() => {
  const filtered = allProducts.filter((product) => {
    if (!query) return true;

    const regex = new RegExp(query, "i");

    return (
      regex.test(product.title || "") ||
      regex.test(product.category || "")
    );
  });

  setResults(filtered);
}, [query]);


  // FIXED SEARCH LOGIC (no toLowerCase)
  const filteredProducts = allProducts.filter((product) => {
    if (!query) return true;

    const regex = new RegExp(query, "i"); // ignore case

    return (
      regex.test(product.title || "") ||
      regex.test(product.category || "")
    );
  });

const handleDelete = (id) => {
  const confirmDelete = window.confirm(
    "Are you sure you want to delete this search item?"
  );

  if (confirmDelete) {
    const updatedResults = results.filter(
      (item) => item.id !== id
    );
    setResults(updatedResults); //  THIS IS IMPORTANT
  }
};


  return (
    <div className="search-page">
      <h2>
        Search Results for: <span>"{query}"</span>
      </h2>
{results.length === 0 ? (
  <p className="no-result">No such product found</p>
) : (
  <div className="search-grid">
    {results.map((item) => (
      <div
        key={item.id}
        className="search-card"
        onClick={() => navigate(item.page)}
      >
        <img
          src={item.img || item.image}
          alt={item.title}
          width="120"
        />

        <h4>{item.title}</h4>

        <div className="price-row">
          <p className="price">₹{item.price}</p>

          <span
            className="delete-icon"
            onClick={(e) => {
              e.stopPropagation();
              handleDelete(item.id);
            }}
          >
            🗑️
          </span>
        </div>
      </div>
    ))}
  </div>
)}

    </div>
  );
}

export default SearchResult;
