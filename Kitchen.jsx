
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { allProducts } from "./data/productsData";
import what from "./assets/what.png";
import insta from "./assets/insta.png";
import face from "./assets/face.png";
import you from "./assets/you.png";
import link from "./assets/link.png";


import "./kitchen.css";

import bannerImg from "./assets/kitchen.jpg"; // 🔥 BIG IMAGE



function Kitchen() {
  const location = useLocation();
   const navigate = useNavigate();

  const [category, setCategory] = useState("all");
  const [price, setPrice] = useState(5000);
  const [sort, setSort] = useState("");
  const kitchenProducts = allProducts.filter(
  (item) => item.page === "/kitchen"
);
console.log("Kitchen Products:", kitchenProducts);


  /* URL CATEGORY READ */
  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const cat = params.get("cat");
    if (cat) setCategory(cat);
  }, [location.search]);

  /* FILTER + SORT LOGIC */
let filteredProducts = kitchenProducts.filter((item) => {
  if (category !== "all" && item.category !== category) return false;
  if (item.price > price) return false;
  return true;
});


  if (sort === "low-high") {
    filteredProducts.sort((a, b) => a.price - b.price);
  }

  if (sort === "high-low") {
    filteredProducts.sort((a, b) => b.price - a.price);
  }

  return (
    <div className="kitchen-page">
      {/* 🔥 BANNER */}
      
<div className="kitchen-banner">
  <img src={bannerImg} alt="Kitchen & Serveware" />

  <div className="banner-overlay">
    <h1>
      Kitchen <br /> & Serveware
    </h1>
  </div>
</div>


      {/* BREADCRUMB */}
      <div className="breadcrumb">
  <span onClick={() => navigate("/home")} className="crumb-link">
    Home
  </span>
  &nbsp;›&nbsp;
  <span className="crumb-current">
    Kitchen & Serveware
  </span>
</div>



      <div className="kitchen-content">
        {/* FILTER */}
        <aside className="filter-box">
          <h3>Categories</h3>
          <ul>
            <li onClick={() => setCategory("all")}>All</li>
            <li onClick={() => setCategory("storage")}>
              Kitchen Storage
            </li>
            <li onClick={() => setCategory("serveware")}>
              Serveware
            </li>
          </ul>

          <h3>Price</h3>
          <div className="price-values">
            <span>₹900</span>
            <span>₹{price}</span>
          </div>

          <input
            type="range"
            min="900"
            max="5000"
            value={price}
            onChange={(e) => setPrice(Number(e.target.value))}
          />
        </aside>

        {/* PRODUCTS */}
        <section className="product-section">
          <div className="sort-row">
            <select onChange={(e) => setSort(e.target.value)}>
              <option value="">Sort by</option>
              <option value="low-high">Price: Low to High</option>
              <option value="high-low">Price: High to Low</option>
            </select>
          </div>

          <div className="product-grid">
            {filteredProducts.map((item) => (
               <div
 className="product-card"
  key={item.id}
 onClick={() =>
    navigate("/order-summary", {
      state: {
        ...item,
        productName: item.title, 
        image: item.img         
      },
    })
  }
>
                <img src={item.img} alt={item.title} />
                <h4>{item.title}</h4>
                <p>
                  ₹{item.price}
                  <span>₹{item.oldPrice}</span>
                </p>
              </div>
            ))}
          </div>
        </section>
        
      </div>
      {/* ===== CONTENT + FAQ SECTION ===== */}
<section className="kitchen-info-section">
  <div className="kitchen-info-box">
    <h2>
      Elevate Your Culinary Space with Exquisite Kitchenware and Serveware
    </h2>

    <p>
      The kitchen is the heart of every home — a space where flavors come to
      life, and cherished memories are made. To enhance both functionality
      and aesthetic appeal, thoughtfully designed kitchenware and serveware
      are essential.
    </p>

    <p>
      At Peepul Tree, we celebrate the artistry of Indian craftsmanship with
      a curated collection of timeless pieces — from kitchen storage jars,
      roti boxes, and masala boxes to brass serving trays, brass bowls, tea
      strainers, and more.
    </p>

    <h3>Kitchen Storage Solutions: Combining Utility with Elegance</h3>

    <p>
      An organized kitchen is the foundation of an efficient cooking space.
      Our handcrafted brass jars with lids are designed to store essentials
      like tea, sugar, and spices while adding a timeless charm to your
      kitchen decor.
    </p>

    <span className="show-more">Show More</span>
  </div>

  {/* FAQ */}
  <div className="kitchen-faq-box">
    <h3>Frequently Asked Questions (FAQs)</h3>

    <div className="faq-item">
      <strong>
        1. How Should I Care for Brass Kitchenware to Maintain Its Shine?
      </strong>
      <p>
        Clean items with lemon juice and salt or a brass polish. Avoid
        abrasive scrubbers and dry immediately after washing.
      </p>
    </div>

    <div className="faq-item">
      <strong>2. Are Brass Utensils Safe for Food Use?</strong>
      <p>
        Yes, brass utensils are safe. Avoid storing acidic foods for long
        durations.
      </p>
    </div>

    <span className="show-more">Show More</span>
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
       <p onClick={() => navigate("/blogs")} style={{ cursor: "pointer" }}>
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

    </div>
  );
}

export default Kitchen;
