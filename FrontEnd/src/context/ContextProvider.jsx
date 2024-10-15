import React, { useState, useEffect } from "react";
import axios from "axios"

// Creating Context for sharing state
export const context = React.createContext();

export function Provider({ children }) {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [wishList, setWishList] = useState({});
  const [selectedColors, setSelectedColors] = useState({});
  const [hoveredProductId, setHoveredProductId] = useState(null);

  useEffect(() => {
    // Fetch data using Axios
    axios
      .get("https://diamondwish-backend.vercel.app/DiamondwishData")
      .then((response) => {
        setProducts(response.data);
        setLoading(false); // Loading complete
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setLoading(false); // Stop loading on error
      });
  }, []);

  // Toggle heart/wishlist status for a product
  const toggleHeart = (productId) => {
    setWishList((prevWishList) => ({
      ...prevWishList,
      [productId]: !prevWishList[productId],
    }));
  };

  // Handle color change
  const handleColorChange = (productId, color) => {
    setSelectedColors((prevColors) => ({
      ...prevColors,
      [productId]: color,
    }));
  };

  return (
    <context.Provider
      value={{
        products,
        selectedColors,
        hoveredProductId,
        handleColorChange,
        wishList,
        toggleHeart,
        setHoveredProductId,
      }}
    >
      {loading ? <div>Loading...</div> : children}
    </context.Provider>
  );
}
