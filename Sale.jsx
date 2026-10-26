
import { useState } from "react";
import "./sale.css";
import { useNavigate } from "react-router-dom";

/* BANNERS */
import homeLivingBanner from "./assets/home.jpg";
import bedLinenBanner from "./assets/bed.jpg";
import furnishingBanner from "./assets/fur.jpg";
import kitchenBanner from "./assets/kitchen.jpg";
import tableBanner from "./assets/table1.jpg";
import decorBanner from "./assets/decor.jpg";

/* PRODUCT IMAGES (assets folder only) */
import bedsheetImg from "./assets/bedsheet.jpg";
import quiltImg from "./assets/quilt.jpg";
import cushionImg from "./assets/cushion.jpg";
import curtainImg from "./assets/curtain.jpg";
import brassImg from "./assets/brass.jpg";
import masalaImg from "./assets/masala.jpg";
import runnerImg from "./assets/runner.jpg";
import placematImg from "./assets/placemat.jpg";
import wallartImg from "./assets/wallart.jpg";
import showpieceImg from "./assets/showpiece.jpg";
import what from "./assets/what.png";
import insta from "./assets/insta.png";
import face from "./assets/face.png";
import you from "./assets/you.png";
import link from "./assets/link.png";


/* PRODUCTS */
const PRODUCTS = [
 
  {
    id: 1,
    title: "Luxury Bedsheet Set for a Cozy & Elegant Bedroom",
    price: 1299,
    oldPrice: 1899,
    rating: 4.5,
    offer: "32% OFF",
    category: "bed-linen",
    img: bedsheetImg,
  },
  {
    id: 2,
    title: "Soft Quilted Comforter for Warm & Stylish Nights",
    price: 2299,
     rating: 4.6,
    category: "bed-linen",
    img: quiltImg,
  },

  {
    id: 3,
    title: "Beautiful Cushion Covers to Elevate Your Living Space",
    price: 799,
     rating: 3.6,
    category: "furnishing",
    img: cushionImg,
  },
  {
    id: 4,
    title: "Premium Curtain Panels for a Luxurious Home Look",
    price: 1999,
    oldPrice: 2599,
    rating: 4.3,
    offer: "Hot Deal",
    category: "furnishing",
    img: curtainImg,
  },

  {
    id: 5,
    title: "Handcrafted Brass Bowl for an Elegant Dining Experience",
    price: 999,
     rating: 4.1,
    category: "kitchen",
    img: brassImg,
  },
  {
    id: 6,
    title: "Traditional Masala Box to Add Charm to Your Kitchen",
    price: 1499,
    oldPrice: 1999,
    rating: 4.7,
    offer: "Best Seller",
    category: "kitchen",
    img: masalaImg,
  },

  {
    id: 7,
    title: "Stylish Table Runner to Enhance Your Dining Table",
    price: 699,
    rating: 4.7,
    category: "table-linen",
    img: runnerImg,
  },
  {
    id: 8,
    title: "Elegant Placemat Set for a Modern Dining Setup",
    price: 899,
    rating: 3.4,
    category: "table-linen",
    img: placematImg,
  },

  {
    id: 9,
    title: "Handcrafted Wall Art to Add Soul to Your Home Decor",
    price: 1899,
    rating: 4.6,
    category: "home-decor",
    img: wallartImg,
  },
  {
    id: 10,
    title: "Artisan Showpiece for a Sophisticated Home Ambience",
    price: 2499,
     rating: 4.6,
    category: "home-decor",
    img: showpieceImg,
  },
  {
    id: 11,
    title: "Luxury Bedsheet Set for a Cozy & Elegant Bedroom",
    price: 1299,
    oldPrice: 1899,
    rating: 4.5,
    offer: "32% OFF",
    category: "bed-linen",
    img: bedsheetImg,
  },
  {
    id: 12,
    title: "Soft Quilted Comforter for Warm & Stylish Nights",
    price: 2299,
     rating: 4.6,
    category: "bed-linen",
    img: quiltImg,
  },

  {
    id: 13,
    title: "Beautiful Cushion Covers to Elevate Your Living Space",
    price: 799,
     rating: 3.6,
    category: "furnishing",
    img: cushionImg,
  },
  {
    id:14,
    title: "Premium Curtain Panels for a Luxurious Home Look",
    price: 1999,
    oldPrice: 2599,
    rating: 4.3,
    offer: "Hot Deal",
    category: "furnishing",
    img: curtainImg,
  },

  {
    id: 15,
    title: "Handcrafted Brass Bowl for an Elegant Dining Experience",
    price: 999,
     rating: 4.1,
    category: "kitchen",
    img: brassImg,
  },
  {
    id: 16,
    title: "Traditional Masala Box to Add Charm to Your Kitchen",
    price: 1499,
    oldPrice: 1999,
    rating: 4.7,
    offer: "Best Seller",
    category: "kitchen",
    img: masalaImg,
  },

  {
    id: 17,
    title: "Stylish Table Runner to Enhance Your Dining Table",
    price: 699,
    rating: 4.7,
    category: "table-linen",
    img: runnerImg,
  },
  {
    id: 18,
    title: "Elegant Placemat Set for a Modern Dining Setup",
    price: 899,
    rating: 3.4,
    category: "table-linen",
    img: placematImg,
  },

  {
    id: 19,
    title: "Handcrafted Wall Art to Add Soul to Your Home Decor",
    price: 1899,
    rating: 4.6,
    category: "home-decor",
    img: wallartImg,
  },
  {
    id: 20,
    title: "Artisan Showpiece for a Sophisticated Home Ambience",
    price: 2499,
     rating: 4.6,
    category: "home-decor",
    img: showpieceImg,
  },
];



