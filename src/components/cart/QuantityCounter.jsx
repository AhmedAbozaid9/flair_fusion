"use client";
import React, { useState } from "react";

const QuantityCounter = () => {
  const [quantity, setQuantity] = useState(1);
  return (
    <div className="flex items-center mx-2">
      <button
        className="p-2 bg-blue-950 text-white w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center"
        onClick={() => setQuantity((prev) => prev + 1)}
      >
        +
      </button>
      <div className="p-2 w-8 h-8 sm:w-10 sm:h-10 text-center flex items-center justify-center">
        {quantity}
      </div>
      <button
        className="p-2 border border-gray-300  w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center"
        onClick={() => setQuantity((prev) => prev - 1)}
      >
        -
      </button>
    </div>
  );
};

export default QuantityCounter;
