import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { FiSearch } from "react-icons/fi";

const SearchField = () => {
  const router = useRouter();
  const [searchTerm, setSearchTerm] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    router.push(`/products/search?searchTerm=${searchTerm}`);
  };
  return (
    <form
      onSubmit={handleSubmit}
      className="w-full md:max-w-[600px] flex justify-center relative"
    >
      <input
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        type="text"
        className="search_input"
        placeholder="Search for any Product"
      />
      <button
        onClick={handleSubmit}
        className="cursor-pointer absolute right-5 translate-y-1/2 bottom-1/2"
      >
        <FiSearch size={22} className="opacity-50" />
      </button>
    </form>
  );
};

export default SearchField;
