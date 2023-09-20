import React from "react";
import Image from "next/image";

function ProductCard({ title, price, images }) {
  return (
    <div className="cursor-pointer flex flex-col gap-2 sm:mx-6 mx-4 items-center justify-center border-gray-200">
      <div className="relative w-36 h-40 sm:w-56 sm:h-72">
        <Image
          src={images[0]}
          fill={true}
          className="object-cover"
          alt={title}
        />
      </div>
      <h3 className="w-36 text-center truncate ...">{title}</h3>
      <p className="text-pastel_red">{price} EGP</p>
      <button className="w-full bg-pastel_red text-white py-2 rounded-md">
        Add To Cart
      </button>
    </div>
  );
}

export default ProductCard;
