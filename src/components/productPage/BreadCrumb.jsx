import Link from "next/link";
import React from "react";

const BreadCrumb = ({ gender, type, category }) => {
  return (
    <div className="text-[14px] flex gap-1 sm:gap-3 my-2 sm:my-3">
      <Link
        href={`/products/search?searchTerm=${gender}`}
        className=" text-blue-950"
      >
        {gender}
      </Link>
      <p>/</p>
      <Link href={`/products/${type}`} className=" text-blue-950">
        {type}
      </Link>
      <p>/</p>
      <Link
        href={`/products/search?searchTerm=&category=${category}`}
        className="text-blue-950"
      >
        {category}
      </Link>
    </div>
  );
};

export default BreadCrumb;
