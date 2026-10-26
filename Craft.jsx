
import React, { useState } from "react";
import "./craft.css";

import craft1 from "./assets/craft1.jpg";
import craft2 from "./assets/craft2.jpg";
import craft3 from "./assets/craft3.jpg";
import craft4 from "./assets/craft4.jpg";
import craft5 from "./assets/craft5.jpg";
import craft6 from "./assets/craft6.jpg";
import craft7 from "./assets/craft7.jpg";
import craft8 from "./assets/craft8.jpg";
import craft9 from "./assets/craft9.jpg";
import craft10 from "./assets/craft10.jpg";
import craft11 from "./assets/craft11.jpg";
import craft12 from "./assets/craft12.jpg";
import craft13 from "./assets/craft13.jpg";
import craft14 from "./assets/craft14.jpg";
import craft15 from "./assets/craft15.jpg";
import craft16 from "./assets/craft16.jpg";

import craft18 from "./assets/craft18.jpg";
import craft19 from "./assets/blog2.jpg";
import craft20 from "./assets/h4.jpg";
import craft21 from "./assets/blog3.jpg";
import what from "./assets/what.png";
import insta from "./assets/insta.png";
import face from "./assets/face.png";
import you from "./assets/you.png";
import link from "./assets/link.png";


function Craft() {

  const [sort, setSort] = useState("popular");
  const [category, setCategory] = useState("All");
  const [priceRange, setPriceRange] = useState(3000);

  const products = [
    {
      id: 1,
      title: "Cotton Rug for living room Hand Printed",
      price: 1999,
      category: "Textile",
      image: craft1,
      bestseller: true,
    },
    {
      id: 2,
      title: "Tea Strainer and Bowl made with Pure Brass",
      price: 809,
      category: "Brass",
      image: craft2,
    },
    {
      id: 3,
      title: "Pure Cotton Hand and Bath Towel Set",
      price: 1099,
      category: "Textile",
      image: craft3,
    },
    {
      id: 4,
      title: "Pure Cotton Hand and Bath Towel Set Off White",
      price: 1099,
      category: "Textile",
      image: craft4,
    },
    {
      id: 5,
      title: "Handcrafted Brass Storage Box",
      price: 3499,
      category: "Metal",
      image: craft5,
      bestseller: true,
    },
    {
      id: 6,
      title: "Handwoven Cotton Throw",
      price: 1800,
      category: "Textile",
      image: craft6,
    },
    {
      id: 7,
      title: "wooden roti box hand printed and crafted with mango wood",
      price: 700,
      category: "Textile",
      image: craft7,
    },
    {
      id: 8,
      title: "Cotton Embroidered cushion cover block printed",
      price: 500,
      category: "Textile",
      image: craft8,
    },
    {
      id: 9,
      title: "Dhokra Metal handmade show piece",
      price: 2000,
      category: "Textile",
      image: craft9,
    },
    {
      id: 10,
      title: "Handwoven Cotton Throw",
      price: 1500,
      category: "Textile",
      image: craft10,
    },
    {
      id: 11,
      title: "Candle stand in Bastar Wrought Iron",
      price: 1200,
      category: "Textile",
      image: craft11,
    },
    {
      id: 12,
      title: "Crochet Cushion Cover in pure cotton in white background",
      price: 2799,
      category: "Textile",
      image: craft12,
    },
    {
      id: 13,
      title: "Cotton Rug handprint in Monochrome",
      price: 600,
      category: "Textile",
      image: craft13,
    },
    {
      id: 14,
      title: "Handmade Dinning tables mats",
      price: 1900,
      category: "Textile",
      image: craft14,
    },
    {
      id: 15,
      title: "Wicker and wood stroge box with Lid",
      price: 400,
      category: "Textile",
      image: craft15,
    },
    {
      id: 16,
      title: "table runners handmade with Grass and cotton",
      price: 500,
      category: "Textile",
      image: craft16,
    },
    
    {
      id: 18,
      title: "Cotton rug handamade for living room",
      price: 1700,
      category: "Textile",
      image: craft18,
    },

    {
      id: 19,
      title: "Steel bowl for lighting",
      price: 450,
      category: "Textile",
      image: craft19,
    },

    {
      id: 20,
      title: "handmade craft",
      price: 1100,
      category: "Textile",
      image: craft20,
    },

    {
      id: 21,
      title: "Cotton rug handamade for living room",
      price: 1000,
      category: "Textile",
      image: craft21,
    },


  ];

  const categoryMap = {
    Handcrafted: ["Textile"],
    "Hand Printed": ["Metal","Brass","Wood","Wicker & Wood"],
    Metalware: ["Metal", "Brass"],
    "Wall Art": ["Wood"],
    Weaving: ["Textile"],
    "Wicker & Wood": ["Wood"],
  };

  let filteredProducts = products.filter((item) => {
    if (item.price > priceRange) return false;
    if (category === "All") return true;
    if (categoryMap[category]) {
      return categoryMap[category].includes(item.category);
    }
    return item.category === category;
  });

  if (sort === "low") filteredProducts.sort((a, b) => a.price - b.price);
  if (sort === "high") filteredProducts.sort((a, b) => b.price - a.price);

  return (
    <>
    <section className="craft-page">

      <div className="craft-header">
        <h2 className="craft-title">CRAFT</h2>
      </div>

      <div className="craft-layout">

        {/* SIDEBAR */}
        <div className="craft-sidebar">
          <button className="filter-btn">Filters</button>

          <h4>CATEGORIES</h4>
          <p onClick={() => setCategory("Handcrafted")}>Handcrafted</p>
          <p onClick={() => setCategory("Hand Printed")}>Hand Printed</p>
          <p onClick={() => setCategory("Metalware")}>Metalware</p>
          <p onClick={() => setCategory("Wall Art")}>Wall Art</p>
          <p onClick={() => setCategory("Weaving")}>Weaving</p>
          <p onClick={() => setCategory("Wicker & Wood")}>Wicker & Wood</p>

          <div className="price-box">
            <h4>PRICE</h4>
            <div className="price-values">
              <span>₹499</span>
              <span>₹{priceRange}</span>
            </div>
            <input
              type="range"
              min="500"
              max="5000"
              step="100"
              value={priceRange}
              onChange={(e) => setPriceRange(Number(e.target.value))}
            />
          </div>
        </div>

        {/* CONTENT */}
        <div className="craft-content">

          <div className="sort-bar">
            <span>Sort by:</span>
            <select value={sort} onChange={(e) => setSort(e.target.value)}>
              <option value="popular">Best selling</option>
              <option value="low">Price: Low to High</option>
              <option value="high">Price: High to Low</option>
            </select>
          </div>

          <div className="craft-grid">
            {filteredProducts.map((item) => (
              <div className="craft-card" key={item.id}>

                <div className="craft-img-box">
                  <img src={item.image} alt={item.title} />
                   {item.bestseller && (
                    <span className="badge">Bestseller</span>
                  )}
                </div>

                <div className="craft-info">
                  <h4>{item.title}</h4>
                  <div className="stars">★★★★★ <span>(128)</span></div>
                  <p className="price">₹{item.price}</p>
                </div>

              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
    <section className="site-footer">
  <div className="footer-container">
    {/* LEFT */}
    <div className="footer-about">
      <h2 className="logo">
        Karigarana <span></span>
      </h2>
      <p className="tagline">Infinite India. Handcrafted.</p>

      <p className="about-text">
        Your source for unique home decor and furnishings that blend modern
        design with traditional Indian craftsmanship. Responsibly sourced from
        over 11,000 artisans, our products reflect authenticity, sustainability,
        and fine craftsmanship. Discover the beauty of India with Peepul Tree.
      </p>

      <p className="contact">Email Us: saba@handcraft.in</p>
      <p className="contact">Contact: 080-458-83674</p>

     <div className="socials">
  <img src={what} alt="WhatsApp" />
  <img src={insta} alt="Instagram" />
  <img src={face} alt="Facebook" />
  <img src={you} alt="YouTube" />
  <img src={link} alt="LinkedIn" />
</div>
</div>

    {/* RIGHT LINKS */}
    <div className="footer-links">
      <div>
        <h4>Popular Links</h4>
        <p>Home Linen</p>
        <p>Home Furnishing</p>
        <p>Kitchen & Serveware</p>
        <p>Table Linen</p>
        <p>Home Decor</p>
      </div>

      <div>
        <h4>Quick Links</h4>
        <p>Home & Living</p>
        <p>Crafts</p>
        <p>Stories</p>
        <p>
    Blogs
  </p>
      </div>

      <div>
        <h4>More Info</h4>
        <p>About us</p>
        <p>Contact us</p>
        <p>Terms & Conditions</p>
        <p>Privacy Policy</p>
        <p>Payment</p>
        <p>Shipping & Delivery</p>
        <p>Cancellations</p>
        <p>Exchanges</p>
        <p>Refund Policy</p>
      </div>
    </div>
  </div>

  <div className="footer-bottom">
    © 2025 Karigarana | All Rights Reserved. Karigarana a wholly owned subsidiary of
    LHI TV
  </div>
</section>
</>
  );
}

export default Craft;
