import React from "react";
import { useQueryState } from "nuqs";

const Filter = ({ categories, setCategory }) => {
  const [urlCategory, setUrlCategory] = useQueryState("category");

  const handleSelection = (category) => {
    if (urlCategory === category) {
      setUrlCategory(null);
      setCategory("");
    } else {
      setUrlCategory(category);
      setCategory(category);
    }
  };

  return (
    <div className="mt-2 flex gap-3 sm:gap-5 items-center justify-center">
      {categories.map((category, idx) => {
        const selectedStyle =
          urlCategory === category ? "bg-blue-950 text-white" : "";
        return (
          <div
            key={idx}
            className={`cursor-pointer px-4 py-1 transition-colors rounded-full border border-gray-300 ${selectedStyle}`}
            onClick={() => handleSelection(category)}
          >
            {category}
          </div>
        );
      })}
    </div>
  );
};

export default Filter;
