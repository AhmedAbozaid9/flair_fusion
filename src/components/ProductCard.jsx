import React from "react";
import Image from "next/image";

function ProductCard({ title, price, images }) {
  return (
    <div className="cursor-pointer flex flex-col gap-1 sm:mx-4 mx-2 items-center justify-center">
        <div className="relative w-40 h-56 sm:w-56 sm:h-72">
            <Image
                src={images[0]}
                fill={true}
                className="object-cover"
                alt={title}
            />
        </div>
        <h3 className="w-40 text-center truncate ...">{title}</h3>
        <p className="text-pastel_red">{price} EGP</p>
    </div>
  );
}

export default ProductCard;
