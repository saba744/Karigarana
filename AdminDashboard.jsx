
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./adminDashboard.css";

const AdminDashboard = () => {
  const navigate = useNavigate();
  const adminName = localStorage.getItem("adminName");

  const [active, setActive] = useState("orders");
  const [orders, setOrders] = useState([]);
  const [users, setUsers] = useState([]);
const [loadingUsers, setLoadingUsers] = useState(false);


  const handleLogout = () => {
    localStorage.removeItem("adminName");
    navigate("/admin-login");
  };

  useEffect(() => {
    if (active === "orders") {
      axios
        .get("http://localhost:5000/api/purchase/all")
        .then((res) => {
          setOrders(res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, [active]);
  
const [decorProducts, setDecorProducts] = useState([]);

useEffect(() => {
  if (active === "products") {
    axios
      .get("http://localhost:5000/api/decor-products")
      .then(res => setDecorProducts(res.data));
  }
}, [active]);
const handleDelete = async (id) => {
  if (!window.confirm("Are you sure you want to delete this product?")) return;

  try {
    await axios.delete(`http://localhost:5000/api/decor-products/${id}`);

    // UI se bhi hata do (NO refresh)
    setDecorProducts(prev =>
      prev.filter(product => product._id !== id)
    );
  } catch (err) {
    console.log(err);
    alert("Delete failed");
  }
};
const fetchUsers = async () => {
  try {
    setLoadingUsers(true);
    const res = await axios.get("http://localhost:5000/api/users"); // server.js route
    setUsers(res.data); // only once
    setLoadingUsers(false);
  } catch (error) {
    console.log("Users fetch error:", error);
    setLoadingUsers(false);
  }
};

useEffect(() => {
  if (active === "users") {
    fetchUsers();
  }
}, [active]);

  return (
    <div className="chief-layout">
      {/* SIDEBAR */}
      <aside className="chief-sidebar">
        <h2 className="chief-logo">Admin Panel</h2>

        <ul className="chief-menu">
          <li style={{ fontWeight: "600", cursor: "default" }}>
            Dashboard
          </li>

          <li onClick={() => setActive("orders")}>📦 View Orders</li>
          <li onClick={() => setActive("products")}>🛒 Manage Products</li>
          <li onClick={() => setActive("users")}>👤 Manage Users</li>
        </ul>

        <div className="chief-sidebar-bottom">
          <div className="chief-logout" onClick={handleLogout}>
            🚪 Logout
          </div>
        </div>
      </aside>

      {/* MAIN */}
      <div className="chief-main">
        <header className="chief-header" style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
  <h3>
    Welcome, <strong>{adminName || "Admin"}</strong>
  </h3>

 
</header>


        <section className="chief-content">
          {active === "orders" && (
            <>
              <h2>📦 Orders</h2>

             <div className="chief-orders-grid">
  {orders.map((o) => (
    <div key={o._id} className="chief-order-card">
      <img
        src={o.image}
        alt={o.productName}
        className="chief-order-img"
      />

      <div className="chief-order-info">
        <p><b>{o.productName}</b></p>
        <p>Qty: {o.quantity}</p>
        <p>Total: ₹{o.totalPrice}</p>
      </div>
    </div>
  ))}
</div>

            </>
          )}

         {active === "products" && (
  <div className="manage-products">
    <div className="manage-products-top">
      <h2>🛒 Manage Products</h2>

      <button
        className="manage-product-btn"
        onClick={() => navigate("/admin/add-product")}
      >
        ➕ Add Product
      </button>
    </div>

   
  </div>
)}
{active === "products" && (
  <div className="manage-grid">
    {decorProducts.map(p => (
      <div key={p._id} className="manage-card">
        <img src={`http://localhost:5000${p.image}`} width="200" alt={p.title} />
        <p className="manage-title">{p.title}</p>
        <p className="manage-price">₹{p.price}</p>
        <button
          className="manage-delete-btn"
          onClick={() => handleDelete(p._id)}
        >
          🗑
        </button>
      </div>
    ))}
  </div>
)}


{active === "users" && (
  <div className="WatchSection">
    <h2 className="WatchTitle">👤 Users Section</h2>

    {loadingUsers && <p className="WatchLoading">Loading users...</p>}

    {!loadingUsers && (
      <>
        <h3 className="WatchTotal">Total Users: {users.length}</h3>

        <div className="WatchTableWrapper">
          <table className="WatchTable">
            <thead>
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Password</th>
                <th>Last Login</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user, index) => (
                <tr key={index}>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  <td>{user.password}</td>
                  <td>{user.lastLogin ? new Date(user.lastLogin).toLocaleString() : "Never"}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </>
    )}
  </div>
)}



        </section>
      </div>
    </div>
  );
};

export default AdminDashboard;
