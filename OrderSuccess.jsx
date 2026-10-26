import { useNavigate } from "react-router-dom";
import "./orderSuccess.css";

const OrderSuccess = () => {
  const navigate = useNavigate();

  return (
    <div className="order-success">
      <h1>🎉 Order Confirmed</h1>
      <p>Thank you for visiting <b>Karigarana</b></p>
      <p>Your order has been placed successfully.</p>

      <button onClick={() => navigate("/home")}>
        Continue Shopping
      </button>
    </div>
  );
};

export default OrderSuccess;
