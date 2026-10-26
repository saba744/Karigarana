
import { useState, useEffect, } from "react";

import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";

import "./bed.css";

/* HERO IMAGE */


/* PRODUCT IMAGES */
import bed1 from "./assets/linen1.jpg";
import bed2 from "./assets/linen2.jpg";
import bed3 from "./assets/linen3.jpg";
import bed4 from "./assets/linen4.jpg";
import bed12 from "./assets/linen5.jpg";
import bed5 from "./assets/linen6.jpg";
import bed6 from "./assets/linen7.jpg";
import bed7 from "./assets/linen8.jpg";
import bed8 from "./assets/linen9.jpg";
import bed9 from "./assets/linen10.jpg";
import bed10 from "./assets/linen11.jpg";
import bed11 from "./assets/linen1.jpg";
import what from "./assets/what.png";
import insta from "./assets/insta.png";
import face from "./assets/face.png";
import you from "./assets/you.png";
import link from "./assets/link.png";

const productsData = [
  {
    id: 1,
    name: "Pure Cotton Handmand badsheet for comfarting your peace",
    category: "Bedsheets",
    price: 1291,
    originalPrice: 2999,
    discount: "56% OFF",
    rating: 4.5,
    reviews: 5,
    badge: "",
    image: bed1
  },
  {
    id: 2,
    name: "Pure Cotton Quilt / Comforter",
    category: "Bedsheets",
    price: 2499,
    originalPrice: 4373,
    discount: "42% OFF",
    rating: 4.2,
    reviews: 8,
    badge: "",
    image: bed2
  },
  {
    id: 3,
    name: "Handwoven Premium Bed Cover",
    category: "Bedsheets",
    price: 1999,
    originalPrice: 3499,
    discount: "42% OFF",
    rating: 4.0,
    reviews: 6,
    badge: "",
    image: bed3
  },
  {
    id: 4,
    name: "Pure Cotton Hand & Bath Towel Set",
    category: "Bedsheets",
    price: 4799,
    originalPrice: 9599,
    discount: "50% OFF",
    rating: 4.6,
    reviews: 11,
    badge: "",
    image: bed4
  },

   {
    id: 5,
    name: "Pure Cotton Quilt / Comforter",
    category: "Bedsheets",
    price: 4799,
    originalPrice: 9599,
    discount: "50% OFF",
    rating: 4.6,
    reviews: 11,
    badge: "",
    image: bed5
  },
   {
    id: 6,
    name: "Pure Cotton Hand & made bed sheet",
    category: "Bedsheets",
    price: 4799,
    originalPrice: 9599,
    discount: "50% OFF",
    rating: 4.6,
    reviews: 11,
    badge: "",
    image: bed6
  },
   {
    id: 7,
    name: "Pure Cotton Quilt / Comforter",
    category: "Bedsheets",
    price: 4799,
    originalPrice: 9599,
    discount: "50% OFF",
    rating: 4.6,
    reviews: 11,
    badge: "",
    image: bed7
  },
   {
    id: 8,
    name: "Pure Cotton Handmand badsheet for comfarting your peace",
    category: "Bedsheets",
    price: 4799,
    originalPrice: 9599,
    discount: "50% OFF",
    rating: 4.6,
    reviews: 11,
    badge: "",
    image: bed8
  },
   {
    id: 9,
    name: "Pure Cotton Hand & Bath Towel Set",
    category: "Bedsheets",
    price: 4799,
    originalPrice: 9599,
    discount: "50% OFF",
    rating: 4.6,
    reviews: 11,
    badge: "",
    image: bed9
  },
   {
    id: 10,
    name: "Pure Cotton Hand & Bath Towel Set",
    category: "Bedsheets",
    price: 4799,
    originalPrice: 9599,
    discount: "50% OFF",
    rating: 4.6,
    reviews: 11,
    badge: "",
    image: bed10
  },
   {
    id: 11,
    name: "Pure Cotton Hand & Bath Towel Set",
    category: "Bedsheets",
    price: 4799,
    originalPrice: 9599,
    discount: "50% OFF",
    rating: 4.6,
    reviews: 11,
    badge: "",
    image: bed11
  },
   {
    id: 12,
    name: "Pure Cotton Hand & Bath Towel Set",
    category: "Bedsheets",
    price: 1430,
    originalPrice: 9599,
    discount: "50% OFF",
    rating: 4.6,
    reviews: 11,
    badge: "",
    image: bed12
  },
   {
    id: 13,
    name: "Pure Cotton Hand & Bath Towel Set",
    category: "Bedsheets",
    price: 1300,
    originalPrice: 9599,
    discount: "50% OFF",
    rating: 4.6,
    reviews: 11,
    badge: "",
    image: bed1
  },
   {
    id: 14,
    name: "Pure Cotton Hand & Bath Towel Set",
    category: "Bedsheets",
    price: 1250,
    originalPrice: 9599,
    discount: "50% OFF",
    rating: 4.6,
    reviews: 11,
    badge: "",
    image: bed2
  },

   {
    id: 15,
    name: "Pure Cotton Hand & Bath Towel Set",
    category: "Quilts & Comforters",
    price: 1200,
    originalPrice: 9599,
    discount: "50% OFF",
    rating: 4.6,
    reviews: 11,
    badge: "",
    image: bed3
  },

   {
    id: 16,
    name: "Pure Cotton Hand & Bath Towel Set",
    category: "Quilts & Comforters",
    price: 900,
    originalPrice: 9599,
    discount: "50% OFF",
    rating: 4.6,
    reviews: 11,
    badge: "",
    image: bed4
  },

   {
    id: 17,
    name: "Pure Cotton Hand & Bath Towel Set",
    category: "Quilts & Comforters",
    price: 2000,
    originalPrice: 9599,
    discount: "50% OFF",
    rating: 4.6,
    reviews: 11,
    badge: "",
    image: bed5
  },

   {
    id: 18,
    name: "Pure Cotton Hand & Bath Towel Set",
    category: "Quilts & Comforters",
    price: 1000,
    originalPrice: 9599,
    discount: "50% OFF",
    rating: 4.6,
    reviews: 11,
    badge: "",
    image: bed6
  },

   {
    id: 19,
    name: "Pure Cotton Hand & Bath Towel Set",
    category: "Quilts & Comforters",
    price: 900,
    originalPrice: 9599,
    discount: "50% OFF",
    rating: 4.6,
    reviews: 11,
    badge: "",
    image: bed7
  },

   {
    id: 20,
    name: "Pure Cotton Hand & Bath Towel Set",
    category: "Quilts & Comforters",
    price: 4799,
    originalPrice: 9599,
    discount: "50% OFF",
    rating: 4.6,
    reviews: 11,
    badge: "",
    image: bed8
  },

   {
    id: 21,
    name: "Pure Cotton Hand & Bath Towel Set",
    category: "Quilts & Comforters",
    price: 4799,
    originalPrice: 9599,
    discount: "50% OFF",
    rating: 4.6,
    reviews: 11,
    badge: "",
    image: bed9
  },

   {
    id: 22,
    name: "Pure Cotton Hand & Bath Towel Set",
    category: "Quilts & Comforters",
    price: 2799,
    originalPrice: 9599,
    discount: "50% OFF",
    rating: 4.6,
    reviews: 11,
    badge: "",
    image: bed10
  },

   {
    id: 23,
    name: "Pure Cotton Hand & Bath Towel Set",
    category: "Quilts & Comforters",
    price: 1799,
    originalPrice: 3599,
    discount: "50% OFF",
    rating: 4.6,
    reviews: 11,
    badge: "",
    image: bed11
  },
 {
    id: 24,
    name: "Pure Cotton Hand & Bath Towel Set",
    category: "Quilts & Comforters",
    price: 2799,
    originalPrice: 7599,
    discount: "50% OFF",
    rating: 4.6,
    reviews: 11,
    badge: "",
    image: bed12
  },

   {
    id: 25,
    name: "Pure Cotton Hand & Bath Towel Set",
    category: "Quilts & Comforters",
    price: 3799,
    originalPrice: 8599,
    discount: "50% OFF",
    rating: 4.6,
    reviews: 11,
    badge: "",
    image: bed1
  },
  {
    id: 26,
    name: "Pure Cotton Hand & Bath Towel Set",
    category: "Quilts & Comforters",
    price: 3799,
    originalPrice: 8599,
    discount: "50% OFF",
    rating: 4.6,
    reviews: 11,
    badge: "",
    image: bed4
  },
  {
    id: 27,
    name: "Pure Cotton Hand & Bath Towel Set",
    category: "Quilts & Comforters",
    price: 3799,
    originalPrice: 8599,
    discount: "50% OFF",
    rating: 4.6,
    reviews: 11,
    badge: "",
    image: bed8
  },
  {
    id: 28,
    name: "Pure Cotton Hand & Bath Towel Set",
    category: "Quilts & Comforters",
    price: 3799,
    originalPrice: 8599,
    discount: "50% OFF",
    rating: 4.6,
    reviews: 11,
    badge: "",
    image: bed11
  },


];

