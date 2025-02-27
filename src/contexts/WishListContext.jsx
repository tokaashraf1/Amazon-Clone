import { createContext, useState, useEffect } from "react";
import PropTypes from "prop-types";

export const WishlistContext = createContext();

export function WishlistProvider({ children }) {
  const [wishlist, setWishlist] = useState([]);

  // Load Wishlist from Local Storage when the app starts
  useEffect(() => {
    const storedWishlist = JSON.parse(localStorage.getItem("wishlist"));
    if (storedWishlist.length > 0) {
      setWishlist(storedWishlist);
    }
  }, []);

  // Save Wishlist to Local Storage whenever it changes
  useEffect(() => {
    localStorage.setItem("wishlist", JSON.stringify(wishlist));
  }, [wishlist]);

  // Add to Wishlist
  function addToWishlist(product) {
    setWishlist((prevWishlist) => {
      if (!prevWishlist.find((item) => item.id === product.id)) {
        const updatedWishlist = [...prevWishlist, product];
        return updatedWishlist;
      }
      return prevWishlist; // No duplicate
    });
  }

  // Remove from Wishlist
  function removeFromWishlist(productId) {
    const updatedWishlist = wishlist.filter((item) => item.id !== productId);
    setWishlist(updatedWishlist);
  }

  return (
    <WishlistContext.Provider
      value={{ wishlist, addToWishlist, removeFromWishlist }}
    >
      {children}
    </WishlistContext.Provider>
  );
}

WishlistProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
