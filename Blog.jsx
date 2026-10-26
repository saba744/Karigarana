import React from "react";
import { useNavigate } from "react-router-dom";
import "./blog.css";

/* ===== HERO IMAGES ===== */
import blog1 from "./assets/blog1.jpg";
import blog2 from "./assets/blog.jpg";
import blog3 from "./assets/blog3.jpg";
import blog4 from "./assets/blog4.jpg";

/* ===== BLOG POSTS ===== */
import post1 from "./assets/post1.jpg";
import post2 from "./assets/post2.jpg";
import post3 from "./assets/post3.jpg";
import post4 from "./assets/post4.jpg";
import post5 from "./assets/post5.jpg";

import treeIcon from "./assets/tree1.jpg";

/* ===== FEATURE ICONS (MISSING IMPORTS FIXED) ===== */
import delivery from "./assets/delivery.jpg";
import handmade from "./assets/handmade.jpg";
import cod from "./assets/cod.jpg";
import returns from "./assets/returns.jpg";

/* ===== SOCIAL ICONS (MISSING IMPORTS FIXED) ===== */
import what from "./assets/what.png";
import insta from "./assets/insta.png";
import face from "./assets/face.png";
import you from "./assets/you.png";
import link from "./assets/link.png";

function Blog() {
  const navigate = useNavigate();

  return (
    <>
      {/* ================= HERO SECTION ================= */}
      <section className="blog-hero">
        <div className="blog-hero-images">
          <img src={blog1} alt="blog" />
          <img src={blog2} alt="blog" />
          <img src={blog3} alt="blog" />
          <img src={blog4} alt="blog" />
        </div>

        <div className="blog-hero-title">
          <h1>Karigarana</h1>
        </div>
      </section>

      {/* ================= INTRO CONTENT ================= */}
      <section className="blog-intro">
        <p className="breadcrumb">
          <span
            className="breadcrumb-home"
            onClick={() => navigate("/Home")}
          >
            Home
          </span>
          <span className="breadcrumb-sep">›</span>
          <span>Blog</span>
        </p>

        <h2>
          Discover the History of Our Products and Style Them Perfectly at Home
        </h2>

        <p className="intro-text">
          Transform your home with our exclusive collection, where every
          piece—from furnishings to décor and tableware—tells a story and
          reflects your unique style.
        </p>
      </section>

      {/* ================= BLOG LIST ================= */}
      <section className="blog-list">
        <div className="blog-card">
          <img src={post1} alt="blog post" />
          <h3>The Royal Courtyards Collection – A Celebration of Colour</h3>
          <span>By Anamika | 2025-11-24</span>
        </div>

        <div className="blog-card">
          <img src={post2} alt="blog post" />
          <h3>From Temples to Textiles — and Now to Tableware</h3>
          <span>By Mini Menon | 2025-10-03</span>
        </div>

        <div className="blog-card">
          <img src={post3} alt="blog post" />
          <h3>Introducing the Sanganer Blocks Collection</h3>
          <span>By Peepul Tree Stories | 2025-05-28</span>
        </div>
      </section>

      {/* ================= YOU MAY ALSO LIKE ================= */}
      {/* (UNCHANGED – same as your code) */}

{/* ================= YOU MAY ALSO LIKE ================= */}
<section className="related-blogs">
  <h2 className="related-title">You May Also Like</h2>

  <div className="related-wrapper">
    {/* LEFT BIG LIST */}
    <div className="related-left">
      <div className="related-card large">
        <img src={post1} alt="Brassware" />
        <div className="related-content">
          <h3>Why Brassware Should Be a Staple in Every Home</h3>
          <span>By Karigarana Stories · 2025-04-01</span>
        </div>
      </div>

      <div className="related-card large">
        <img src={post2} alt="Tablescape" />
        <div className="related-content">
          <h3>Crafting Memorable Gatherings: A Guide to Tablescape Design</h3>
          <span>By Karigarana Stories · 2025-04-01</span>
        </div>
      </div>
       <div className="related-card large">
        <img src={post3} alt="Tablescape" />
        <div className="related-content">
          <h3>Why Handcrafted Home Décor is Forever in Style</h3>
          <span>By Karigarana Stories · 2025-04-01</span>
        </div>
      </div>
       <div className="related-card large">
        <img src={post4} alt="Tablescape" />
        <div className="related-content">
          <h3>The Story of Dabu Prints: Tradition, Craft, and Contemporary Style</h3>
          <span>By Karigarana Stories · 2025-04-01</span>
        </div>
      </div>
       <div className="related-card large">
        <img src={post5} alt="Tablescape" />
        <div className="related-content">
          <h3>Understanding Different Bed Sheet Materials: Fabric Choices for Indian Homes</h3>
          <span>By Karigarana Stories · 2025-04-01</span>
        </div>
      </div>
    </div>

    {/* RIGHT SMALL LIST */}
    <div className="related-right">
      <div className="related-card small">
        <img src={post3} alt="Stone craft" />
        <div>
          <h4>Parchin Kari: A Legacy Carved in Stone, Studded with Gems</h4>
          <span>By Karigarana Stories · 5 mins read</span>
        </div>
      </div>

      <div className="related-card small">
        <img src={post1} alt="Block print" />
        <div>
          <h4>Introducing the Sanganer Blocks Collection</h4>
          <span>By Karigarana Stories · 3 mins read</span>
        </div>
      </div>

      <div className="related-card small">
        <img src={blog1} alt="Brass story" />
        <div>
          <h4>The Shimmering Legacy: A Story of Moradabad Brass</h4>
          <span>By Karigarana Stories · 5 mins read</span>
        </div>
      </div>
      <div className="related-card small">
        <img src={blog4} alt="Brass story" />
        <div>
          <h4>Cotton vs Cotton Blend Bedsheets: Which One Fits You Better?</h4>
          <span>By Karigarana Stories · 5 mins read</span>
        </div>
      </div>
      <div className="related-card small">
        <img src={blog2} alt="Brass story" />
        <div>
          <h4>Handcrafted for Your Table</h4>
          <span>By Karigarana Stories · 5 mins read</span>
        </div>
      </div>
      <div className="related-card small">
        <img src={blog3} alt="Brass story" />
        <div>
          <h4>Handcrafted Gift Ideas for Newlyweds: Pieces they’ll treasure Forever</h4>
          <span>By Karigarana Stories · 5 mins read</span>
        </div>
      </div>
      <div className="related-card small">
        <img src={post5} alt="Brass story" />
        <div>
          <h4>Blooming Patterns - The Floral Motifs of Chintz Through History</h4>
          <span>By Karigarana Stories · 5 mins read</span>
        </div>
      </div>
      <div className="related-card small">
        <img src={post3} alt="Brass story" />
        <div>
          <h4>Introducing the Sanganer Blocks Collection by</h4>
          <span>By Karigarana Stories · 5 mins read</span>
        </div>
      </div>
      <div className="related-card small">
        <img src={post2} alt="Brass story" />
        <div>
          <h4>Introducing the Sanganer Blocks Collection by</h4>
          <span>By Karigarana Stories · 5 mins read</span>
        </div>
      </div>
    </div>
  </div>
</section>
      {/* ================= WRAPPER START ================= */}
      <div className="newsletter-wrapper">

        {/* FEATURES */}
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

        {/* MARQUEE */}
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
            </marquee>
          </div>
        </section>

        {/* NEWSLETTER */}
        <section className="newsletter-section">
          <div className="newsletter-box">
            <h2>Exclusively For You!</h2>
            <p>
              Be the first to know about new collections, launches, sales, and
              much more!
            </p>

            <div className="newsletter-form">
              <input type="email" placeholder="Email Address" />
              <button>GET ME ON THE LIST</button>
            </div>
          </div>
        </section>

      </div> 
      {/*  newsletter-wrapper CLOSED (MAIN FIX) */}

      {/* FOOTER */}
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

    </>
  );
}

export default Blog;