/* CATEGORY CONFIG */
const CATEGORY_CONFIG = {
  "home-and-living": { title: "WINTER SALE", banner: homeLivingBanner },
  "bed-linen": { title: "BED LINEN", banner: bedLinenBanner },
  furnishing: { title: "HOME FURNISHING", banner: furnishingBanner },
  kitchen: { title: "KITCHEN & SERVEWARE", banner: kitchenBanner },
  "table-linen": { title: "TABLE LINEN", banner: tableBanner },
  "home-decor": { title: "HOME DECOR", banner: decorBanner },
};

function Sale() {
  const navigate = useNavigate();
  const [activeCategory, setActiveCategory] = useState("home-and-living");
  const [price, setPrice] = useState(3000);
  const [sort, setSort] = useState("");

  let filteredProducts =
    activeCategory === "home-and-living"
      ? PRODUCTS
      : PRODUCTS.filter((p) => p.category === activeCategory);

  filteredProducts = filteredProducts.filter((p) => p.price <= price);

  if (sort === "low-high") filteredProducts.sort((a, b) => a.price - b.price);
  if (sort === "high-low") filteredProducts.sort((a, b) => b.price - a.price);

  const current = CATEGORY_CONFIG[activeCategory];

  return (
    <div className="sale-page">
      {/* BANNER */}
      <div className="sale-banner">
        <img src={current.banner} alt={current.title} />
        <div className="sale-banner-overlay">
          <h1>{current.title}</h1>
        </div>
      </div>

      {/* BREADCRUMB */}
      <div className="breadcrumb">
        <span onClick={() => navigate("/home")}>Home</span> › {current.title}
      </div>

      {/* PAGE HEADING */}
      <h2 className="page-title">{current.title}</h2>

      <div className="sale-content">
        {/* FILTER */}
        <aside className="filter-box">
          <h3>Categories</h3>
          <ul>
            <li onClick={() => setActiveCategory("bed-linen")}>Bed Linen</li>
            <li onClick={() => setActiveCategory("furnishing")}>Home Furnishing</li>
            <li onClick={() => setActiveCategory("kitchen")}>Kitchen & Serveware</li>
            <li onClick={() => setActiveCategory("table-linen")}>Table Linen</li>
            <li onClick={() => setActiveCategory("home-decor")}>Home Decor</li>
          </ul>

          <h3>Price</h3>
          <div className="price-values">
            <span>₹499</span>
            <span>₹{price}</span>
          </div>
          <input
            type="range"
            min="499"
            max="3000"
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
              <div key={item.id} className="product-card">
                <div className="offer-badge">{item.offer}</div>
                <img src={item.img} alt={item.title} />

                <h4>{item.title}</h4>

                <div className="rating">
                  ⭐ {item.rating}
                </div>

                <p className="price">
                  ₹{item.price}
                  
                </p>
              </div>
            ))}
          </div>
        </section>
      </div>
      {/* CONTENT SECTION */}
<div className="info-section">
  <h2>Elevate Your Home with Exquisite Furnishings and Décor</h2>

  <p>
    Your home is more than just a place to live — it’s a reflection of your
    personality, style, and the sanctuary where you find comfort. At{" "}
    <span className="brand">Peepul Tree</span>, we understand the importance of
    curating spaces that resonate with your essence.
  </p>

  <p>
    Our extensive collection of <span className="link">home furnishings</span>{" "}
    and <span className="link">décor items</span> is designed to transform your
    living spaces into harmonious blends of functionality and aesthetic appeal.
  </p>

  <h3>Understanding Home Furnishing</h3>

  <p>
    Home furnishing is the art of selecting and arranging furniture, textiles,
    and accessories to create a comfortable and functional living environment.
    Thoughtfully chosen pieces not only enhance your space but also improve your
    daily living experience.
  </p>

  <p className="show-more">Show More</p>
</div>

{/* FAQ SECTION */}
<div className="faq-section">
  <h2>Frequently Asked Questions</h2>

  <div className="faq-item">
    <h4>1. How do I choose the right color scheme for my home?</h4>
    <p>
      Consider the mood you want to create. Soft, neutral tones create a calming
      effect, while vibrant hues add energy to a space. Experiment with color
      swatches to find combinations that reflect your style.
    </p>
  </div>

  <div className="faq-item">
    <h4>2. What are some budget-friendly ways to update my home décor?</h4>
    <p>
      Small changes can make a big difference. Adding new cushion covers,
      refreshing table linens, or introducing indoor plants can rejuvenate your
      space without significant expenses.
    </p>
  </div>

  <div className="faq-item">
    <h4>3. How can I make a small room appear larger?</h4>
    <p>
      Use light-colored furnishings, place mirrors to reflect natural light, and
      opt for multi-functional furniture to maximize space.
    </p>
  </div>

  <p className="show-more">Show More</p>
</div>
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

export default Sale;
