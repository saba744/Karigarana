
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./decor.css"; //  ALAG CSS
import axios from "axios";

import bannerImg from "./assets/decor.jpg";

// product images
import d1 from "./assets/d1.jpg";
import d2 from "./assets/d2.jpg";
import d3 from "./assets/d3.jpg";
import d4 from "./assets/d4.jpg";
import d5 from "./assets/d5.jpg";
import d6 from "./assets/d6.jpg";
import d7 from "./assets/d7.jpg";
import d8 from "./assets/d8.jpg";
import d9 from "./assets/d9.jpg";
import d10 from "./assets/d10.jpg";
import d11 from "./assets/d11.jpg";
import d12 from "./assets/d12.jpg";
import d13 from "./assets/d13.jpg";
import d14 from "./assets/d14.jpg";
import d15 from "./assets/d15.jpg";
import d16 from "./assets/d16.jpg";
import what from "./assets/what.png";
import insta from "./assets/insta.png";
import face from "./assets/face.png";
import you from "./assets/you.png";
import link from "./assets/link.png";

const PRODUCTS = [
  { id: 1, title: "Wall Art in Mud and Mirrors", price: 1999, category: "wall-art", img: d1 },
  { id: 2, title: "Candle Stand in Bastar Wrought Iron", price: 2744,  category: "decor-accessories", img: d2 },
  { id: 3, title: "Wicker Planter Set", price: 849, category: "planters", img: d3 },
  { id: 4, title: "Wooden Doll Ornament", price: 399, category: "figurines", img: d4 },
  { id: 5, title: "Handcrafted Wall Hanging", price: 1599,  category: "wall-art", img: d5 },
  { id: 6, title: "Decor Combo Gift Set", price: 2499, category: "combos", img: d6 },
  { id: 7, title: "Wall Art in Mud and Mirrors", price: 1999,  category: "wall-art", img: d7 },
  { id: 8, title: "Candle Stand in Bastar Wrought Iron", price: 2744, category: "decor-accessories", img: d8 },
  { id: 9, title: "Wicker Planter Set", price: 849,  category: "planters", img: d9 },
  { id: 10, title: "Wooden Doll Ornament", price: 399,  category: "figurines", img: d10 },
  { id: 11, title: "Handcrafted Wall Hanging", price: 1599, category: "wall-art", img: d11 },
  { id: 12, title: "Decor Combo Gift Set", price: 2499,  category: "combos", img: d12 },
  { id: 13, title: "Wall Art in Mud and Mirrors", price: 1999, category: "wall-art", img: d13 },
  { id: 14, title: "Candle Stand in Bastar Wrought Iron", price: 2744, category: "decor-accessories", img: d14 },
  { id: 15, title: "Wicker Planter Set", price: 849, category: "planters", img: d15 },
  { id: 16, title: "Wooden Doll Ornament", price: 399, category: "figurines", img: d16 },

];

function Decor() {
  const location = useLocation();
  const navigate = useNavigate();

  const [category, setCategory] = useState("all");
  const [price, setPrice] = useState(4000);
  const [sort, setSort] = useState("");
 const [adminDecor, setAdminDecor] = useState([]);


  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const cat = params.get("cat");
    if (cat) setCategory(cat);
  }, [location.search]);
 const allProducts = [
    ...PRODUCTS.map(p => ({ ...p, image: p.img })), // static
    ...adminDecor, // admin
  ];


