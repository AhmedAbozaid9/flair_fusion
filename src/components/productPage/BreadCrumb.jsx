import Link from "next/link";
import React from "react";

const BreadCrumb = ({ gender, type, category }) => {
  return (
    <div className="flex gap-5 mb-3 sm:mb-5">
      <Link href="/products/all" className=" text-blue-950">
        {gender}
      </Link>
      <p>/</p>
      <Link href={`/products/${type}`} className=" text-blue-950">
        {type}
      </Link>
      <p>/</p>
      <Link href="/products/all" className="text-blue-950">
        {category}
      </Link>
    </div>
  );
};

export default BreadCrumb;
