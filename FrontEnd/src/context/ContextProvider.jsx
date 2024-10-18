import React, { useState, useEffect } from "react";
import axios from "axios"

// Creating Context for sharing state
export const context = React.createContext();

export function Provider({ children }) {
 
  const [productData, setProductData] = useState([]);
  const [selectedColors, setSelectedColors] = useState({
    1: "whiteGold",
    2: "platinum",
    3: "yellowGold",
    4: "whiteGold",
    5: "roseGold",
    6: "yellowGold",
    7: "whiteGold",
    8: "yellowGold",
  });
  const [hoveredProductId, setHoveredProductId] = useState(null); // To track hovered product
  const [wishList, setWishList] = useState({});

  useEffect(() => {
    // Fetch product data from API``
    fetch('http://localhost:4000/api/products')
      .then((response) => response.json())
      .then((data) => {
        setProductData(data.products); // Set the product data
        console.log('Fetched Product Data:', data); // Print the fetched data to the console
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);

    // Function to handle color change
    const handleColorChange = (color, productId) => {
      setSelectedColors((prevState) => ({
        ...prevState,
        [productId]: color, // Change the selected color for the specific product
      }));
    };
  
    // Function to handle hover on product image
    const handleProductHover = (id) => {
      setHoveredProductId(id); // Set the hovered product
    };


      // Object containing background images for each color option
  const backgroundImages = {
    whiteGold:
      "https://images.diamondwish.com/uploads/images/metals/1694168609_white-gold.svg",
    yellowGold:
      "https://images.diamondwish.com/uploads/images/metals/1694168678_yellow-gold.svg",
    roseGold:
      "https://images.diamondwish.com/uploads/images/metals/1694168588_rose-gold.svg",
    platinum:
      "https://images.diamondwish.com/uploads/images/metals/1694168487_platinum.svg",
  };
  // Toggle heart/wishlist status for a product
  const toggleHeart = (productId) => {
    setWishList((prevWishList) => ({
      ...prevWishList,
      [productId]: !prevWishList[productId],
    }));
  };


  return (
    <context.Provider
      value={{
        productData,
        setProductData,
        handleColorChange,
        handleProductHover,selectedColors,hoveredProductId,wishList,backgroundImages,toggleHeart
      }}
    >
      {children}
    </context.Provider>
  );
}
