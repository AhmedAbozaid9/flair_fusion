"use client";
import React, { useState } from "react";

const QuantityCounter = () => {
  const [quantity, setQuantity] = useState(1);
  return (
    <div className="flex items-center mx-2">
      <button
        className="p-2 bg-blue-950 text-white w-10 h-10"
        onClick={() => setQuantity((prev) => prev + 1)}
      >
        +
      </button>
      <div className="p-2 w-10 h-10 text-center">{quantity}</div>
      <button
        className="p-2 border border-gray-300 w-10 h-10"
        onClick={() => setQuantity((prev) => prev - 1)}
      >
        -
      </button>
    </div>
  );
};

export default QuantityCounter;
