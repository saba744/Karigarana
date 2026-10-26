import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

import "./gift.css";
import giftBanner from "./assets/gift.jpg"; 
/* GIFT PRODUCTS SECTION */
import copperImg from "./assets/gift1.jpg";
import brassCoffeeImg from "./assets/gift2.jpg";
import bedsheetImg from "./assets/gift3.jpg";
import brassContainerImg from "./assets/gift4.jpg";
import enamelImg from "./assets/gift5.jpg";
import gift1 from "./assets/pot1.jpg";
import gift2 from "./assets/d16.jpg";
import gift3 from "./assets/d3.jpg";
import gift4 from "./assets/d4.jpg";
import gift5 from "./assets/d5.jpg";
import pot from "./assets/pot.jpg";
import rev1 from "./assets/rev1.jpg";
import rev2 from "./assets/rev2.jpg";

import rev3 from "./assets/rev3.jpg";
import rev4 from "./assets/rev4.jpg";
import rev5 from "./assets/rev5.jpg";
import rev6 from "./assets/rev6.jpg";
import rev7 from "./assets/rev7.jpg";

import user1 from "./assets/user1.jpg";
import delivery from "./assets/delivery.jpg";
import handmade from "./assets/handmade.jpg";
import cod from "./assets/cod.jpg";
import returns from "./assets/returns.jpg";
import treeIcon from "./assets/tree1.jpg"; 
import what from "./assets/what.png";
import insta from "./assets/insta.png";
import face from "./assets/face.png";
import you from "./assets/you.png";
import link from "./assets/link.png";
const giftProducts = [
  {
    id: 1,

    title: "Pure Copper Water Bottle Set",
    img: copperImg,
  },
  {
    id: 2,
    title: "Brass Coffee Dabara Set + Serving Bowl + Candle Holders",
    img: brassCoffeeImg,
  },
  {
    id: 3,
    title: "Double Bedsheet Set + Candle Holders",
    img: bedsheetImg,
  },
  {
    id: 4,
    title: "Pure Brass Containers + Coffee Dabara Set",
    img: brassContainerImg,
  },
  {
    id: 5,
    title: "Enamel Dabara Set + Candle Holders",
    img: enamelImg,
  },
  
 
];




