
import React, { useEffect, useRef, useState, useContext } from "react";
import axios from "axios";


import { useNavigate } from "react-router-dom";
import { CartContext } from "./context/CartContext";

import "./home.css";

import v1 from "./assets/video.mp4";
import v2 from "./assets/video2.mp4";
import v3 from "./assets/video3.mp4";
import pv1 from "./assets/pv1.mp4";
import pv2 from "./assets/pv2.mp4";
import pv3 from "./assets/pv3.mp4";
import pv4 from "./assets/pv4.mp4";
import pv5 from "./assets/pv5.mp4";
import saree from "./assets/saree.jpg";

import img1 from "./assets/cat1.jpg";
import img2 from "./assets/cat2.jpg";
import img3 from "./assets/cat3.jpg";
import img4 from "./assets/cat4.jpg";
import img5 from "./assets/cat5.jpg";
import s1 from "./assets/slide1.jpg";
import s2 from "./assets/slide2.jpg";
import s3 from "./assets/slide3.jpg";
import s4 from "./assets/slide4.jpg";
import s5 from "./assets/slide5.jpg";
import s6 from "./assets/slide6.jpg";
import s7 from "./assets/slide7.jpg";
import designerBed from "./assets/bed1.jpg";
import designerImg from "./assets/designer.jpg";


import winterBanner from "./assets/banner1.jpg"; 
import wg1 from "./assets/wg1.jpg";
import wg2 from "./assets/wg2.jpg";
import wg3 from "./assets/wg3.jpg";
import wg4 from "./assets/wg4.jpg";
import wg5 from "./assets/wg5.jpg";
import wg6 from "./assets/wg6.jpg";
import wg7 from "./assets/wg7.jpg";
import wg8 from "./assets/wg8.jpg";
import grassmatImg from "./assets/wg9.jpg";
import wickerImg from "./assets/wg10.jpg";
import quiltImg from "./assets/wg11.jpg";
import crochetImg from "./assets/wg12.jpg";
import aboutImg from "./assets/wg13.jpg"; 
import blog1 from "./assets/blog1.jpg";
import blog2 from "./assets/blog2.jpg";
import blog3 from "./assets/blog3.jpg";
import blog4 from "./assets/blog4.jpg";
import blog5 from "./assets/blog5.jpg";
import blog6 from "./assets/blog6.jpg";
import rev1 from "./assets/rev1.jpg";
import rev2 from "./assets/rev2.jpg";
import cof from "./assets/cof.jpg";
import t4 from "./assets/t4.jpg";

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


//import weddingBanner from "./assets/wedding-banner.jpg";


function Home() {
  const {   } =
  useContext(CartContext);

     const [size, setSize] = useState("5 Feet");
  const [qty, setQty] = useState(1);
  const [color, setColor] = useState("Dusty Pink");
  const videos = [v1, v2, v3];
  const [currentVideo, setCurrentVideo] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const videoRef = useRef(null);
  const navigate = useNavigate();
  const [activeVariant, setActiveVariant] = useState(null);
  const [selectedVariants, setSelectedVariants] = useState({});
 const [cartItems, setCartItems] = useState([]);
  const [cartOpen, setCartOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [reviews, setReviews] = useState([]);

const addToCart = async (item) => {
  try {
    await fetch("http://localhost:5000/api/cart/add", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(item),
    });

    //  YE LINE MISSING THI
    setCartItems([item]); // sirf last added item drawer ke liye
    setCartOpen(true);

  } catch (err) {
    console.error("Add to cart error", err);
  }
};
const closeCart = () => {
  setCartOpen(false);
};





const handleVariantChange = (cardIndex, field, value) => {
  setSelectedVariants(prev => ({
    ...prev,
    [cardIndex]: {
      ...prev[cardIndex],
      [field]: value
    }
  }));
};



  useEffect(() => {
    if (!isPlaying) return;

    const interval = setInterval(() => {
      setCurrentVideo((prev) => (prev + 1) % videos.length);
    }, 6000);

    return () => clearInterval(interval);
  }, [isPlaying, videos.length]);

  const togglePlay = () => {
    if (!videoRef.current) return;

    if (isPlaying) {
      videoRef.current.pause();
    } else {
      videoRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };
     useEffect(() => {
    const fetchReviews = async () => {
      try {
        const res = await axios.get(
          "http://localhost:5000/api/reviews"
        );
        console.log("REVIEWS FROM API 👉", res.data); //  DEBUG
        setReviews(res.data);
      } catch (err) {
        console.log("API ERROR ", err);
      }
    };

    fetchReviews();
  }, []);

  const product = {
    id: 1,
    title: "Sheer Curtain",
    price: 649,
    image: "/curtain.jpg",
  };

  const handleAddToCart = () => {
    addToCart({
      ...product,
      size,
      qty,
      color,
    });
  };
  const sendNewsletterMail = async () => {
  if (!email) {
    alert("Please enter email");
    return;
  }

  try {
    const res = await fetch("http://localhost:5000/api/mail/send", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ email })
    });

    const data = await res.json();
    alert(data.message);
    setEmail("");
  } catch (err) {
    alert("Something went wrong");
  }
};

