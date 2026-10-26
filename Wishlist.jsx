
import React, { useContext } from "react";
import { WishlistContext } from "./context/WishlistContext";
import { useNavigate } from "react-router-dom";
import "./favlist.css"; // CSS import
import what from "./assets/what.png";
import insta from "./assets/insta.png";
import face from "./assets/face.png";
import you from "./assets/you.png";
import link from "./assets/link.png";

function Wishlist() {
  const { wishlist } = useContext(WishlistContext);
  const navigate = useNavigate();

  return (
    <>
    <div className="favlist-container">
      <h2 className="favlist-title">My Wishlist❤️</h2>

      {wishlist.length > 0 ? (
        <div className="favlist-grid">
          {wishlist.map((p) => (
            <div className="favlist-card" key={p._id || p.id}>
              <img src={p.image} alt={p.title} className="favlist-img" />
              <h4 className="favlist-name">{p.title}</h4>
              <p className="favlist-price">₹{p.price}</p>
             <button
  className="favlist-btn"
  onClick={() =>
    navigate("/order-summary", {
      state: {
        productName: p.title || p.name,
        price: p.price,
        image: p.image || p.img,
      },
    })
  }
>
  🛒 Shop Now
</button>

            </div>
          ))}
        </div>
      ) : (
        <p className="favlist-empty">No items in wishlist ❤️</p>
      )}
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

<p onClick={() => navigate("/blog")}>
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

export default Wishlist;