useEffect(() => {
  axios
    .get("http://localhost:5000/api/decor-products")
    .then(res => setAdminDecor(res.data));
}, []);


  let filteredProducts = allProducts.filter((item) => {

    if (category !== "all" && item.category !== category) return false;
    if (item.price > price) return false;
    return true;
  });

  if (sort === "low-high") filteredProducts.sort((a, b) => a.price - b.price);
  if (sort === "high-low") filteredProducts.sort((a, b) => b.price - a.price);

 
    

  return (
    <div className="decor-page">

      {/* 🔴 BANNER */}
      <div className="decor-banner">
        <img src={bannerImg} alt="Home Decor" />
        <div className="decor-banner-overlay">
          <h1 className="decor-banner-title">Home Decor</h1>
        </div>
      </div>

      {/* BREADCRUMB */}
      <div className="decor-breadcrumb">
        <span className="decor-home" onClick={() => navigate("/home")}>Home</span>
        &nbsp;›&nbsp; Home Decor
      </div>

      <h2 className="decor-page-title">HOME DECOR</h2>

      <div className="decor-content">

        {/* FILTER */}
        <aside className="decor-filter">
          <h3>Categories</h3>
          <ul>
            <li onClick={() => setCategory("all")}>All</li>
            <li onClick={() => setCategory("wall-art")}>Wall Art</li>
            <li onClick={() => setCategory("decor-accessories")}>Decor Accessories</li>
            <li onClick={() => setCategory("planters")}>Planters</li>
            <li onClick={() => setCategory("figurines")}>Figurines</li>
            <li onClick={() => setCategory("combos")}>Combos</li>
          </ul>

          <h3>Price</h3>
          <div className="decor-price">
            <span>₹399</span>
            <span>₹{price}</span>
          </div>

          <input
            type="range"
            min="399"
            max="4000"
            value={price}
            onChange={(e) => setPrice(Number(e.target.value))}
          />
        </aside>

        {/* PRODUCTS */}
        <section className="decor-products">
          <div className="decor-sort">
            <select onChange={(e) => setSort(e.target.value)}>
              <option value="">Sort by</option>
              <option value="low-high">Price: Low to High</option>
              <option value="high-low">Price: High to Low</option>
            </select>
          </div>

         <div className="decor-grid">
 {filteredProducts.map((item) => (
  <div
    className="dog-product-card"
    key={item._id || item.id}
    onClick={() =>
      navigate("/order-summary", {
        state: {
          productName: item.title,
          price: item.price,
          image: item.image,
          category: item.category,
        },
      })
    }
  >
   <img
  src={
    item.image?.startsWith("/uploads")
      ? `http://localhost:5000${item.image}` // admin product
      : item.image 
                                 // static product
  }
  alt={item.title}
/>



    <h4>{item.title}</h4>
    <p>₹{item.price}</p>
  </div>
))}

</div>

        
        </section>
      </div>
      {/* HOME DECOR INFO SECTION */}
<section className="decor-info-section">
  <div className="decor-info-box">
    <h2>
      Handcrafted Home Decor Gifts That Add Soul to Modern Indian Homes
    </h2>

    <p>
      There’s something quietly magical about a home that feels lived in, not
      just designed. The best home decor gifts aren’t necessarily the expensive
      ones. They’re the ones that carry a story.
    </p>

    <p>
      A brass lamp that reminds someone of their grandmother’s house. A
      handwoven cushion that smells faintly of new cotton. Or a little Lippan
      mirror that catches the afternoon sun just right.
    </p>

    <p>
      Those are the pieces that stay. They travel through homes, from one story
      to another. And if you’ve been wondering what kind of gifts truly make a
      space feel personal, here’s a guide to a few handcrafted favourites that
      don’t just fill corners but fill silence with warmth.
    </p>

    <h3>Why Handcrafted Decor Gifts Feel So Different…</h3>

    <span className="decor-show-more">Show More</span>
  </div>

  {/* FAQ SECTION */}
  <div className="decor-faq-box">
    <h3>Frequently Asked Questions</h3>

    <div className="decor-faq-item">
      <strong>
        1) What is the best way to take care of home decor?
      </strong>
      <p>
        For fabric items, just wash them gently in cold water with a mild
        detergent and dry them in the shade. Wooden decor doesn’t like harsh
        cleaners — a little soft, soapy water and a cotton cloth works best.
      </p>
    </div>

    <div className="decor-faq-item">
      <strong>
        2) Why should I buy home decor from Peepul Tree?
      </strong>
      <p>
        Peepul Tree brings together traditional home decor made by skilled
        Indian artisans. Every piece stays true to its craft, its materials,
        and the region it comes from and carries the stories of the people who
        made it.
      </p>
    </div>

    <span className="decor-show-more">Show More</span>
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

export default Decor;
