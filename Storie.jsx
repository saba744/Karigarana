
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import "./storie.css";

import img1 from "./assets/story1.jpg";
import img2 from "./assets/story2.jpg";
import img3 from "./assets/story3.jpg";
import bigImg from "./assets/monument.jpg";
import img4 from "./assets/culture.jpg";
import img5 from "./assets/people.jpg";
import img6 from "./assets/story4.jpg";
import img7 from "./assets/story5.jpg";
import img8 from "./assets/story6.jpg";
import img9 from "./assets/story7.jpg";
import mainImg from "./image/dholavira.jpg";
import side1 from "./image/jharkhand.jpg";
import side2 from "./image/paraguru.jpg";
import side3 from "./image/badami.jpg";
import img10 from "./assets/korkai.jpg";
import img11 from "./assets/lakkundi.jpg";
import img12 from "./assets/cookbook.jpg";
import img13 from "./assets/h1.jpg";
import img14 from "./assets/h2.jpg";
import img15 from "./assets/h3.jpg";
import img16 from "./assets/h4.jpg";
import img17 from "./assets/h5.jpg";
import img18 from "./assets/blog.jpg";

import img19 from "./assets/people.jpg";
import img20 from "./assets/blog2.jpg";
import img21 from "./assets/blog3.jpg";
import img22 from "./assets/blog4.jpg";
import book1 from "./assets/h1.jpg";
import book2 from "./assets/h2.jpg";
import book3 from "./assets/h8.jpg";
import bookMain from "./assets/h7.jpg";
import book4 from "./assets/h9.jpg";
import what from "./assets/what.png";
import insta from "./assets/insta.png";
import face from "./assets/face.png";
import you from "./assets/you.png";
import link from "./assets/link.png";



const slides = [
  {
    image: img1,
    title: "How the Ajanta Caves was rediscovered",
    
  },
  {
    image: img2,
    title: "Anjediva Island, Goa's Unknow Treasure",
    subtitle: "Handmade Traditions of India",
  },
  {
    image: img3,
    title: "Peacock: A constant in Indian Culture",
    subtitle: "Culture, Travel & Heritage",
  },
];

function Storie() {
  const navigate = useNavigate();

  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 4000); // auto slide time

    return () => clearInterval(timer);
  }, []);

  return (
    <>
      {/* HERO SLIDER */}
      <section className="story-hero">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`story-slide ${index === current ? "active" : ""}`}
            style={{ backgroundImage: `url(${slide.image})` }}
          >
            <div className="story-overlay">
              <h1>{slide.title}</h1>
              <p>{slide.subtitle}</p>
            </div>
          </div>
        ))}

        {/* DOTS */}
        <div className="story-dots">
          {slides.map((_, index) => (
            <span
              key={index}
              className={index === current ? "dot active" : "dot"}
              onClick={() => setCurrent(index)}
            />
          ))}
        </div>
      </section>
       <section className="most-popular">
      <h2 className="section-title">Most Popular</h2>

      <div className="popular-grid">
        {/* LEFT BIG CARD */}
        <div className="popular-main">
          <img src={bigImg} alt="Grand Palaces of India" />

          <div className="popular-overlay">
            <span className="category">MONUMENTS</span>
            <span className="meta">02 Dec | 7 mins | Anshika Jain</span>

            <h3>
              Grand Palaces of India – <br />
              Markers of an Era
            </h3>
          </div>
        </div>

        {/* RIGHT SIDE LIST */}
        <div className="popular-side">
          <div className="side-card">
            <img src={img5} alt="" />
            <div>
              <span className="category gold">LIVING CULTURE</span>
              <h4>Allahabad and the Golden Age of Hindi Literature</h4>
              <p>13 Sept | 24 mins | Akshat Lal</p>
            </div>
          </div>

          <div className="side-card">
            <img src={img4} alt="" />
            <div>
              <span className="category gold">PEOPLE</span>
              <h4>Narsinh Mehta: The Saint who inspired the Mahatma</h4>
              <p>29 Aug | 6 mins | Krutika Haraniya</p>
            </div>
          </div>
          <div className="side-card">
            <img src={img9} alt="" />
            <div>
              <span className="category gold">Handcraft</span>
              <h4>Craft's of India: Handmade of India</h4>
              <p>29 Aug | 6 mins | Krutika Haraniya</p>
            </div>
          </div>
        </div>
      </div>
    </section>
    
    <section className="story-grid-section">
      <div className="story-grid">
        {/* CARD 1 */}
        <div className="story-card">
          <img src={img7} alt="" />

          <div className="story-overlay">
            <span className="tag">ERAS</span>
            <h3>
              North-East India: A Neolithic Enigma (4000 – 1000 BCE)
            </h3>
            <p>10 Mar | 15 mins | Aditi Shah</p>

            <button className="read-btn">read now</button>
          </div>
        </div>

        {/* CARD 2 */}
        <div className="story-card">
          <img src={img6} alt="" />

          <div className="story-overlay">
            <span className="tag">MONUMENTS</span>
            <h3>
              Sringeri Temple Complex: A Haven of Tranquillity
            </h3>
            <p>26 Mar | 12 mins | Ganesh Iyer</p>

            <button
  className="read-btn"
  onClick={() => navigate("/info")}
>
  read now
