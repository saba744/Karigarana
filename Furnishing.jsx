import { useState, useEffect, useContext } from "react";

import { useNavigate } from "react-router-dom";
import "./furnishing.css";
import topBanner from "./assets/fur.jpg"; 
import { useLocation } from "react-router-dom";



import { WishlistContext } from "./context/WishlistContext";



import rag1 from "./assets/rug1.jpg";
import rag2 from "./assets/rug2.jpg";
import rag3 from "./assets/rug3.jpg";
import rag4 from "./assets/rug4.jpg";
import rag5 from "./assets/rug5.jpg";
import rag6 from "./assets/tow.jpg";
import rag7 from "./assets/tow1.jpg";
import rag8 from "./assets/tow2.jpg";
import rag9 from "./assets/tow3.jpg";
import rag10 from "./assets/tow4.jpg";
import rag11 from "./assets/cur.jpg";
import rag12 from "./assets/cu2.jpg";
import rag13 from "./assets/cu3.jpg";
import rag14 from "./assets/cu1.jpg";
import rag15 from "./assets/cu4.jpg";
import rag16 from "./assets/co.jpg";
import rag17 from "./assets/co1.jpg";
import rag18 from "./assets/co2.jpg";
import rag19 from "./assets/co3.jpg";

import rag20 from "./assets/co4.jpg";
import what from "./assets/what.png";
import insta from "./assets/insta.png";
import face from "./assets/face.png";
import you from "./assets/you.png";
import link from "./assets/link.png";



const PRODUCTS = [
  {
    id: 1,
    title: "Cotton Rug for Living Room",
    category: "Rugs",
    price: 1999,
    oldPrice: 3999,
    rating: 4,
    reviews: 18,
    image: rag1,
  },
  {
    id: 2,
    title: "Pure Cotton Hand & Bath Towel",
    category: "Rugs",
    price: 1099,
    oldPrice: 2799,
    rating: 5,
    reviews: 11,
    image: rag2,
  },
  {
    id: 3,
    title: "Hand Block Printed Cushion Cover",
    category: "Rugs",
    price: 899,
    oldPrice: 1799,
    rating: 4,
    reviews: 13,
    image: rag3,
  },
  {
    id: 4,
    title: "Hand Printed Curtains",
    category: "Rugs",
    price: 2499,
    oldPrice: 4999,
    rating: 5,
    reviews: 10,
    image: rag4,
  },
  {
    id: 5,
    title: "Hand Printed Curtains",
    category: "Rugs",
    price: 2499,
    oldPrice: 4999,
    rating: 4,
    reviews: 14,
    image: rag5,
  },
  {
    id: 6,
    title: "Pure Cotton hand and bath towel set",
    category: "Towels",
    price: 700,
    oldPrice: 1000,
    rating: 6,
    reviews: 11,
    image: rag6,
  },
  {
    id: 7,
    title: "white pure cotton handmade towel for comfarting your face",
    category: "Towels",
    price: 500,
    oldPrice: 800,
    rating: 4,
    reviews: 14,
    image: rag7,
  },
  {
    id: 8,
    title: "Hand Printed towel set",
    category: "Towels",
    price: 1000,
    oldPrice: 4999,
    rating: 5,
    reviews: 16,
    image: rag8,
  },
  {
    id: 9,
    title: "towel set white cotton handmade",
    category: "Towels",
    price: 2499,
    oldPrice: 4999,
    rating: 5,
    reviews: 12,
    image: rag9,
  },
  {
    id: 10,
    title: "Hand Printed Curtains",
    category: "Towels",
    price: 2499,
    oldPrice: 4999,
    rating: 5,
    reviews: 14,
    image: rag10,
  },

   {
    id: 11,
    title: "Hand Printed Curtains with white flower and beautiful colour",
    category: "Curtains",
    price: 1500,
    oldPrice: 3000,
    rating: 5,
    reviews: 14,
    image: rag11,
  },

   {
    id: 12,
    title: " with black dots and cream colour Hand Printed Curtains",
    category: "Curtains",
    price: 700,
    oldPrice: 2000,
    rating: 6,
    reviews: 12,
    image: rag12,
  },

   {
    id: 13,
    title: "Hand Printed Curtains",
    category: "Curtains",
    price: 800,
    oldPrice: 1500,
    rating: 5,
    reviews: 14,
    image: rag13,
  },

   {
    id: 14,
    title: "Hand Printed Curtains",
    category: "Curtains",
    price: 200,
    oldPrice: 500,
    rating: 5,
    reviews: 14,
    image: rag14,
  },

   {
    id: 15,
    title: "Hand Printed Curtains for making your window more better",
    category: "Curtains",
    price: 300,
    oldPrice: 800,
    rating: 5,
    reviews: 14,
    image: rag15,
  },
   {
    id: 16,
    title: "Hand Printed Cushion cover for making your furniture more beautiful",
    category: "Cushion Covers",
    price: 400,
    oldPrice: 800,
    rating: 5,
    reviews: 14,
    image: rag16,
  },
   {
    id: 17,
    title: "Handmade cushion cover",
    category: "Cushion Covers",
    price: 200,
    oldPrice: 500,
    rating: 5,
    reviews: 14,
    image: rag17,
  },
   {
    id: 18,
    title: "Hand Printed cushion cover for making your window more better",
    category: "Cushion Covers",
    price: 900,
    oldPrice: 1000,
    rating: 5,
    reviews: 14,
    image: rag18,
  },
   {
    id: 19,
    title: "white Cushion cover ",
    category: "Cushion Covers",
    price: 300,
    oldPrice: 800,
    rating: 5,
    reviews: 14,
    image: rag19,
  },
   {
    id: 20,
    title: "Hand Printed Cushion cover for making your window more better",
    category: "Cushion Covers",
    price: 700,
    oldPrice: 800,
    rating: 5,
    reviews: 14,
    image: rag20,
  },

];


