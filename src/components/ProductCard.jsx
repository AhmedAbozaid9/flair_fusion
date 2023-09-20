import React from "react";
import Image from "next/image";

function ProductCard({ title, price, images }) {
  return (
    <div className="cursor-pointer flex flex-col gap-3 w-48 h-64 items-center justify-center">
      <Image
        src={images[0]}
        width={500}
        height={1000}
        className="object-contain w-32 h-32"
      />
      <h3>{title}</h3>
      <p className="text-pastel_red">{price}</p>
    </div>
  );
}

export default ProductCard;