function Gift() {
  const navigate = useNavigate();

  return (
    <>
    <div className="gift-page">
      {/* BANNER IMAGE */}
      <div className="gift-banner">
        <img src={giftBanner} alt="Gifting Banner" />
      </div>
      </div>

      {/* TEXT BELOW IMAGE */}
      <div className="gift-intro">
        <h1>Gifts that outlive celebrations</h1>
        <p>
          With our gifts – the joy doesn't end when lights go out. <br />
          It stays, quietly brightening everyday moments.
        </p>
      </div>
      {/* GIFT PRODUCT GRID */}
<div className="gift-product-section">
  <div className="gift-product-grid">
    {giftProducts.map((item) => (
      <div key={item.id} className="gift-card">
        <img src={item.img} alt={item.title} />
        <p>{item.title}</p>
      </div>
    ))}
  </div>
</div>
{/* FEATURED GIFT SECTION */}
<div className="featured-gift-section">
  {/* LEFT BIG IMAGE */}
  <div className="featured-left">
    <img src={pot} alt="Featured Gift" />
    <div className="featured-overlay">
      <h2>Crafted by Hand,<br />Inspired by Heritage</h2>
      <p>India’s timeless gifting artistry</p>
      <button>View All</button>
    </div>
  </div>

  {/* RIGHT 4 PRODUCTS IN ONE ROW */}
  <div className="featured-right">
    {[
      {
        img: gift2,
        title:
          "Premium Brass Kitchen Masala Box – beautifully handcrafted to elevate your everyday cooking experience",
        oldPrice: "₹4999",
        newPrice: "₹2899",
        
        rating: 4,
      },
      {
        img: gift3,
        title:
          "Pure Brass Coasters Set with matt hammered finish for elegant table décor",
        oldPrice: "₹1999",
        newPrice: "₹999",
       
        rating: 5,
      },
      {
        img: gift4,
        title:
          "Kanjeevaram inspired brass small bowl set for festive serving",
        oldPrice: "₹999",
        newPrice: "₹499",
       
        rating: 4,
      },
      {
        img: gift5,
        title:
          "Handcrafted brass serving tray platter for festive and luxury dining",
        oldPrice: "₹3199",
        newPrice: "₹1439",
        
        rating: 5,
      },
       {
        img: copperImg,
        title:
          "Premium Brass Kitchen Masala Box – beautifully handcrafted to elevate your everyday cooking experience",
        oldPrice: "₹4999",
        newPrice: "₹2899",
       
        rating: 4,
      },
      {
        img: brassCoffeeImg,
        title:
          "Pure Brass Coasters Set with matt hammered finish for elegant table décor",
        oldPrice: "₹1999",
        newPrice: "₹999",
       
        rating: 5,
      },
      {
        img: enamelImg  ,
        title:
          "Kanjeevaram inspired brass small bowl set for festive serving",
        oldPrice: "₹999",
        newPrice: "₹499",
       
        rating: 4,
      },
      {
        img: enamelImg ,
        title:
          "Handcrafted brass serving tray platter for festive and luxury dining",
        oldPrice: "₹3199",
        newPrice: "₹1439",
       
        rating: 5,
      },
    ].map((item, index) => (
      <div key={index} className="featured-card">
        <img src={item.img} alt={item.title} />

        <p className="featured-title">{item.title}</p>

        <div className="rating">
          {"★".repeat(item.rating)}
          {"☆".repeat(5 - item.rating)}
        </div>

        <div className="price">
          <span className="new">{item.newPrice}</span>
          <span className="old">{item.oldPrice}</span>
          <span className="offer">{item.offer}</span>
        </div>
      </div>
    ))}
  </div>
</div>
{/* CORPORATE GIFTS SECTION */}
<div className="corporate-section">
  <div className="corporate-wrapper">

    {/* LEFT IMAGE */}
    <div className="corporate-image">
      <img src={gift1} alt="Corporate Gifts" />
    </div>

    {/* RIGHT CONTENT */}
    <div className="corporate-content">
      <h2>Corporate Gifts</h2>
      <p>
        Appreciation shouldn’t fade with the wrapping. When you choose
        meaningful, well-crafted gifts, you’re not just ticking a box —
        you’re creating a connection that lingers. Because true appreciation
        isn’t wrapped in paper — it’s wrapped in intent, care, and the joy
        that stays.
      </p>

      <button className="corporate-btn">CONTACT US</button>
    </div>

  </div>
</div>
     
      {/* CUSTOMER REVIEWS SECTION */}
<section className="customer-reviews">
  <h2>What Our Customers Say</h2>

  <div className="reviews-top">
    <div className="reviews-left">
      <span className="review-tab active">Reviews</span>
      <div className="stars">
        ★★★★★ <span>22 Reviews</span>
      </div>
    </div>

    <div className="reviews-right">
      <button className="write-review">Write A Review</button>
    </div>
  </div>

  <div className="reviews-grid">
    {/* CARD 1 */}
    <div className="review-card">
      <h4>
        Kopal Joshy <span className="verified">Verified</span>
      </h4>

      <p className="reviewed">
        Reviewed <span>Sheer Cotton Window And Door Curtains</span>
      </p>

      <div className="card-stars">★★★★★</div>

      <p>
        Beautiful hand-printed curtains. The cotton is light and breezy. Highly
        recommend!
      </p>

      <div className="review-images">
        <img src={rev1} alt="review" />
        <img src={rev2} alt="review" />
        <img src={rev3} alt="review" />
      </div>

      <p className="date">May 27, 2025</p>
    </div>

    {/* CARD 2 */}
    <div className="review-card">
      <h4>
        Gita J. <span className="verified">Verified</span>
      </h4>

      <p className="reviewed">
        Reviewed <span>Pure Cotton Hand and Bath Towel Set</span>
      </p>

      <div className="card-stars">★★★★★</div>

      <p>
        I liked the design & the material. Pricing is reasonable. Would love to
        buy more.
      </p>

      <img className="avatar" src={user1} alt="user" />

      <p className="date">April 3, 2025</p>
    </div>

    {/* CARD 3 */}
    <div className="review-card">
      <h4>
        Devi Sureshkumar K. <span className="verified">Verified</span>
      </h4>

      <p className="reviewed">
        Reviewed <span>Pure Brass Storage Jar</span>
      </p>

      <div className="card-stars">★★★★★</div>

      <p>Excellent</p>

      <img className="single-img" src={rev4} alt="review" />

      <p className="date">April 12, 2025</p>
    </div>

    <div className="review-card">
      <h4>
        Devi Sureshkumar K. <span className="verified">Verified</span>
      </h4>

      <p className="reviewed">
        Reviewed <span>Pure Brass Storage Jar</span>
      </p>

      <div className="card-stars">★★★★★</div>

      <p>Excellent</p>

      <img className="single-img" src={rev5} alt="review" />

      <p className="date">April 12, 2025</p>
    </div>
    <div className="review-card">
      <h4>
        Devi Sureshkumar K. <span className="verified">Verified</span>
      </h4>

      <p className="reviewed">
        Reviewed <span>Pure Brass Storage Jar</span>
      </p>

      <div className="card-stars">★★★★★</div>

      <p>Love it</p>

      <img className="single-img" src={rev6} alt="review" />

      <p className="date">April 12, 2025</p>
    </div>
    <div className="review-card">
      <h4>
        Devi Sureshkumar K. <span className="verified">Verified</span>
      </h4>

      <p className="reviewed">
        Reviewed <span>Pure Brass Storage Jar</span>
      </p>

      <div className="card-stars">★★★★★</div>

      <p>very nice product</p>

      <img className="single-img" src={rev7} alt="review" />

      <p className="date">April 12, 2025</p>
    </div>
  </div>
</section>
 {/* ================= NEWSLETTER WRAPPER ================= */}
<div className="newsletter-wrapper">

  {/* ===== FEATURES SECTION ===== */}
  <section className="features-section">
    <div className="features-container">
      <div className="feature-box">
        <img src={delivery} alt="delivery" />
        <p>Free Delivery Across India</p>
      </div>

      <div className="feature-box">
        <img src={handmade} alt="handmade" />
        <p>100% Hand-crafted</p>
      </div>

      <div className="feature-box">
        <img src={cod} alt="cod" />
        <p>COD Available</p>
      </div>

      <div className="feature-box">
        <img src={returns} alt="returns" />
        <p>Easy Returns</p>
      </div>
    </div>
  </section>
{/* ===== MARQUEE SECTION ===== */}

<section className="marquee-section">
  <div className="top-marquee">
    <marquee behavior="scroll" direction="left" scrollamount="6">
      
      <span className="marquee-item">
        <img src={treeIcon} alt="tree" />
        Unique Products for You & Your Home
      </span>

      <span className="marquee-item">
        <img src={treeIcon} alt="tree" />
        We are also available on Amazon, Myntra, Ajio, Blinkit, Cred & Etsy
      </span>

      <span className="marquee-item">
        <img src={treeIcon} alt="tree" />
        Infinite India. Handcrafted.
      </span>

      <span className="marquee-item">
        <img src={treeIcon} alt="tree" />
        Unique Products for You & Your Home
      </span>

    </marquee>
  </div>
</section>





  {/* ===== NEWSLETTER SECTION ===== */}
  <section className="newsletter-section">
    <div className="newsletter-box">
      <h2>Exclusively For You!</h2>
      <p>
        Be the first to know about new collections, launches, sales, and much
        more!
      </p>

      <div className="newsletter-form">
        <input type="email" placeholder="Email Address" />
        <button>GET ME ON THE LIST</button>
      </div>
    </div>
  </section>

</div>
{/* ================= END ================= */}


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
        <p onClick={() => navigate("/blogs")} style={{ cursor: "pointer" }}>Crafts</p>
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

    </>
  );
}





export default Gift;