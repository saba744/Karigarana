import { createContext, useState, useEffect } from "react";

export const WishlistContext = createContext();

export const WishlistProvider = ({ children }) => {
  const [wishlist, setWishlist] = useState([]);

  // 🔹 fetch wishlist on load
  useEffect(() => {
    const token = localStorage.getItem("token");

    if (!token) return;

    fetch("http://localhost:5000/api/wishlist", {
      headers: {
        Authorization: token,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if (Array.isArray(data)) {
          setWishlist(data);
        } else {
          setWishlist([]);
        }
      })
      .catch(() => setWishlist([]));
  }, []);

  // ❤️ add / remove wishlist
  const toggleWishlist = async (product) => {
    const token = localStorage.getItem("token");

    if (!token) {
      alert("Please login first");
      return;
    }

    await fetch("http://localhost:5000/api/wishlist/toggle", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: token,
      },
      body: JSON.stringify({ product }),
    });

    setWishlist((prev) =>
      prev.some((item) => item.productId === product.id)
        ? prev.filter((item) => item.productId !== product.id)
        : [
            ...prev,
            {
              productId: product.id,
              title: product.title,
              price: product.price,
              oldPrice: product.oldPrice,
              image: product.image,
              category: product.category,
            },
          ]
    );
  };

  // ✅ YAHI MISS HO RAHA THA
  const isInWishlist = (id) => {
    return wishlist.some((item) => item.productId === id);
  };

  return (
    <WishlistContext.Provider
      value={{ wishlist, toggleWishlist, isInWishlist }}
    >
      {children}
    </WishlistContext.Provider>
  );
};
