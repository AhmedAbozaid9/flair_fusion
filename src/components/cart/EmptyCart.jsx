import React from "react";
import { CiShoppingCart } from "react-icons/ci";

const EmptyCart = () => {
  return (
    <div className="flex flex-col items-center justify-center">
      <CiShoppingCart size={100} />
      <p className="text-xl font-semibold text-center">Your cart is empty</p>
      <p className="text-gray-400">add more products to see them here</p>
    </div>
  );
};

export default EmptyCart;
