import React, { useEffect } from "react";
import Button from "./Button";
import productImage from "../assets/headphone.png";

const ProductCard = () => {
  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((response) => response.json())
      .then((data) => console.log(data))
      .catch((error) => console.error("error", error));
  }, []);

  return (
    <div className="bg-white w-[350px] h-fit p-4 rounded-xl shadow-lg">
      <div className="w-full relative p-12 ">
        <div className="bg-purple-300  text-black px-2 py-1 w-fit absolute top-0 left-0">
          Nearest Seller
        </div>
        <img className="size-[200px] m-auto" src={productImage} alt="image" />
      </div>
      <div className="flex flex-col">
        <h3 className="font-bold text-2xl mb-3">Wireless Bluetooth Headset</h3>
        <small className="text-sm text-gray-500">Shipped in 3-4 days</small>
        <bold className="font-bold text-md">$35.99</bold>

        <div className="flex gap-3">
          <Button
            label="Add to Cart"
            className="bg-gray-100 w-full text-gray-400"
          />
          <Button label="Buy" className="bg-purple-400 w-full text-white" />
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
