
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./WriteReview.css";
import what from "./assets/what.png";
import insta from "./assets/insta.png";
import face from "./assets/face.png";
import you from "./assets/you.png";
import link from "./assets/link.png";

const WriteReview = () => {
  //  STATES (TOP LEVEL ONLY)
  const [name, setName] = useState("");
  const [rating, setRating] = useState(5);
  const [comment, setComment] = useState("");
  const [productName, setProductName] = useState("");
  const [productImage, setProductImage] = useState(null);
  const [reviewDate, setReviewDate] = useState("");
  const [dateError, setDateError] = useState("");

  //  TODAY DATE (TOP LEVEL)
  const today = new Date().toISOString().split("T")[0];

  const navigate = useNavigate();

  //  DATE CHANGE HANDLER
  const handleDateChange = (e) => {
    const selectedDate = e.target.value;

    if (selectedDate < today) {
      setDateError("Past date select nahi kar sakte");
      setReviewDate("");
    } else {
      setDateError("");
      setReviewDate(selectedDate);
    }
  };

  //  SUBMIT
  const submitReview = async (e) => {
    e.preventDefault();

    if (!reviewDate) {
      setDateError("Please select a valid date");
      return;
    }

    const formData = new FormData();
    formData.append("name", name);
    formData.append("rating", rating);
    formData.append("comment", comment);
    formData.append("productName", productName);
    formData.append("productImage", productImage);
    formData.append("reviewDate", reviewDate);

    await axios.post(
      "http://localhost:5000/api/reviews",
      formData,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    );

    navigate("/home");
  };

 return ( 
  <>
 <div className="write-review-page"> 
 <form onSubmit={submitReview}> 
  <h2>Write a Review</h2> 
  <input type="text" placeholder="Your Name" value={name} onChange={(e) => setName(e.target.value)} required /> 
  <input type="text" placeholder="Product Name" value={productName} onChange={(e) => setProductName(e.target.value)} required /> 
  <input type="file" accept="image/*" onChange={(e) => setProductImage(e.target.files[0])} required />
   <input type="date" value={reviewDate} min={today} onChange={handleDateChange} required />
    {dateError && <p className="date-error">{dateError}</p>}
     <select value={rating} onChange={(e) => setRating(e.target.value)}>
       <option value="5">★★★★★</option> 
       <option value="4">★★★★</option>
        <option value="3">★★★</option> 
        </select> <textarea placeholder="Your Review" value={comment} onChange={(e) => setComment(e.target.value)} required /> 
          <button type="submit">Submit Review</button> 
          </form> </div>
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
           }; export default WriteReview;
     