function Bed() {
  const navigate = useNavigate();
  const [products, setProducts] = useState(productsData);
  const [price, setPrice] = useState(5000);
  const location = useLocation();


  /* CATEGORY FILTER */
  const filterCategory = (cat) => {
    setProducts(productsData.filter(p => p.category === cat));
  };

  /* SORT */
  const handleSort = (value) => {
    let sorted = [...products];
    if (value === "low-high") sorted.sort((a, b) => a.price - b.price);
    if (value === "high-low") sorted.sort((a, b) => b.price - a.price);
    setProducts(sorted);
  };

  /* PRICE FILTER */
  const handlePrice = (e) => {
    const value = Number(e.target.value);
    setPrice(value);
    setProducts(productsData.filter(p => p.price >= 900 && p.price <= value));
  };

  /* STAR RENDER */
  const renderStars = (rating) => {
    const full = Math.floor(rating);
    const half = rating % 1 !== 0;
    return (
      <>
        {"★".repeat(full)}
        {half && "½"}
      </>
    );
  };
useEffect(() => {
  const params = new URLSearchParams(location.search);
  const cat = params.get("cat");

  if (cat) {
    const decodedCat = decodeURIComponent(cat);

    setProducts(
      productsData.filter(
        (p) => p.category === decodedCat
      )
    );
  }
}, [location.search]);




 return (
  <>
   
      <div className="cat-page">

        {/* HERO */}
        <div className="cat-hero">
          <h1>Bed Linen</h1>
        </div>

        {/* BREADCRUMB */}
        <div className="cat-breadcrumb">
          <span className="cat-crumb" onClick={() => navigate("/home")}>Home</span>
          <span> › Bed Linen</span>
        </div>

        <div className="cat-layout">

          {/* LEFT FILTER */}
          <aside className="cat-filters">
            <h4>Categories</h4>
            <p onClick={() => filterCategory("Bedsheets")}>Bedsheets</p>
            <p onClick={() => filterCategory("Quilts & Comforters")}>
              Quilts & Comforters
            </p>

            <h4>Price</h4>
            <div className="cat-price-values">
              <span>₹900</span>
              <span>₹{price}</span>
            </div>

            <input
              type="range"
              min="900"
              max="5000"
              value={price}
              onChange={handlePrice}
            />
          </aside>

          {/* RIGHT */}
          <div className="cat-product-section">

            <div className="cat-sort">
              <select onChange={(e) => handleSort(e.target.value)}>
                <option value="">Sort By</option>
                <option value="low-high">Price: Low to High</option>
                <option value="high-low">Price: High to Low</option>
              </select>
            </div>

            <div className="cat-product-grid">
              {products.map(item => (
                <div
  className="cat-product-card"
  key={item.id}
  onClick={() => navigate("/order-summary", { state: item })}
>


                  <img src={item.image} alt={item.name} />

                  <h5>{item.name}</h5>

                  <div className="cat-rating">
                    <span className="cat-stars">{renderStars(item.rating)}</span>
                    <span className="cat-reviews">({item.reviews})</span>
                  </div>

                  <div className="cat-price-box">
                    <span className="cat-price">₹{item.price}</span>
                    <span className="cat-original">₹{item.originalPrice}</span>
                    <span className="cat-discount">{item.discount}</span>
                  </div>

                </div>
              ))}
            </div>
                 <section className="cat-info">
  <div className="cat-info-box">
    <h2>Elevate Your Living Space with Exquisite Bed Linen</h2>

    <p>
      A well-curated home is more than just furniture and decor — it’s a sanctuary
      of comfort and style. At the heart of this sanctuary lies the quality of your
      bed linen. From the softness of your bed sheets to the elegance of your bed
      covers, each piece plays a pivotal role in creating an inviting ambiance.
    </p>

    <p>
      In this guide, we explore essential home linen products — including bed linen,
      bed sets, bedding, bed sheets, and bed covers — while introducing you to
      handcrafted collections designed with sustainability and timeless aesthetics
      in mind.
    </p>

    <h3>Understanding Bed Linen Essentials</h3>

    <p>
      Home linen refers to a wide range of textile products designed to enhance both
      comfort and aesthetics. Key components include premium bed sheets, duvet
      covers, comforters, and pillow covers that together elevate your sleeping
      experience.
    </p>

    <button className="cat-show-more">Show More</button>
  </div>

  <div className="cat-faq-box">
    <h3>Frequently Asked Questions (FAQs)</h3>

    <div className="cat-faq-item">
      <strong>1. What is the Difference Between a Duvet and a Comforter?</strong>
      <p>
        A duvet is a soft, flat bag filled with down or synthetic fibers, usually used
        with a removable cover. A comforter is a quilted blanket designed to be used
        without a cover.
      </p>
    </div>

    <div className="cat-faq-item">
      <strong>2. What are the Benefits of Linen Fabric for Bedding?</strong>
      <p>
        Linen is breathable, moisture-wicking, and becomes softer with each wash,
        making it ideal for comfortable and long-lasting bedding.
      </p>
    </div>

    <div className="cat-faq-item">
      <strong>3. How Do I Prevent My Bed Sheets from Pilling?</strong>
      <p>
        Wash sheets on a gentle cycle, avoid harsh detergents, and dry on low heat.
        Washing inside out also helps reduce friction.
      </p>
    </div>

    <button className="cat-show-more">Show More</button>
  </div>
</section>

<section className="cat-footer">
  <div className="cat-footer-container">
    {/* LEFT */}
    <div className="cat-footer-about">
      <h2 className="cat-logo">
        Karigarana <span></span>
      </h2>
      <p className="cat-tagline">Infinite India. Handcrafted.</p>

      <p className="cat-about-text">
        Your source for unique home decor and furnishings that blend modern
        design with traditional Indian craftsmanship. Responsibly sourced from
        over 11,000 artisans, our products reflect authenticity, sustainability,
        and fine craftsmanship. Discover the beauty of India with Peepul Tree.
      </p>

      <p className="cat-contact">Email Us: saba@handcraft.in</p>
      <p className="cat-contact">Contact: 080-458-83674</p>

      <div className="cat-socials">
        <img src={what} alt="WhatsApp" />
        <img src={insta} alt="Instagram" />
        <img src={face} alt="Facebook" />
        <img src={you} alt="YouTube" />
        <img src={link} alt="LinkedIn" />
      </div>
    </div>

    {/* RIGHT LINKS */}
    <div className="cat-footer-links">
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

  <div className="cat-footer-bottom">
    © 2025 Karigarana | All Rights Reserved. Karigarana a wholly owned subsidiary of
    LHI TV
  </div>
</section>

           
          </div>
        </div>
      </div>
    
</>


  );
}

export default Bed;
