
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./table.css";

import bannerImg from "./assets/table1.jpg";

import t1 from "./assets/t1.jpg";
import t2 from "./assets/t2.jpg";
import t3 from "./assets/t3.jpg";
import t4 from "./assets/t4.jpg";
import t5 from "./assets/t5.jpg";
import t6 from "./assets/t6.jpg";
import t7 from "./assets/t7.jpg";
import t8 from "./assets/t8.jpg";
import t9 from "./assets/t9.jpg";
import t10 from "./assets/t10.jpg";
import t11 from "./assets/t11.jpg";
import t12 from "./assets/t12.jpg";
import t13 from "./assets/t13.jpg";
import t14 from "./assets/t14.jpg";
import what from "./assets/what.png";
import insta from "./assets/insta.png";
import face from "./assets/face.png";
import you from "./assets/you.png";
import link from "./assets/link.png";



const PRODUCTS = [
  { id: 1, title: "Table Mats Set of 4", price: 699, oldPrice: 1299, category: "mats", img: t1 },
  { id: 2, title: "Handmade Table Runner", price: 499, oldPrice: 999, category: "runners", img: t2 },
  { id: 3, title: "Cotton Table Cloth", price: 449, oldPrice: 786, category: "cloth", img: t3 },
  { id: 4, title: "Dining Table Mats", price: 649, oldPrice: 1499, category: "mats", img: t4 },
  { id: 5, title: "Blue Table Runner", price: 899, oldPrice: 1599, category: "runners", img: t5 },
  { id: 6, title: "Table Linen Combo", price: 1299, oldPrice: 2599, category: "combos", img: t6 },
  { id: 7, title: "Table Mats Set of 4", price: 699, oldPrice: 1299, category: "mats", img: t7 },
  { id: 8, title: "Handmade Table Runner", price: 499, oldPrice: 999, category: "runners", img: t8 },
  { id: 9, title: "Cotton Table Cloth", price: 449, oldPrice: 786, category: "cloth", img: t9 },
  { id: 10, title: "Dining Table Mats", price: 649, oldPrice: 1499, category: "mats", img: t10 },
  { id: 11, title: "Blue Table Runner", price: 899, oldPrice: 1599, category: "runners", img: t11 },
  { id: 12, title: "Table Linen Combo", price: 1299, oldPrice: 2599, category: "combos", img: t12 },
  { id: 13, title: "Cotton Table Cloth", price: 449, oldPrice: 786, category: "cloth", img: t9 },
  { id: 14, title: "Dining Table Mats", price: 649, oldPrice: 1499, category: "mats", img: t10 },
  { id: 15, title: "Blue Table Runner", price: 899, oldPrice: 1599, category: "runners", img: t11 },
  { id: 16, title: "Table Linen Combo", price: 1299, oldPrice: 2599, category: "combos", img: t12 },
  { id: 17, title: "Cotton Table Cloth", price: 449, oldPrice: 786, category: "cloth", img: t13 },
  { id: 18, title: "Dining Table Mats", price: 649, oldPrice: 1499, category: "mats", img: t14 },
  { id: 19, title: "Blue Table Runner", price: 899, oldPrice: 1599, category: "runners", img: t1 },
  { id: 20, title: "Table Linen Combo", price: 1299, oldPrice: 2599, category: "combos", img: t2 },
];

function Table() {
  const location = useLocation();
  const navigate = useNavigate();

  const [category, setCategory] = useState("all");
  const [price, setPrice] = useState(4000);
  const [sort, setSort] = useState("");

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const cat = params.get("cat");
    if (cat) setCategory(cat);
  }, [location.search]);

  let filteredProducts = PRODUCTS.filter((item) => {
    if (category !== "all" && item.category !== category) return false;
    if (item.price > price) return false;
    return true;
  });

  if (sort === "low-high") filteredProducts.sort((a, b) => a.price - b.price);
  if (sort === "high-low") filteredProducts.sort((a, b) => b.price - a.price);

  return (
    <div className="table-page">

      {/* BANNER */}
      <div className="table-banner">
        <img src={bannerImg} alt="Table Linen" />

        <div className="tablelinen-banner-overlay">
          <h1 className="tablelinen-banner-title">Table Linen</h1>
        </div>
      </div>

      {/* BREADCRUMB */}
      <div className="breadcrumb">
        <span className="breadcrumb-home" onClick={() => navigate("/home")}>
          Home
        </span>
        &nbsp;›&nbsp;
        <span>Table Linen</span>
      </div>

      <h2 className="page-title">TABLE LINEN</h2>

      <div className="table-content">
        {/* FILTERS */}
        <aside className="filter-box">
          <h3>Categories</h3>
          <ul>
            <li onClick={() => setCategory("all")}>All</li>
            <li onClick={() => setCategory("mats")}>Table Mats</li>
            <li onClick={() => setCategory("runners")}>Table Runners</li>
            <li onClick={() => setCategory("cloth")}>Table Cloth</li>
            <li onClick={() => setCategory("combos")}>Combos</li>
          </ul>

          <h3>Price</h3>
          <div className="price-values">
            <span>₹499</span>
            <span>₹{price}</span>
          </div>

          <input
            type="range"
            min="499"
            max="4000"
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
    }
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

export default Table;
