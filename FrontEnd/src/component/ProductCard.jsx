


import React, { useContext} from 'react';
import { IoMdHeartEmpty, IoMdHeart } from "react-icons/io";
import { context } from "../context/ContextProvider";

const ProductCard = () => {

    const {
           productData,
 setProductData,
 handleColorChange,
 handleProductHover,selectedColors,hoveredProductId,wishList,backgroundImages,toggleHeart
   } = useContext(context);
 

  return (
    <div className="grid grid-cols-2 gap-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 md:gap-5 justify-items-center h-auto px-5 py-5 ">
      {/* Mapping through products and displaying them */}
      {productData.map((product) => (
        <div key={product.id} className="relative bg-white rounded-lg w-[100%] h-auto transition-shadow duration-300 hover:shadow-custom">

          {/* Heart (Wishlist) Icon */}
          <div
            className="absolute top-2 right-2 text-lg cursor-pointer"
            onClick={() => toggleHeart(product.id)}
          >
            {wishList[product.id] ? <IoMdHeart /> : <IoMdHeartEmpty />}
          </div>


          {/* Product image section */}
          <div
            className="w-full h-[180px] sm:h-[200px] md:h-[250px] lg:h-[280px] mb-2 overflow-hidden object-cover cursor-pointer"
            onMouseEnter={() => handleProductHover(product.id)} // Handle hover on product image
            onMouseLeave={() => handleProductHover(null)} // Reset hover state when leaving
          >
            <img
              src={
                hoveredProductId === product.id // Show the afterImage if the product is hovered
                  ? product[selectedColors[product.id] + '_afterImage']
                  : product[selectedColors[product.id] + '_beforeImage'] // Show the beforeImage if not hovered
              }
              alt={selectedColors[product.id]}
              className="w-full h-full object-cover transition duration-300"
              onClick={() => handleColorChange(selectedColors[product.id], product.id)} // Keep the color on click
            />
          </div>

          {/* Color options with ring images */}
          <div className="flex space-x-2 justify-center py-2 sm:py-3 md:py-4">
            {['whiteGold', 'yellowGold', 'roseGold', 'platinum'].map((color) => (
              <button
                key={color}
                onClick={() => handleColorChange(color, product.id)} // Only change the color of the clicked product
                className={` w-7 h-7 sm:w-5 sm:h-5 md:w-8 md:h-8 rounded-full border-[2px] ${selectedColors[product.id] === color ? 'border-gray-500' : 'border-white'
                  }`}
                  style={{
                    backgroundImage: `url(${backgroundImages[color]})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                  }}
              >
                
                 
                
              </button>
            ))}
            </div>
          



          {/* Product Description */}
          <div className="text-[0.65rem] sm:text-[0.7rem] md:text-[.75rem] font-medium leading-[1rem] md:leading-[1.25rem] tracking-wider text-gray-600 mb-1 sm:mb-2 text-center">
            {product.description}
          </div>


          {/* Price section */}
          <div className="flex justify-center items-center mb-2 sm:mb-3">
            <span className="font-semibold text-[#4b4537] text-[.75rem] sm:text-[.8rem] md:text-[.875rem] mr-2"> ${product[selectedColors[product.id] + '_price']}</span >
            <span className="text-[0.65rem] sm:text-[0.75rem] md:text-sm text-gray-400 line-through"> ${product[selectedColors[product.id] + '_cutPrice']}</span >
          </div>



        </div>
      ))}
    </div>
  );
};

export default ProductCard;
