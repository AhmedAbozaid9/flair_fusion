import React from "react";
import Image from "next/image";

function ProductCard({ title, price, images }) {
  return (
    <div className="cursor-pointer flex flex-col gap-1 items-center justify-center">
        <div className="relative  w-56 h-72">
            <Image
                src={images[0]}
                fill={true}
                className="object-cover"
            />
        </div>
            <h3>{title}</h3>
            <p className="text-pastel_red">{price} EGP</p>
    </div>
  );
}

export default ProductCard;
