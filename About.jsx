
import React from "react";
import "./about.css";
import aboutImg from "./assets/about.jpg";
import video2 from "./assets/video5.mp4";
import indiaMap from "./assets/map.png";

import img2 from "./assets/blog.jpg";
import img3 from "./assets/blog3.jpg";
import img4 from "./assets/blog4.jpg";
import img5 from "./assets/blog2.jpg";
import img6 from "./assets/blog6.jpg";
import video1 from "./assets/craft.mp4";
import delivery from "./assets/delivery.jpg";
import handmade from "./assets/handmade.jpg";
import cod from "./assets/cod.jpg";
import returns from "./assets/returns.jpg";
import rev1 from "./assets/rev1.jpg";
import rev2 from "./assets/rev2.jpg";

import rev3 from "./assets/rev3.jpg";
import rev4 from "./assets/rev4.jpg";
import rev5 from "./assets/rev5.jpg";
import rev6 from "./assets/rev6.jpg";
import rev7 from "./assets/rev7.jpg";
import user1 from "./assets/user1.jpg";
import treeIcon from "./assets/tree1.jpg";
import what from "./assets/what.png";
import insta from "./assets/insta.png";
import face from "./assets/face.png";
import you from "./assets/you.png";
import link from "./assets/link.png"; 

function About() {
  return (
    <>
      <div className="about-page">
      <section className="about-hero">
        <img src={aboutImg} alt="About Karigarana" />

        <div className="about-text">
          <span className="line"></span>
          <h1>
            Rooted in Tradition;
            <br />
            Designed for your Home
          </h1>
        </div>
      </section>
    </div>
      <section className="craft-legacy">
  <h2>NOW LET'S DISCOVER INDIA'S RICH CRAFT LEGACY</h2>
  <p>
    Art forms, passed down through generations reimagined for today’s
    modern homes
  </p>

  <div className="craft-grid">
    {/* LEFT */}
    <div className="grid-col">
       <video src={video2} autoPlay muted loop />
    
      <img src={img2} alt="" />
    </div>

    {/* CENTER */}
    <div className="grid-col center">
      <img src={img3} alt="" />
      <video src={video1} autoPlay muted loop />
    </div>

    {/* RIGHT */}
    <div className="grid-col">
      <img src={img4} alt="" />
      <img src={img5} alt="" />
      <img src={img6} alt="" />
    </div>
  </div>
</section>

    <section className="india-craft">
      <div className="craft-container">
        
        {/* LEFT IMAGE */}
        <div className="craft-image">
          <img src={indiaMap} alt="Indian Artistry Map" />
        </div>

        {/* RIGHT CONTENT */}
        <div className="craft-content">
          <h2>
            Indian artistry, reimagined with
            <br />
            contemporary aesthetics.
          </h2>

          <p>
            At Karigarana, we offer more than just home decor. We provide a
            gateway to discovering the intricate crafts of India, each with a
            unique story and heritage.
          </p>

          <p>
            Our design-first approach ensures every piece is beautiful,
            functional, and durable. We have partnered with over 15,000 artisans
            across India who are specialists in their local techniques and are
            crafting unique pieces for you.
          </p>
        </div>

      </div>
    </section>

    
  
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
        </div>
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
        <p >
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

export default About;
