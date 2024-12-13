import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { products } from "../Utils/assets/frontend_assets/assets";
import { assets } from "../Utils/assets/frontend_assets/assets";
import { useDispatch } from "react-redux";
import { addItems } from "../Utils/cartSLice";
import LatestCard from "./LatestCard";

const ProductDetails = () => {
  const [size, setSize] = useState("");
  const dispatch = useDispatch();
  const { id } = useParams();
  const product = products.find((item) => item._id === id);
  const [currImage, setCurrImage] = useState(product.image[0]);

  const similarProducts = products.filter(
    (item) => item.subCategory === product.subCategory
  );
  console.log(similarProducts);

  if (!product) {
    return <div>Product not found!</div>;
  }

  const addToCart = () => {
    if (size === "") {
      alert("Please add Product Size");
    } else {
      dispatch(addItems({ ...product, selectedSize: size }));
    }
  };

  const { image, name, description, price, sizes } = product;

  return (
    <div className="flex flex-col gap-20">
      <div className="flex flex-col md:flex-row mt-10 gap-8 mx-4 md:mx-20">
        <div className="w-full md:w-1/2 flex gap-4">
          <div className="flex flex-col gap-2">
            {image.map((each, index) => (
              <img
                onClick={() => setCurrImage(each)}
                key={index}
                src={each}
                alt={name}
                className="w-20"
              />
            ))}
          </div>
          <div className="mb-4 md:mb-0">
            <img
              src={currImage}
              alt={name}
              className="w-full md:w-[450px] mx-auto rounded-lg shadow-lg"
            />
          </div>
        </div>
        <div className="w-full md:w-1/2 flex flex-col gap-2">
          <h1 className="text-3xl font-bold text-gray-800">{name}</h1>
          <div className="flex gap-1">
            <img src={assets.star_icon} alt="star" className="w-4" />
            <img src={assets.star_icon} alt="star" className="w-4" />
            <img src={assets.star_icon} alt="star" className="w-4" />
            <img src={assets.star_icon} alt="star" className="w-4" />
            <img src={assets.star_dull_icon} alt="star" className="w-4" />
          </div>
          <p className="text-lg text-gray-600 mt-2">{description}</p>
          <h2 className="text-xl font-semibold text-gray-800 mt-4">${price}</h2>

          <div className="space-y-4 mt-4">
            <p className="text-lg font-medium">Select Size</p>
            <div className="flex gap-3 flex-wrap">
              {sizes.map((item, index) => (
                <button
                  key={index}
                  className={`border-2 border-emerald-600 p-3 w-16 m-1 text-center text-sm font-semibold rounded-lg 
                  ${
                    size === item
                      ? "border-orange-500 text-orange-500"
                      : "hover:bg-emerald-600 hover:text-white"
                  }`}
                  onClick={() => setSize(item)}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
          <div className="mt-6">
            <button
              className="bg-black text-white w-full md:w-auto py-2 px-6 rounded-md hover:bg-gray-800 transition duration-300"
              onClick={addToCart}
            >
              ADD TO CART
            </button>
          </div>

          <div className="mt-6 space-y-2">
            <p className="text-sm text-gray-500">100% Original product.</p>
            <p className="text-sm text-gray-500">
              Cash on delivery is available on this product.
            </p>
            <p className="text-sm text-gray-500">
              Easy return and exchange policy within 7 days.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
