
import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import "./OrderSummary.css";

function OrderSummary() {
  const { state } = useLocation();

  const [payment, setPayment] = useState("");
  const [showCardForm, setShowCardForm] = useState(false);
  const [qty, setQty] = useState(1);
const basePrice = state.price;
const totalPrice = basePrice * qty;


  const [card, setCard] = useState({
    number: "",
    name: "",
    expiry: "",
    cvv: "",
  });

  if (!state) return <h2>No product selected</h2>;

  // 🔥 UNIVERSAL PRODUCT NAME FIX
  const productName = state.productName || state.name || state.title;

  // ================= SAVE ORDER =================
const saveOrder = async (mode) => {
  const orderData = {
    productName: productName,
    price: basePrice,
    quantity: qty,
    totalPrice: totalPrice,
    image: state.image,
    paymentMode: mode,
  };

  await fetch("http://localhost:5000/api/purchase/create", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(orderData),
  });

  alert("Order Placed Successfully ❤️");
};


  // ================= CONFIRM =================
  const confirmOrder = () => {
    if (!payment) {
      alert("Please select payment method");
      return;
    }

    if (payment === "cod") {
      saveOrder("cod");
      return;
    }

    if (payment === "debit" || payment === "credit") {
      if (!card.number || !card.name || !card.expiry || !card.cvv) {
        alert("Please fill all card details");
        return;
      }
      saveOrder(payment);
    }
  };

  // ================= CASHFREE =================
  const startCashfreePayment = async () => {
    const res = await fetch(
      "http://localhost:5000/api/purchase/create-payment",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ amount: state.price }),
      }
    );

    const data = await res.json();

    const cashfree = window.Cashfree({
      mode: "sandbox",
    });

    cashfree
      .checkout({
        paymentSessionId: data.payment_session_id,
        redirectTarget: "_modal",
      })
      .then(() => {
        saveOrder("cashfree");
        alert("Payment Successful ❤️");
      });
  };

  return (
    
    <div className="free">
      <h2>Order Summary</h2>

      <img src={state.image} alt={productName} width="200" />
      <h3>{productName}</h3>
      <p>Price: ₹{totalPrice}</p>

<div className="bluk-qty-box">
  <button
    className="bluk-qty-circle"
    onClick={() => qty > 1 && setQty(qty - 1)}
  >
    −
  </button>

 <div className="bluk-qty-count-circle">
  {qty}
</div>


  <button
    className="bluk-qty-circle"
    onClick={() => setQty(qty + 1)}
  >
    +
  </button>
</div>


      <h4>Select Payment Method</h4>

      {/* DEBIT */}
      <label>
        <input
          type="radio"
          name="payment"
          onChange={() => {
            setPayment("debit");
            setShowCardForm(true);
          }}
        />
        Debit Card
      </label>

      {/* CREDIT */}
      <label>
        <input
          type="radio"
          name="payment"
          onChange={() => {
            setPayment("credit");
            setShowCardForm(true);
          }}
        />
        Credit Card
      </label>

      {/* COD */}
      <label>
        <input
          type="radio"
          name="payment"
          onChange={() => {
            setPayment("cod");
            setShowCardForm(false);
          }}
        />
        Cash on Delivery
      </label>

      {/* CASHFREE */}
      <button onClick={startCashfreePayment}>
        Pay with Cashfree
      </button>

      {/* CARD FORM */}
      {showCardForm && (
        <div className="card-popup">
          <h3>{payment === "debit" ? "Debit" : "Credit"} Card</h3>

          <input
            placeholder="Card Number"
            onChange={(e) =>
              setCard({ ...card, number: e.target.value })
            }
          />
          <input
            placeholder="Card Holder Name"
            onChange={(e) =>
              setCard({ ...card, name: e.target.value })
            }
          />
          <input
            placeholder="MM/YY"
            onChange={(e) =>
              setCard({ ...card, expiry: e.target.value })
            }
          />
          <input
            placeholder="CVV"
            type="password"
            onChange={(e) =>
              setCard({ ...card, cvv: e.target.value })
            }
          />
        </div>
      )}

      <button onClick={confirmOrder}>Confirm Order</button>
    </div>
  );
}

export default OrderSummary;
