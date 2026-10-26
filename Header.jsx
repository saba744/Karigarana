

import { useNavigate } from "react-router-dom";
import "./header.css";
import React, { useContext } from "react";
import { CartContext } from "../context/CartContext"; 
import { WishlistContext } from "../context/WishlistContext";
import { useState } from "react";




function Header() {
  const navigate = useNavigate();
 
  const { cartItems,} = useContext(CartContext);
  const { wishlist } = useContext(WishlistContext);
  const [query, setQuery] = useState("");
  

const handleSearch = (e) => {
  if (e.key === "Enter") {
    if (!query.trim()) return;
    navigate(`/search?q=${query}`);
  }
};
const [showUserMenu, setShowUserMenu] = useState(false);




  


  return (
    <div className="site-header">
      {/* TOP STRIP */}
      <div className="top-strip">
        <marquee scrollamount="8">
          Winter Sale is Live. Shop Now &nbsp;&nbsp;
          <button>UPTO 80% OFF</button>
        </marquee>
      </div>

      {/* MAIN HEADER */}
      <header className="main-header">
        <div className="logo">
          <h2>Karigarana🌾</h2>
          <p>Infinite India. Handcrafted.</p>
        </div>

         <input
      type="text"
      placeholder="Search products or categories..."
      value={query}
      onChange={(e) => setQuery(e.target.value)}
      onKeyDown={handleSearch}
    />
<div className="header-icons">
 <span
  className="header-wishlist-icon"
  onClick={() => navigate("/wishlist")}
    style={{ cursor: "pointer" }}
  
>
  ♡
</span>


  <span
    className="cart-icon"
    onClick={() => navigate("/cart")}
      style={{ cursor: "pointer" }}
  >
    👜
  </span>

<div className="hdr-user-dropdown">
  <span
    className="hdr-user-icon"
    onClick={() => setShowUserMenu(!showUserMenu)}
  >
    👤
  </span>

  {showUserMenu && (
    <div className="hdr-user-menu">
      <div onClick={() => navigate("/signup")}>
        User
      </div>
      <div onClick={() => navigate("/admin-signup")}>
        Admin
      </div>
    </div>
  )}
</div>
</div>


      </header>

      {/* NAV */}
      <nav className="top-links">
        <ul>
          <li onClick={() => navigate("/design")}>Design Themes</li>
          <li onClick={() => navigate("/craft")}>Crafts</li>
          <li onClick={() => navigate("/blogs")} className="nav-text">
            Blogs
          </li>
          <li onClick={() => navigate("/storie")}>Stories</li>
          <li onClick={() => navigate("/about")}>About Us</li>
        </ul>
      </nav>

      {/* CATEGORY NAV */}
      <nav className="category-nav">
        <ul>
           
           <li className="dropdown">

  <span onClick={() => navigate("/furnishing")}>Home Furnishing</span>

  <ul className="dropdown-menu">
    

    <li onClick={() => navigate("/furnishing?cat=Curtains")}>
      Curtains
    </li>
    <li onClick={() => navigate("/furnishing?cat=Cushion Covers")}>
      Cushion Covers
      
    </li>
   <li onClick={() => navigate("/furnishing?cat=Rugs")}>

      Rugs
      
    </li>
     <li onClick={() => navigate("/furnishing?cat=Towels")}>
     Towels
      
    </li>
  </ul>
</li>
 <li className="dropdown">
 <span onClick={() => navigate("/bed")}>Bed linen</span>

          <ul className="dropdown-menu">
         <li onClick={() => navigate("/bed?cat=Bedsheets")}>
         Bedsheets
          </li>
          <li
  onClick={() =>
    navigate(
      `/bed?cat=${encodeURIComponent("Quilts & Comforters")}`
    )
  }
>
  Quilts & Comforters
</li>

              </ul>
             </li>
             
        <li className="dropdown">
        <span onClick={() => navigate("/kitchen")}>Kitchen & Serveware</span>

          <ul className="dropdown-menu">
         <li onClick={() => navigate("/kitchen?cat=storage")}>
          Kitchen Storage
          </li>
          <li onClick={() => navigate("/kitchen?cat=serveware")}>
           Serveware
            </li>
              </ul>
             </li>


          <li className="dropdown">
  <span onClick={() => navigate("/table")}>Table linen</span>

  <ul className="dropdown-menu">
    <li onClick={() => navigate("/table?cat=mats")}>
      Table Mats
    </li>
    <li onClick={() => navigate("/table?cat=runners")}>
      Table Runners
      
    </li>
    <li onClick={() => navigate("/table?cat=cloth")}>
      Table cloths
      
    </li>
     <li onClick={() => navigate("/table?cat=combos")}>
      Combos
      
    </li>
  </ul>
</li>
           <li className="dropdown">
  <span onClick={() => navigate("/decor")}>Home Decor</span>

  <ul className="dropdown-menu">
    <li onClick={() => navigate("/decor?cat=wall-art")}>
      Wall Art
    </li>
    <li onClick={() => navigate("/decor?cat=decor-accessories")}>
      Decor Accessories
    </li>
    <li onClick={() => navigate("/decor?cat=planters")}>
      planters
      
    </li>
     <li onClick={() => navigate("/decor?cat=figurines")}>
      figurines
      
    </li>
    <li onClick={() => navigate("/decor?cat=combos")}>
      combos
      
    </li>
  </ul>
</li>
          <li className="sale" onClick={() => navigate("/sale")}>
            Winter Sale
          </li>
          <li className="gift" onClick={() => navigate("/gift")}>
            Gifting
          </li>
        </ul>
      </nav>
    </div>
    
  );
}

export default Header;