const handleDelete = async (id) => {
  try {
    await axios.delete(
      `http://localhost:5000/api/reviews/${id}`
    );

    // UI se turant hata do
    setReviews(reviews.filter((r) => r._id !== id));
  } catch (err) {
    console.log("DELETE ERROR ❌", err);
  }
};


  return (
    <>
    

     
      {/* ===== HERO VIDEO ===== */}
      <section className="video-section">
        <video
          ref={videoRef}
          key={currentVideo}
          className="hero-video"
          src={videos[currentVideo]}
          autoPlay
          muted
          loop
          playsInline
        />

        {/* play / pause black icon */}
        <button className="video-control" onClick={togglePlay}>
          {isPlaying ? "❚❚" : "▶"}
        </button>

        <div className="video-overlay left">
  <h1>Crafted warmth for homes that inspire</h1>
  <button onClick={() => navigate("/sale")}>
    SHOP NOW →
  </button>
</div>
      </section>

      {/* ===== DISCOVER CATEGORIES ===== */}
      <section className="categories-section">
        <h2>Discover Our Categories</h2>
        <p>This Winter Season, Embrace India’s Timeless Craftsmanship</p>

        <div className="categories-grid">
          <div
  className="category-card"
  onClick={() => navigate("/bed")}
>
  <img src={img1} alt="Home Linen" />
  <span>Home Linen</span>
</div>

          <div className="category-card"
             onClick={() => navigate("/furnishing")}
               >
            <img src={img2} alt="Home Furnishing" />
            <span>Home Furnishing</span>
          </div>

          <div className="category-card" 
          onClick={() => navigate("/table")}
              >
              <img src={img3} alt="Table Linen" />
            <span>Table Linen</span>
          </div> 

          <div className="category-card"
            onClick={() => navigate("/decor")}
             >
            <img src={img4} alt="Kitchen & Serveware" />
            <span>Home Decor</span>
          </div>
          <div className="category-card"
          onClick={() => navigate("/kitchen")}
             >
            <img src={img5} alt="Home Decor" />
            <span>Kitchen & Serveware</span>
          </div>
        </div>
      </section>

      {/* ===== WINTER SALE BANNER IMAGE ===== */}
      <section className="winter-banner">
        <img src={winterBanner} alt="Winter Sale Banner" />
      </section>
      {/* ===== VIDEO PRODUCT STRIP ===== */}

<section className="video-products">
  <div className="video-products-grid">

    {/* ================= PRODUCT 1 ================= */}
    <div className="video-product-card">
      <span className="video-off">43% off</span>

      <video src={pv1} autoPlay muted loop playsInline />

      <div className="video-product-info">
        <p>Cotton Elegant Saree</p>
        <div className="price-row">
          <span className="new-price">₹999</span>
          <span className="old-price">₹1,748</span>
        </div>
      </div>

      {/* ADD TO CART */}
      <div
        className="add-cart-bar"
        onClick={() =>
  addToCart({ 
    title: "Cotton Elegant Saree",
    price: 999,
    size: selectedVariants[0]?.size || "L",
    qty: selectedVariants[0]?.quantity === "Set of 2" ? 2 : 1,
    color: selectedVariants[0]?.color || "Green",
    image: saree,
  })
}

      >
        <span>ADD TO CART</span>

        <span
          className={`arrow ${activeVariant === 0 ? "rotate" : ""}`}
          onClick={(e) => {
            e.stopPropagation();
            setActiveVariant(activeVariant === 0 ? null : 0);
          }}
        >
          ^
        </span>
      </div>

      {/* VARIANT */}
      <div className={`variant-overlay ${activeVariant === 0 ? "open" : ""}`}>
        <h4>Select your variant</h4>

        <label>Size</label>
        <select
          onChange={(e) =>
            handleVariantChange(0, "size", e.target.value)
          }
        >
          <option>L</option>
          <option>M</option>
        </select>

        <label>Quantity</label>
        <select
          onChange={(e) =>
            handleVariantChange(0, "quantity", e.target.value)
          }
        >
          <option>Set of 1</option>
          <option>Set of 2</option>
        </select>

        <label>Color</label>
        <select
          onChange={(e) =>
            handleVariantChange(0, "color", e.target.value)
          }
        >
          <option>Green</option>
          <option>Red</option>
        </select>
      </div>
    </div>
      
<div className="video-product-card">
      <span className="video-off">47% off</span>

      <video src={pv2} autoPlay muted loop playsInline />

      <div className="video-product-info">
        <p>Coffee Dabara set</p>
        <div className="price-row">
          <span className="new-price">₹699</span>
          <span className="old-price">₹900</span>
        </div>
      </div>

      {/* ADD TO CART */}
      <div
        className="add-cart-bar"
     onClick={() =>
  addToCart({
    title: "Coffee Dabara set",
    price: 699,
    size: selectedVariants[1]?.size || "Small",
    qty: selectedVariants[1]?.quantity || 1,
    color: selectedVariants[1]?.color || "Brown",
    image: cof,
  })
}

      >
        <span>ADD TO CART</span>

        <span
          className={`arrow ${activeVariant === 1 ? "rotate" : ""}`}
          onClick={(e) => {
            e.stopPropagation();
            setActiveVariant(activeVariant === 1 ? null : 1);
          }}
        >
          ^
        </span>
      </div>

      {/* VARIANT */}
      <div className={`variant-overlay ${activeVariant === 1 ? "open" : ""}`}>
        <h4>Select your variant</h4>

        <label>Size</label>
        <select
          onChange={(e) =>
            handleVariantChange(0, "size", e.target.value)
          }
        >
          <option>small</option>
          <option>Large</option>
        </select>

        <label>Quantity</label>
        <select
          onChange={(e) =>
            handleVariantChange(0, "quantity", e.target.value)
          }
        >
          <option>Set of 1</option>
          <option>Set of 2</option>
        </select>

        <label>Color</label>
        <select
          onChange={(e) =>
            handleVariantChange(0, "color", e.target.value)
          }
        >
          <option>brown</option>
          <option>Red</option>
        </select>
      </div>
    </div>
  
    <div className="video-product-card">
      <span className="video-off">50% off</span>
      <video src={pv3} autoPlay muted loop playsInline />
      <div className="video-product-info">
        <p>Elegant Lighting Material</p>

        <div className="price-row">
          <span className="new-price">₹499</span>
          <span className="old-price">₹800</span>
        </div>
      </div>
  <div
  className="add-cart-bar"
  onClick={() =>
    addToCart({
      title: "Elegant Lighting Material",
      price: 499,
      size: selectedVariants[2]?.size || "5 Feet",
      qty:
        selectedVariants[2]?.quantity === "Set of 2" ? 2 : 1,
      color: selectedVariants[2]?.color || "Green",
      image: s7,
    })
  }
>
  <span>ADD TO CART</span>

  <span
    className={`arrow ${activeVariant === 2 ? "rotate" : ""}`}
    onClick={(e) => {
      e.stopPropagation();
      setActiveVariant(activeVariant === 2 ? null : 2);
    }}
  >
    ^
  </span>
</div>



{/* VARIANT OVERLAY */}
<div className={`variant-overlay ${activeVariant === 2 ? "open" : ""}`}>

  <h4>Select your variant</h4>

  <label>Size</label>
  <select>
    <option>5 Feet</option>
    <option>6 Feet</option>
  </select>

  <label>Quantity</label>
  <select>
    <option>Set of 1</option>
    <option>Set of 2</option>
  </select>

  <label>Color</label>
  <select>
    <option>Green</option>
    <option>Red</option>
  </select>
</div>
</div>

    <div className="video-product-card">
      <span className="video-off">50% off</span>
      <video src={pv4} autoPlay muted loop playsInline />
      <div className="video-product-info">
        <p>Handmade Table Runner</p>

        <div className="price-row">
          <span className="new-price">₹499</span>
          <span className="old-price">₹1000</span>
        </div>
      </div>
   <div
  className="add-cart-bar"
  onClick={() =>
    addToCart({
      title: "Handmade Table Runner",
      price: 499,
      size: selectedVariants[3]?.size || "5 Feet",
      qty:
        selectedVariants[3]?.quantity === "Set of 2" ? 2 : 1,
      color: selectedVariants[3]?.color || "Green",
      image: t4,
    })
  }
>
  <span>ADD TO CART</span>

  <span
    className={`arrow ${activeVariant === 3 ? "rotate" : ""}`}
    onClick={(e) => {
      e.stopPropagation();
      setActiveVariant(activeVariant === 3 ? null : 3);
    }}
  >
    ^
  </span>
</div>


{/* VARIANT OVERLAY */}
<div className={`variant-overlay ${activeVariant === 3 ? "open" : ""}`}>

  <h4>Select your variant</h4>

  <label>Size</label>
  <select>
    <option>5 Feet</option>
    <option>6 Feet</option>
  </select>

  <label>Quantity</label>
  <select>
    <option>Set of 1</option>
    <option>Set of 2</option>
  </select>

  <label>Color</label>
  <select>
    <option>Green</option>
    <option>Red</option>
  </select>
</div>
</div>

    <div className="video-product-card">
      <span className="video-off">55% off</span>
      <video src={pv5} autoPlay muted loop playsInline />
      <div className="video-product-info">
        <p>Applique Cushion</p>

        <div className="price-row">
          <span className="new-price">₹3,799</span>
          <span className="old-price">₹5,769</span>
        </div>
      </div>
      <button className="out">OUT OF STOCK</button>
    </div>

  </div>
</section>{/* ===== IMAGE STRIP UNDER VIDEOS ===== */}
<section className="image-strip">
  <h2>Welcome the Winter in Style</h2>
  <p>crafted for homes that inspire.</p>

  <div className="image-strip-grid">

    <div className="image-card">
      <img src={s1} alt="" />
      <div className="image-info">
        <p className="title">Pure Cotton Quilt</p>
        <div className="price">
          <span className="new">₹2499</span>
          <span className="old">₹4373</span>
          <span className="off">42% off</span>
        </div>
        <div className="stars">★★★★★ <span>(5)</span></div>
      </div>
    </div>

    <div className="image-card">
      <img src={s2} alt="" />
      <div className="image-info">
        <p className="title">Bed Sheet Set</p>
        <div className="price">
          <span className="new">₹1049</span>
          <span className="old">₹1521</span>
          <span className="off">31% off</span>
        </div>
        <div className="stars">★★★★★ <span>(5)</span></div>
      </div>
    </div>

    <div className="image-card">
      <img src={s3} alt="" />
      <div className="image-info">
        <p className="title">Curtain Collection</p>
        <div className="price">
          <span className="new">₹2999</span>
          <span className="old">₹5248</span>
          <span className="off">42% off</span>
        </div>
        <div className="stars">★★★★☆ <span>(5)</span></div>
      </div>
    </div>

    <div className="image-card">
      <img src={s4} alt="" />
      <div className="image-info">
        <p className="title">Brass Serveware</p>
        <div className="price">
          <span className="new">₹1439</span>
          <span className="old">₹3199</span>
          <span className="off">55% off</span>
        </div>
        <div className="stars">★★★★☆ <span>(5)</span></div>
      </div>
    </div>

    <div className="image-card">
      <img src={s5} alt="" />
      <div className="image-info">
        <p className="title">Table Linen Set</p>
        <div className="price">
          <span className="new">₹1499</span>
          <span className="old">₹2623</span>
          <span className="off">42% off</span>
        </div>
        <div className="stars">★★★★★ <span>(5)</span></div>
      </div>
    </div>

    <div className="image-card">
      <img src={s6} alt="" />
      <div className="image-info">
        <p className="title">Wicker Planters</p>
        <div className="price">
          <span className="new">₹949</span>
          <span className="old">₹1376</span>
          <span className="off">31% off</span>
        </div>
        <div className="stars">★★★★★ <span>(5)</span></div>
      </div>
    </div>

  </div>
</section>
 <section className="designer-pick">
        <div className="designer-left">
          <img src={designerBed} alt="Designer Pick" />
          <div className="designer-text">
            <h2>Designer’s Pick</h2>
            <p>
              Handmade Quilts inspired by the colours, textures, & artistry of
              Rajasthan’s regal palaces
            </p>
          </div>
        </div>

        <div className="designer-right">
          <img src={designerImg} alt="Designer" />
          <div className="designer-name">
            <strong>Saba Shaikh</strong>
            <span>Full Stack Developer</span>
          </div>
        </div>
      </section>

{/* ===== WEDDING GIFTS EDIT SECTION ===== */}
<section className="wedding-gifts">

  {/* LEFT BIG BANNER */}
  <div className="wedding-banner">
    <div className="wedding-overlay">
      <h2>Wedding<br />Gifts Edit</h2>
      <p>Let The Joy of Your<br />Gift Glow A Little Longer</p>
      <button>View All</button>
    </div>
  </div>

  {/* RIGHT PRODUCT GRID */}
  <div className="wedding-products">

    <div className="wedding-card">
      <img src={wg1} alt="" />
      <p className="title">Premium Home Decor Gifts</p>
      <div className="price-row">
        <span className="new">₹2099</span>
        <span className="old">₹3999</span>
        <span className="off">47% off</span>
      </div>
    </div>

    <div className="wedding-card">
      <img src={wg2} alt="" />
      <p className="title">Brass Coffee Dabara Set</p>
      <div className="price-row">
        <span className="new">₹2099</span>
        <span className="old">₹4399</span>
        <span className="off">52% off</span>
      </div>
    </div>

    <div className="wedding-card">
      <img src={wg3} alt="" />
      <p className="title">Pure Brass Kitchen Set</p>
      <div className="price-row">
        <span className="new">₹2799</span>
        <span className="old">₹5599</span>
        <span className="off">50% off</span>
      </div>
    </div>

    <div className="wedding-card">
      <img src={wg4} alt="" />
      <p className="title">Cotton Double Bed Sheet</p>
      <div className="price-row">
        <span className="new">₹1699</span>
        <span className="old">₹3399</span>
        <span className="off">50% off</span>
      </div>
    </div>
     <div className="wedding-card">
      <img src={wg5} alt="" />
      <p className="title">Cotton Double Bed Sheet</p>
      <div className="price-row">
        <span className="new">₹1699</span>
        <span className="old">₹3399</span>
        <span className="off">50% off</span>
      </div>
    </div>
     <div className="wedding-card">
      <img src={wg6} alt="" />
      <p className="title">Cotton Double Bed Sheet</p>
      <div className="price-row">
        <span className="new">₹1699</span>
        <span className="old">₹3399</span>
        <span className="off">50% off</span>
      </div>
    </div>
     <div className="wedding-card">
      <img src={wg7} alt="" />
      <p className="title">Cotton Double Bed Sheet</p>
      <div className="price-row">
        <span className="new">₹1699</span>
        <span className="old">₹3399</span>
        <span className="off">50% off</span>
      </div>
    </div>
     <div className="wedding-card">
      <img src={wg8} alt="" />
      <p className="title">Cotton Double Bed Sheet</p>
      <div className="price-row">
        <span className="new">₹1699</span>
        <span className="old">₹3399</span>
        <span className="off">50% off</span>
      </div>
    </div>

  </div>
  
</section>

{/* ===== CATEGORY BANNERS (AFTER WEDDING SECTION) ===== */}
<section className="category-banners">

  <div className="category-card">
    <img src={grassmatImg} alt="Grassmats" />
   <div className="category-overlay">
  <h3>Grassmats</h3>
  <p>
    Handwoven by Artisans from<br />Midnapore in Bengal
  </p>
  <button onClick={() => navigate("/decor")}>
    View All
  </button>
</div>

  </div>

  <div className="category-card">
    <img src={wickerImg} alt="Wicker of the Valley" />
    <div className="category-overlay">
      <h3>Wicker of the Valley</h3>
      <p>Bring Home a<br /><b>Piece of Kashmir</b></p>
      <button onClick={() => navigate("/kitchen")}>
    View All
  </button>
    </div>
  </div>

</section>

 <section className="handcrafted-banners">
      
      {/* LEFT IMAGE */}
      <div className="handcrafted-card left">
        <img src={quiltImg} alt="Handcrafted Quilts" />
        <div className="handcrafted-overlay">
          <h2>Handcrafted Quilts</h2>
          <p>
            Made For Restful Nights And Slow,<br />
            Sunlit Mornings
          </p>
          <button onClick={() => navigate("/bed")}>
    View All
  </button>
        </div>
      </div>

      {/* RIGHT IMAGE */}
      <div className="handcrafted-card right">
        <img src={crochetImg} alt="The Crochet Collection" />
        <div className="handcrafted-overlay">
          <h2>The Crochet Collection</h2>
          <p>
            A Collaboration Between Artisans in<br />
            Narsapur and Murshidabad, India
          </p>
          <button onClick={() => navigate("/table")}>
    View All
  </button>
        </div>
      </div>

    </section>

     <section className="about-section">
      <div className="about-wrapper">
        
        {/* LEFT IMAGE */}
        <div className="about-image">
          <img src={aboutImg} alt="Handcrafted Art" />
        </div>

        {/* RIGHT CONTENT */}
        <div className="about-content">
          <h2>Infinite India. Handcrafted</h2>
          <p>
           Inspired by India’s diverse craft traditions, each handcrafted piece tells a story of skill, heritage, and mindful creation. Made by master artisans using time-honoured techniques, our collections celebrate authenticity, artistry, and the enduring charm of handmade beauty.
          </p>
<button
            className="about-btn"
            onClick={() => navigate("/storie")}
          >
            KNOW MORE ABOUT US
          </button>
        </div>

      </div>
    </section>

    <section className="blog-section">
  <div className="blog-header">
    <h2>Welcome to India's HandCraft World</h2>
    <p>
      Follow our blogs to explore the rich history and legacy of our home
      decor and furnishings collection and discover how they can complement
      your unique style!
    </p>
  </div>

  <div className="blog-grid">
  {/* CARD 1 */}
  <div className="blog-card">
    <img src={blog1} alt="Blog 1" />
    <h3>
      The Royal Courtyards Collection – A Celebration of Colour, Craft,
      and Culture
    </h3>
    <span>By Anamika &nbsp; | &nbsp; 2025-11-24</span>
  </div>

  {/* CARD 2 */}
  <div className="blog-card">
    <img src={blog2} alt="Blog 2" />
    <h3>
      From Temples to Textiles — and Now to Tableware
    </h3>
    <span>By Mini Menon &nbsp; | &nbsp; 2025-10-03</span>
  </div>

  {/* CARD 3 */}
<div className="blog-card explore-card">
  <img src={blog3} alt="Blog 3" />

  <h3>
    Introducing the Sanganer Blocks Collection by Peepul Tree
  </h3>
  <span>By Peepul Tree Stories &nbsp; | &nbsp; 2025-05-28</span>

  {/*  horizontal line ke neeche */}
 <div className="explore-blog-box">
  <span onClick={() => navigate("/blogs")}>
    EXPLORE OUR BLOGS
  </span>
</div>

</div>

  {/*  cards SAME */}
  <div className="blog-card">
    <img src={blog4} alt="Blog 4" />
    <h3>The Inspiration Behind Peepul Tree’s Marigold Collection</h3>
    <span>By Peepul Tree Stories &nbsp; | &nbsp; 2025-06-09</span>
  </div>

  <div className="blog-card">
    <img src={blog5} alt="Blog 5" />
    <h3>The Inspiration Behind Peepul Tree’s Marigold Collection</h3>
    <span>By Peepul Tree Stories &nbsp; | &nbsp; 2025-06-09</span>
  </div>

  <div className="blog-card">
    <img src={blog6} alt="Blog 6" />
    <h3>The Inspiration Behind Peepul Tree’s Marigold Collection</h3>
    <span>By Peepul Tree Stories &nbsp; | &nbsp; 2025-06-09</span>
  </div>
</div>
</section>

    <section className="impact-section">
      <div className="overlay">
        <div className="content">
          <h1>Transform your home<br />with fine handcrafted products</h1>

          <p className="subtitle">
            Unwrap a world of artistry from PeepulTree. Thoughtfully crafted and
            wrapped with love, our handpicked curation of gifts from home and
            living makes the process easy and memorable.
          </p>

          <div className="stats">
            <div className="stat-box">
              <h3>Impact</h3>
              <p>Working with over 10,000 artisans<br />Across 80 craft forms</p>
            </div>

            <div className="divider"></div>

            <div className="stat-box">
              <h3>Sustainable</h3>
              <p>Using Natural Earth Friendly<br />processes and materials</p>
            </div>

            <div className="divider"></div>

            <div className="stat-box">
              <h3>Nurturing</h3>
              <p>Artisans, Communities &<br />Building livelihoods</p>
            </div>

            <div className="divider"></div>

            <div className="stat-box">
              <h3>Celebrating Legacies</h3>
              <p>5K+ films & articles published on India’s<br />history, arts & living culture</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  

      
      {/* CUSTOMER REVIEWS SECTION */}
<section className="customer-reviews">
  <h2>What Our Customers Say</h2>

  {/* TOP BAR */}
  <div className="reviews-top">
    <div className="reviews-left">
      <span className="review-tab active">Reviews</span>
      <div className="stars">
  ★★★★★ <span>{reviews.length} Reviews</span>
</div>

    </div>

    <div className="reviews-right">
      <button
        className="write-review"
        onClick={() => navigate("/write-review")}
      >
        Write A Review
      </button>
    </div>
  </div>

  {/* STATIC + DYNAMIC REVIEWS (SAME GRID) */}
  <div className="reviews-grid">
    {/* STATIC CARD 1 }
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

    {/* STATIC CARD 2 }
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

    {/* STATIC CARD 3 }
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

    {/* STATIC CARD 4 }
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

    {/* STATIC CARD 5 }
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

    {/* STATIC CARD 6 }
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

    {/*  DYNAMIC REVIEWS (DB SE) */}
   {reviews.map((review) => (
  <div className="review-card" key={review._id}>
    <h4>{review.name}</h4>

    <p className="reviewed">
      Reviewed <span>{review.productName}</span>
    </p>

    <div className="card-stars">
      {"★".repeat(review.rating)}
    </div>

    <p>{review.comment}</p>

   <img
  className="single-img"
  src={`http://localhost:5000${review.productImage}`}
  alt={review.productName}
/>


   <p className="date">
  {new Date(review.reviewDate).toLocaleDateString("en-IN", {
    day: "numeric",
    month: "long",
    year: "numeric",
  })}
</p>


  </div>
))}

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
      <input
  type="email"
  placeholder="Email Address"
  value={email}
  required              // 
  onChange={(e) => setEmail(e.target.value)}
/>

      <button
  type="button"        // VERY IMPORTANT
  onClick={sendNewsletterMail}
>
  GET ME ON THE LIST
</button>

    </div>
  </div>
</section>

{/* ===== CART OVERLAY ===== */}


{cartOpen && <div className="cart-overlay" onClick={closeCart}></div>}

{/* ===== RIGHT SIDE CART ===== */}
<div className={`side-cart ${cartOpen ? "open" : ""}`}>
  <div className="cart-head">
    <h3>My Cart</h3>
    <span onClick={closeCart}>✕</span>
  </div>

 {cartItems.length === 0 && <p>Cart is empty</p>}

  {cartItems.map((item, index) => (
    <div className="cart-product" key={index}>
      <img src={item.image} alt={item.title} />

      <div className="cart-info">
        <h4>{item.title}</h4>
        <p>₹{item.price}</p>
        <p>Size: {item.size}</p>
        <p>Qty: {item.qty}</p>
        <p>Color: {item.color}</p>
      </div>
    </div>
  ))}



 <button
  className="checkout-btn"
  onClick={() => navigate("/checkout")}
>
  Proceed to Place Order
</button>

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

      <p className="contact">Email Us: teamkarigarana@gmail.com</p>
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
        <p onClick={() => navigate("/bed")}>Home Linen</p>
        <p onClick={() => navigate("/furnishing")}>Home Furnishing</p>
        <p onClick={() => navigate("/kitchen")}>Kitchen & Serveware</p>
        <p onClick={() => navigate("/table")}>Table Linen</p>
        <p onClick={() => navigate("/decor")}>Home Decor</p>
      </div>

      <div>
        <h4>Quick Links</h4>
       <p onClick={() => navigate("/bed")}>Home & Living</p>

<p onClick={() => navigate("/craft")}>Crafts</p>

<p onClick={() => navigate("/storie")}>Stories</p>

<p onClick={() => navigate("/blogs")}>
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
    </>
  );
}

export default Home;