</button>

          </div>
        </div>

        {/* CARD 3 */}
        <div className="story-card">
          <img src={img8} alt="" />

          <div className="story-overlay">
            <span className="tag">PLACES</span>
            <h3>
              Bandel: A Jewel of the Portuguese in Bengal
            </h3>
            <p>16 Jul | 9 mins | Sushmito Lahiry</p>

            <button className="read-btn">read now</button>
          </div>
        </div>
      </div>
    </section>


     <section className="circle-picks">

      <h2 className="circle-title">Circle Top Picks</h2>

      <div className="circle-grid">

        {/* LEFT BIG CARD */}
        <div className="left-card">
          <img src={mainImg} alt="Dholavira" />

          <div className="overlay">
            <span className="tag">PLACES</span>
            <h3>A Virtual Tour of Dholavira</h3>

            <a
              href="https://www.youtube.com/watch?v=abcd1234"
              target="_blank"
              rel="noopener noreferrer"
              className="play-btn"
            >
              ▶ play now
            </a>
          </div>
        </div>

        {/* RIGHT SIDE CARDS */}
        <div className="right-cards">

          <div className="small-card">
            <img src={side1} alt="Jharkhand" />
            <div className="text">
              <span>MONUMENTS</span>
              <h4>Maluti - Forgotten Temples of Jharkhand</h4>
              <p>03 Nov | 6 mins</p>
            </div>
          </div>

          <div className="small-card">
            <img src={side2} alt="Himachal" />
            <div className="text">
              <span>PLACES</span>
              <h4>Pragpur: Time Travelling in Himachal</h4>
              <p>11 Jul | 5 mins</p>
            </div>
          </div>

          <div className="bottom-card">
            <img src={side3} alt="Badami" />
            <div className="overlay">
              <span>MONUMENTS</span>
              <h3>Badami: A Story in Stone</h3>
              <p>14 May | 14 mins</p>
            </div>
          </div>

        </div>
      </div>
    </section>

     <section className="stories-section">
      <h2 className="stories-title">Stories That Make India</h2>

      <div className="stories-grid">

        {/* LEFT COLUMN */}
        <div className="stories-left">

          {/* TOP LEFT CARD */}
          <div className="story-card">
            <img src={img10} alt="Korkai" />
            <div className="story-overlay">
              <span className="story-tag">PLACES</span>
              <h3>Korkai: India’s Pearl Port</h3>
              <p>26 Aug | 6 mins | Aditi Shah</p>
              <button className="story-btn">read now</button>
            </div>
          </div>

          {/* BOTTOM LEFT CARD */}
          <div className="story-card small">
            <img src={img11} alt="Cookbooks" />
            <div className="story-overlay">
              <span className="story-tag">LIVING CULTURE</span>
              <h3>Lost World of Indian Cookbooks</h3>
            </div>
          </div>

        </div>

        {/* RIGHT BIG CARD */}
        <div className="story-card big">
          <img src={img12} alt="Lakkundi" />
          <div className="story-overlay">
            <span className="story-tag">PLACES</span>
            <h3>Lakkundi: Hallelujah in Stone</h3>
            <p>11 Mar | 13 mins | Amitabha Gupta</p>
            <button className="story-btn">read now</button>
          </div>
        </div>


      </div>
    </section>
      <section className="history-photos">
  <h2 className="history-title">History In Photos</h2>

  {/* ===== ROW 1 ===== */}
  <div className="history-grid">
    <div className="col small-col">
      <img src={img13} alt="history" />
    </div>

    <div className="col mixed-col">
      <img src={img14} alt="history" />
      <img src={img15} alt="history" />
    </div>

    <div className="col tall-col">
      <img src={img16} alt="history" />
    </div>

    <div className="col small-col">
      <img src={img17} alt="history" />
    </div>
  </div>

  {/* ===== ROW 2 (SAME PATTERN) ===== */}
  <div className="history-grid history-grid-second">
    <div className="col small-col">
      <img src={img18} alt="history" />
    </div>

    <div className="col mixed-col">
      <img src={img19} alt="history" />
      <img src={img20} alt="history" />
    </div>

    <div className="col tall-col">
      <img src={img21} alt="history" />
    </div>

    <div className="col small-col">
      <img src={img22} alt="history" />
    </div>
  </div>
</section>

<section className="bookclub">
  <div className="bookclub-header">
    <h2>Book Club</h2>
    <span className="view-all">view all +</span>
  </div>

  <div className="bookclub-layout">
    {/* LEFT BIG IMAGE */}
    <div className="bookclub-left">
      <img src={bookMain} alt="Main Book" />
    </div>

    {/* CENTER CONTENT */}
    <div className="bookclub-center">
      <span className="tag">ERAS</span>

      <h3>
        Reflections on Mughal Art and Culture with Roda Ahluwalia
      </h3>

      <p>
        Enter the amazing world of the great Mughals with Art Historian
        Roda Ahluwalia as she introduces us to a whole range of paintings
        and artefacts that reflect the Mughal world. Through this talk,
        she shares the latest research on the Mughals done by a
        cross-section of scholars from across the world.
      </p>

      <span className="date">15 Jan | Team LHI</span>
    </div>

    {/* RIGHT IMAGE COLUMN */}
    <div className="bookclub-right">
      <div className="side-card">
        <img src={book1} alt="" />
        <div>
          <span className="small-tag">PEOPLE</span>
          <p>Meet King Krishnadevaraya through his works</p>
          <span>22 Jul | Team LHI</span>
        </div>
      </div>

      <div className="side-card">
        <img src={book2} alt="" />
        <div>
          <span className="small-tag">ERAS</span>
          <p>India in the Persianate Age: 1000–1765</p>
          <span>02 Feb | Team LHI</span>
        </div>
      </div>

      <div className="side-card">
        <img src={book3} alt="" />
        <div>
          <span className="small-tag">ART HISTORY</span>
          <p>Explore the Story of India Through Objects</p>
          <span>13 Nov | Team LHI</span>
        </div>
      </div>
       <div className="side-card">
        <img src={book4} alt="" />
        <div>
          <span className="small-tag"> HISTORY</span>
          <p>Explore the Story of India Through Objects</p>
          <span>13 Nov | Team LHI</span>
        </div>
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

export default Storie;
