import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";

import Home from "./Home";
import Blog from "./Blog";
import Login from "./Login";
import Signup from "./Signup";
import About from "./About";
import Storie from "./Storie";
import ForgotPassword from "./ForgotPassword";
import ResetPassword from "./ResetPassword";
import Craft from "./Craft";
import Info from "./Info";
import Design from "./Design";
import Bed from "./Bed";
import Furnishing from "./Furnishing";
import Kitchen from "./Kitchen";
import Table from "./Table";
import Decor from "./Decor";
import Sale from "./Sale";
import Gift from "./Gift";
import Page from "./Page";
import Checkout from "./Checkout";
import OrderSuccess from "./OrderSuccess";
import Wishlist from "./Wishlist";
import SearchResult from "./SearchResult";
import WriteReview from "./WriteReview";
import OrderSummary from "./OrderSummary";
import AdminSignup from "./AdminSignup";
import AdminLogin from "./AdminLogin";
import AdminDashboard from "./AdminDashboard";
import AddDecorProduct from "./AddDecorProduct";


import { CartProvider } from "./context/CartContext";
import { WishlistProvider } from "./context/WishlistContext";



function App() {
  return (
    <Router>
      <CartProvider>
        <WishlistProvider>

          <Routes>
            {/* Default */}
            <Route path="/" element={<Signup />} />

            {/* Pages with Layout */}
            <Route element={<Layout />}>
              <Route path="/home" element={<Home />} />
              <Route path="/blogs" element={<Blog />} />
              <Route path="/about" element={<About />} />
              <Route path="/storie" element={<Storie />} />
              <Route path="/craft" element={<Craft />} />
              <Route path="/info" element={<Info />} />
              <Route path="/design" element={<Design />} />
              <Route path="/bed" element={<Bed />} />
              <Route path="/furnishing" element={<Furnishing />} />
              <Route path="/kitchen" element={<Kitchen />} />
              <Route path="/table" element={<Table />} />
              <Route path="/decor" element={<Decor />} />
              <Route path="/sale" element={<Sale />} />
              <Route path="/gift" element={<Gift />} />
              <Route path="/wishlist" element={<Wishlist />} />
              <Route path="/write-review" element={<WriteReview />} />
              <Route path="/order-summary" element={<OrderSummary />} />
              <Route path="/cart" element={<Page />} />
            </Route>

            {/* Auth */}
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/forgot-password" element={<ForgotPassword />} />
            <Route path="/reset-password/:token" element={<ResetPassword />} />

            {/* Cart */}
           
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/order-success" element={<OrderSuccess />} />
            <Route path="/search" element={<SearchResult />} />
            <Route path="/admin-signup" element={<AdminSignup />} />
<Route path="/admin-login" element={<AdminLogin />} />
<Route path="/admin-dashboard" element={<AdminDashboard />} />
<Route path="/admin/add-product" element={<AddDecorProduct />} />


            
            

          </Routes>

        </WishlistProvider>
      </CartProvider>
    </Router>
  );
}

export default App;
