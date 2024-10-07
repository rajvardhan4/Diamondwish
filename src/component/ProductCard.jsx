import React, { useContext } from "react";
import { IoMdHeartEmpty, IoMdHeart } from "react-icons/io";
import { context } from "../context/ContextProvider";

const ProductCard = () => {

  const {products,selectedColors,hoveredProductId,handleColorChange,wishList,toggleHeart} = useContext(context)


    


    return (
     

<>
 <div className="grid grid-cols-2 gap-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 md:gap-5 justify-items-center h-auto px-5 py-5">

        {products.map((product) => {
          const currentColor = selectedColors[product.id];
          const currentImages = product.colorOptions[currentColor];

          return (
            <div
              key={product.id}
              className="relative bg-white rounded-lg w-[100%] h-auto md:w-[100%] md:h-[auto] lg:w-[100%] lg:h-[auto] transition-shadow duration-300 hover:shadow-custom"
            >
              {/* Heart (Wishlist) Icon */}
            <div
              className="absolute top-2 right-2 text-lg cursor-pointer"
              onClick={() => toggleHeart(product.id)}
            >
              {wishList[product.id] ? <IoMdHeart /> : <IoMdHeartEmpty />}
            </div>

              {/* Product Image */}
              <div
                className="w-full h-[180px] sm:h-[200px] md:h-[250px] lg:h-[280px] mb-2 overflow-hidden object-cover cursor-pointer"
                onMouseEnter={() => setHoveredProductId(product.id)}
                onMouseLeave={() => setHoveredProductId(null)}
              >
                <img
                  src={
                    hoveredProductId === product.id
                      ? currentImages.afterImage
                      : currentImages.beforeImage
                  }
                  alt={`${currentColor} ring`}
                  className="w-full h-full object-cover transition duration-300"
                />
              </div>

              {/* Color Options */}
              <div className="flex space-x-1 sm:space-x-2  justify-center py-1 sm:py-2">
                {Object.keys(product.colorOptions).map((color) => {
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
                  return (
                    <button
                      key={color}
                      className={`w-7 h-7 sm:w-5 sm:h-5 md:w-6 md:h-6 rounded-full border-[2px] ${selectedColors[product.id] === color
                          ? "border-[black]"
                          : "border-white"
                        }`}
                      style={{
                        backgroundImage: `url(${backgroundImages[color]})`,
                        backgroundSize: "cover",
                      }}
                      onClick={() => handleColorChange(product.id, color)}
                    ></button>
                  );
                })}
              </div>

              {/* Product Description */}
              <div className="text-[0.65rem] sm:text-[0.7rem] md:text-[.75rem] font-medium leading-[1rem] md:leading-[1.25rem] tracking-wider font-RoboFont text-gray-600 mb-1 sm:mb-2 text-center">
                {product.description}
              </div>

              {/* Prices */}
              <div className="flex justify-center items-center mb-2 sm:mb-3">
                <span className="font-RoboFont text-[#4b4537] font-[600] text-[.75rem] sm:text-[.8rem] md:text-[.875rem] mr-2">
                  ${currentImages.price}
                </span>
                <span className="text-[0.65rem] sm:text-[0.75rem] md:text-sm text-gray-400 line-through">
                  ${currentImages.cutPrice}
                </span>
              </div>
            </div>
          );
        })}
      </div>
</>


    );
  };

  export default ProductCard;


