import { createContext, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const [cartOpen, setCartOpen] = useState(false);

  const addToCart = (item) => {
    setCartItems([item]); // 👈 sirf last added item
    setCartOpen(true);
  };

  const closeCart = () => setCartOpen(false);

  return (
    <CartContext.Provider
      value={{
        cartItems,
        cartOpen,
        addToCart,
        closeCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
