//cart
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./page.css";

const CartPage = () => {
  const [items, setItems] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch("http://localhost:5000/api/cart")
      .then(res => res.json())
      .then(data => setItems(data));
  }, []);

  const removeItem = async (id) => {
    try {
      const res = await fetch(`http://localhost:5000/api/cart/${id}`, {
        method: "DELETE",
      });

      if (!res.ok) throw new Error("Delete failed");

      setItems(prev => prev.filter(item => item._id !== id));
    } catch (err) {
      console.error("Remove error:", err);
    }
  };

  const buyNow = (item) => {
    navigate("/checkout", {
      state: { buyNowItem: item },
    });
  };

 return (
  <div className="cart-wrapper">   {/* 👈 NEW */}
    <div className="cart-page">
      <h2>My Cart</h2>

      {items.map(item => (
        <div key={item._id} className="cart-row cart-card-small">
          <img src={item.image} alt={item.title} />

          <div className="cart-info">
            <p className="title">{item.title}</p>
            <p>₹{item.price}</p>
            <p>Qty: {item.qty}</p>
            <p>Color: {item.color}</p>
            <p>Size: {item.size}</p>

            <div className="cart-actions-bottom">
              <button
                className="remove-btn"
                onClick={() => removeItem(item._id)}
              >
                Remove
              </button>

              <button
                className="buy-btn"
                onClick={() => buyNow(item)}
              >
                Buy Now
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
);

};

export default CartPage;
