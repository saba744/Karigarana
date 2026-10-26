//cart se  jo apge khul rha hai wo hai
import React, { useEffect, useState } from "react";
import "./checkout.css";

import delivery from "./assets/delivery.jpg";
import handmade from "./assets/handmade.jpg";
import cod from "./assets/cod.jpg";
import returns from "./assets/returns.jpg";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";


const Checkout = () => {
  // ================= STATES =================
  const [items, setItems] = useState([]);
  const [payment, setPayment] = useState("online");
  const [showModal, setShowModal] = useState(false);
  const [cardType, setCardType] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  const location = useLocation();
  const navigate = useNavigate();


  // CUSTOMER DETAILS
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [country, setCountry] = useState("India");

  const [phone, setPhone] = useState("");
  const [zip, setZip] = useState("");
  const [city, setCity] = useState("");
  const [address, setAddress] = useState("");
  const [landmark, setLandmark] = useState("");
  // ================= VALIDATIONS =================
const isValidEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

const isValidPhone = (phone) => {
  const phoneRegex = /^[0-9]{10}$/; // exactly 10 digits
  return phoneRegex.test(phone);
};
const resetCheckoutForm = () => {
  // customer details
  setEmail("");
  setFirstName("");
  setLastName("");
  setPhone("");
  setZip("");
  setCity("");
  setAddress("");
  setLandmark("");
  setCountry("India");

  // payment reset
  setPayment("online");
  setCardType("");
  setCardNumber("");
  setShowModal(false);

  //OPTIONAL: cart bhi clear karna ho to
  //setItems([]);
};



  // ================= FETCH CART =================
useEffect(() => {
  if (location.state?.buyNowItem) {
    setItems([location.state.buyNowItem]); // sirf Buy Now wala product
  } else {
    fetch("http://localhost:5000/api/cart")
      .then((res) => res.json())
      .then((data) => setItems(data))
      .catch((err) => console.log(err));
  }
}, [location.state]);


  const totalAmount = items.reduce(
    (sum, item) => sum + item.price * item.qty,
    0
  );

  // ================= PLACE ORDER =================
const placeOrder = async () => {
  const cleanCardNumber = cardNumber.replace(/\s+/g, "");

  // REQUIRED FIELDS
  if (!email || !firstName || !phone || !address) {
    alert("Please fill all required fields");
    return;
  }

  if (!isValidEmail(email)) {
    alert("Please enter a valid email address (example@gmail.com)");
    return;
  }

  if (!isValidPhone(phone)) {
    alert("Phone number must be exactly 10 digits");
    return;
  }

  // ONLINE PAYMENT VALIDATION
  if (
    payment === "online" &&
    (!cardType || !/^[0-9]{10,19}$/.test(cleanCardNumber))
  ) {
    alert("Please enter valid card details");
    return;
  }

  const orderData = {
    customer: {
      email,
      firstName,
      lastName,
      phone,
      city,
      zip,
      address,
      landmark,
      country,
    },

    items: items.map((item) => ({
      productId: item._id,
      title: item.title,
      image: item.image,
      price: item.price,
      qty: item.qty,
      size: item.size,
      color: item.color,
    })),

    payment: {
      method: payment,
      cardType: payment === "online" ? cardType : null,
      cardLast4:
        payment === "online" ? cleanCardNumber.slice(-4) : null,
    },

    totalAmount,
  };

  const res = await fetch("http://localhost:5000/api/order/place", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(orderData),
  });

 //const data = await res.json();
//alert(data.message);

if (res.ok) {
    resetCheckoutForm();
    navigate("/order-success");
}

};


  return (
    <div className="checkout-page">
      {/* ===== HEADER ===== */}
      <div className="checkout-header-top">
        <h1 className="checkout-brand-logo">
          <span className="peepul">Karigaran🌾</span>
        </h1>

        <div className="checkout-top-marquee">
          <div className="checkout-marquee-track">
            <span>
              Free Delivery Across India • Secured Payment • 100% Handcrafted
            </span>
          </div>
        </div>
      </div>

      {/* ===== CONTENT ===== */}
      <div className="checkout-container">
        {/* ================= LEFT ================= */}
        <div className="checkout-left">
          <div className="checkout-card">
            <h3>Contact</h3>
            <input
              type="email"
              placeholder="Email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="checkout-card">
            <h3>Shipping Details</h3>

            <div className="checkout-row">
              <input
                placeholder="First Name"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
              />
              <input
                placeholder="Last Name"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
              />
            </div>

     <div className="checkout-row">
  <select
    className="checkout-input"
    value={country}
    onChange={(e) => setCountry(e.target.value)}
  >
    <option value="India">India </option>
    <option value="United States">United States</option>
    <option value="United Kingdom">United Kingdom</option>
    <option value="Canada">Canada</option>
    <option value="Australia">Australia</option>
  </select>
</div>

            <div className="checkout-row">
              <input
                placeholder="Phone Number"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
              <input
                placeholder="Zip Code"
                value={zip}
                onChange={(e) => setZip(e.target.value)}
              />
            </div>

            <input
              placeholder="City"
              value={city}
              onChange={(e) => setCity(e.target.value)}
            />

            <input
              placeholder="Flat / Apartment / Floor"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
            />

            <input
              placeholder="Landmark"
              value={landmark}
              onChange={(e) => setLandmark(e.target.value)}
            />
          </div>

          {/* PAYMENT METHODS */}
          <div className="checkout-card">
            <h3>Payment Methods</h3>

            <div
              className={`pm-option ${payment === "online" ? "active" : ""}`}
              onClick={() => {
                setPayment("online");
                setShowModal(true);
              }}
            >
               <div className="pm-left">
      <span className={`pm-radio ${payment === "online" ? "checked" : ""}`} />
      <span className="pm-title">Pay Online</span>
    </div>

            </div>

            <div
              className={`pm-option ${payment === "cod" ? "active" : ""}`}
              onClick={() => {
                setPayment("cod");
                setShowModal(false);
              }}
            >
               <div className="pm-left">
      <span className={`pm-radio ${payment === "cod" ? "checked" : ""}`} />
      <span className="pm-title">Cash on Delivery</span>
    </div>

            </div>
          </div>

     <button
  className="checkout-place-order"
  onClick={() => {
    if (payment === "cod") {
      placeOrder();
    } else {
      setShowModal(true);
    }
  }}
>
  PLACE ORDER
</button>


        </div>

        {/* ================= RIGHT ================= */}
      <div className="checkout-right">
          <div className="checkout-summary-card beige">
            <h3>Order Summary</h3>

            {items.map((item) => (
              <div key={item._id} className="checkout-summary-product">
                <img src={item.image} alt={item.title} />

                <div className="checkout-summary-info">
                  <p className="title">{item.title}</p>
                  <small>Qty: {item.qty}</small>
                  {item.size && <small>Size: {item.size}</small>}
                  {item.color && <small>Color: {item.color}</small>}
                </div>

                <div className="checkout-summary-price">
                  ₹{item.price * item.qty}
                </div>
              </div>
            ))}

            <hr />

            <div className="checkout-payment-summary">
              <div className="checkout-row-between">
                <span>Items ({items.length})</span>
                <span>₹{totalAmount}</span>
              </div>

              <div className="checkout-row-between">
                <span>Shipping Charges</span>
                <span className="green">Free</span>
              </div>
            </div>

            <hr />

            <div className="checkout-order-total">
              <span>Order Total</span>
              <span>₹{totalAmount}</span>
            </div>

            <p className="checkout-secure">🔒 100% Secured by PayU</p>

            <div className="checkout-summary-features">
              <div>
                <img src={returns} alt="" />
                Easy Returns
              </div>
              <div>
                <img src={handmade} alt="" />
                100% Handcrafted
              </div>
              <div>
                <img src={cod} alt="" />
                COD Available
              </div>
              <div>
                <img src={delivery} alt="" />
                Made in India
              </div>
            </div>
          </div>
        </div>

      {/* ================= CARD MODAL ================= */}
            {showModal && (
  <div className="pm-modal-overlay">
    <div className="pm-modal">
      <h4>Select Card Type</h4>

      <div
        className={`pm-card-type ${cardType === "debit" ? "active" : ""}`}
        onClick={() => setCardType("debit")}
      >
      

 Debit Card
      </div>

      <div
        className={`pm-card-type ${cardType === "credit" ? "active" : ""}`}
        onClick={() => setCardType("credit")}
      >
       

 Credit Card
      </div>

      {/* DEBIT CARD FORM */}
{cardType === "debit" && (
  <div className="pm-card-form">
    <h5>Debit Card Details</h5>

    <input
      placeholder="Debit Card Number"
      value={cardNumber}
      onChange={(e) => setCardNumber(e.target.value)}
    />

    <input placeholder="Card Holder Name" />

    <div className="pm-row">
      <input placeholder="MM/YY" />
      <input placeholder="CVV" />
    </div>
  </div>
)}


{cardType === "credit" && (
  <div className="pm-card-form">
    <h5>Credit Card Details</h5>

    <input
      placeholder="Credit Card Number"
      value={cardNumber}
      onChange={(e) => setCardNumber(e.target.value)}
    />

    <input placeholder="Card Holder Name" />

    <div className="pm-row">
      <input placeholder="MM/YY" />
      <input placeholder="CVV" />
    </div>
  </div>
)}


      

      <div className="pm-modal-actions">
        <button onClick={() => setShowModal(false)}>Cancel</button>
    <button
  className="confirm"
  onClick={() => {
    setShowModal(false);
    placeOrder();
  }}
>
  Pay & Order
</button>

          </div>
        </div>
        </div>
      )}
    </div>
    </div>
  );
};

export default Checkout;
