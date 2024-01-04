import React, { useState } from "react";
import { useQueryState } from "nuqs";

const Filter = ({ categories }) => {
  const [urlCategory, setUrlCategory] = useQueryState("");

  return (
    <div className="mt-2 flex gap-5 items-center justify-center">
      {categories.map((category, idx) => {
        const selectedStyle =
          urlCategory === category ? "bg-blue-950 text-white" : "";
        return (
          <div
            key={idx}
            className={`cursor-pointer px-4 py-1 transition-colors rounded-full border border-gray-300 ${selectedStyle}`}
            onClick={() => {
              setUrlCategory(category);
            }}
          >
            {category}
          </div>
        );
      })}
    </div>
  );
};

export default Filter;