const CATEGORIES = ["Curtains", "Cushion Covers", "Rugs", "Towels"];


function Furnishing() {
  const navigate = useNavigate();
   
const { toggleWishlist, isInWishlist } = useContext(WishlistContext);



  const [selectedCategory, setSelectedCategory] = useState("all");

  const [sort, setSort] = useState("");
  const [price, setPrice] = useState(5000);
  const OFFER_PRODUCTS = [1, 3]; 
   const location = useLocation();

 
const filteredProducts = PRODUCTS
  .filter((p) => {
    if (selectedCategory !== "all" && p.category !== selectedCategory) {
      return false;
    }
    return p.price <= price;
  })
  .sort((a, b) => {
    if (sort === "low") return a.price - b.price;
    if (sort === "high") return b.price - a.price;
    return 0;
  });


   
useEffect(() => {
  const params = new URLSearchParams(location.search);
  const catFromUrl = params.get("cat");

  if (catFromUrl) {
    setSelectedCategory(catFromUrl);
  }
}, [location.search]);
useEffect(() => {
  const params = new URLSearchParams(location.search);
  const catFromUrl = params.get("cat");

  if (catFromUrl) {
    setSelectedCategory(catFromUrl);
  } else {
    setSelectedCategory("all");
  }
}, [location.search]);


return (
  <>
    <div className="dog-container">

      {/* TOP IMAGE BANNER */}
      <div className="dog-top-banner">
        <img src={topBanner} alt="Home Furnishing Banner" />
      </div>

      {/* Breadcrumb */}
      <div className="dog-breadcrumb">
        <span className="dog-crumb-home" onClick={() => navigate("/home")}>
          Home
        </span>
        &gt; Home Furnishing
      </div>

      <h1 className="dog-page-title">HOME FURNISHING</h1>

      <div className="dog-layout">
        {/* LEFT FILTER */}
        <aside className="dog-filter">
        <h4>CATEGORIES</h4>

{/* ALL OPTION */}
<div
  className={`dog-cat-item ${
    selectedCategory === "all" ? "dog-active" : ""
  }`}
  onClick={() => setSelectedCategory("all")}
>
  All
</div>

{CATEGORIES.map((cat) => (
  <div
    key={cat}
    className={`dog-cat-item ${
      selectedCategory === cat ? "dog-active" : ""
    }`}
    onClick={() => setSelectedCategory(cat)}
  >
    {cat}
  </div>
))}



          <h4>PRICE</h4>
          <div className="dog-price-range">
            ₹500 – ₹{price}
            <input
              type="range"
              min="500"
              max="5000"
              value={price}
              onChange={(e) => setPrice(Number(e.target.value))}
            />
          </div>
        </aside>

        {/* RIGHT PRODUCTS */}
        <section className="dog-products">
          <div className="dog-sort-row">
            <span>Sort by:</span>
            <select onChange={(e) => setSort(e.target.value)}>
              <option value="">Best selling</option>
              <option value="low">Price: Low to High</option>
              <option value="high">Price: High to Low</option>
            </select>
          </div>

          <div className="dog-product-grid">
            {filteredProducts.map((p) => (
  <div
    className="dog-product-card"
    key={p.id}
    onClick={() =>
  navigate("/order-summary", {
    state: {
      ...p,
      productName: p.title,
      image: p.image || p.img
    }
  })
}

  >
    <div className="dog-img-wrap">
      <span
        className="dog-wishlist-icon"
        onClick={(e) => {
          e.stopPropagation(); // 🔥 card click se bachane ke liye
          toggleWishlist({
            ...p,
            image: p.image?.toString()
          });
        }}
      >
        {isInWishlist(p.id) ? "❤️" : "🤍"}
      </span>

      <img src={p.image} alt={p.title} />

      {OFFER_PRODUCTS.includes(p.id) && (
        <span className="dog-offer">
          {Math.round(((p.oldPrice - p.price) / p.oldPrice) * 100)}% OFF
        </span>
      )}
    </div>

    <h3>{p.title}</h3>

    <div className="dog-rating">
      {"★".repeat(p.rating)}
      <span>({p.reviews})</span>
    </div>

    <div className="dog-price">
      ₹{p.price}
      <span className="dog-old">₹{p.oldPrice}</span>
    </div>
  </div>
))}

          </div>
        </section>
      </div>
    


       <section className="dog-info">
  <div className="dog-info-box">
    <h2>Transform Your Living Space with Beautiful Home Furnishings</h2>

    <p>
       Home furnishing plays a vital role in enhancing the comfort and aesthetics
    of your living space. From elegant curtains to stylish cushion covers,
    every element adds character and warmth to your home.
    </p>

    <p>
       Our handcrafted collection of rugs, towels, curtains, and cushion covers
    blends traditional craftsmanship with modern design to give your home a
    refined and elegant look.
    </p>

    <h3>Why Choose Our Home Furnishing Products?</h3>

    <p>
     ✔ Premium quality fabrics  
    <br />
     ✔ Handcrafted by skilled artisans  
    <br />
     ✔ Long-lasting & easy to maintain  
    <br />
     ✔ Perfect for modern & traditional homes
    </p>

    <button className="dog-show-more">Show More</button>
  </div>

  <div className="dog-faq-box">
    <h3>Frequently Asked Questions (FAQs)</h3>

    <div className="dog-faq-item">
      <strong>1. What is the Difference Between a Duvet and a Comforter?</strong>
      <p>
        A duvet is a soft, flat bag filled with down or synthetic fibers, usually used
        with a removable cover. A comforter is a quilted blanket designed to be used
        without a cover.
      </p>
    </div>

    <div className="dog-faq-item">
      <strong>2. What are the Benefits of Cushion Fabric for Bedding?</strong>
      <p>
        Linen is breathable, moisture-wicking, and becomes softer with each wash,
        making it ideal for comfortable and long-lasting bedding.
      </p>
    </div>

    <div className="dog-faq-item">
      <strong>3. How Do I Prevent My Bed Sheets from Pilling?</strong>
      <p>
        Wash sheets on a gentle cycle, avoid harsh detergents, and dry on low heat.
        Washing inside out also helps reduce friction.
      </p>
    </div>

    <button className="dog-show-more">Show More</button>
  </div>
</section>

<section className="dog-footer">
  <div className="dog-footer-container">
    {/* LEFT */}
    <div className="dog-footer-about">
      <h2 className="dog-logo">
        Karigarana <span></span>
      </h2>
      <p className="dog-tagline">Infinite India. Handcrafted.</p>

      <p className="dog-about-text">
        Your source for unique home decor and furnishings that blend modern
        design with traditional Indian craftsmanship. Responsibly sourced from
        over 11,000 artisans, our products reflect authenticity, sustainability,
        and fine craftsmanship. Discover the beauty of India with Peepul Tree.
      </p>

      <p className="dog-contact">Email Us: saba@handcraft.in</p>
      <p className="dog-contact">Contact: 080-458-83674</p>

      <div className="dog-socials">
        <img src={what} alt="WhatsApp" />
        <img src={insta} alt="Instagram" />
        <img src={face} alt="Facebook" />
        <img src={you} alt="YouTube" />
        <img src={link} alt="LinkedIn" />
      </div>
    </div>

    {/* RIGHT LINKS */}
    <div className="dog-footer-links">
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

  <div className="dog-footer-bottom">
    © 2025 Karigarana | All Rights Reserved. Karigarana a wholly owned subsidiary of
    LHI TV
  </div>
</section>
</div>
</>
  );
}

export default Furnishing;
