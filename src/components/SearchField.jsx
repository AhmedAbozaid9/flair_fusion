import React from "react";
import { FiSearch } from "react-icons/fi";

const SearchField = () => {
  return (
    <form className="w-full md:max-w-[600px] flex justify-center relative">
      <input
        type="text"
        className="search_input"
        placeholder="Search for any Product you desire"
      />
      <span className="absolute right-5 translate-y-1/2 bottom-1/2">
        <FiSearch size={22} className="opacity-50" />
      </span>
    </form>
  );
};

export default SearchField;
