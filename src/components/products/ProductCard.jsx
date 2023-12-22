import React from "react";
import Image from "next/image";
import Link from "next/link";

function ProductCard({ title, price, images, _id }) {
  return (
    <div className="cursor-pointer flex flex-col gap-2 items-center justify-center w-36 sm:w-60 h-[310px] sm:h-[450px]">
      <Link href={_id} className="w-full">
        <div className="relative w-full h-48 sm:h-80">
          <Image
            src={images[0]}
            fill={true}
            className="object-cover"
            alt={title}
            sizes="(max-width: 240px) (max-height: 320px)"
          />
        </div>
        <h3 className="w-full py-2 truncate ...">{title}</h3>
        <p className="text-pastel_red pb-2">{price} EGP</p>
      </Link>
      <button className="w-full bg-pastel_red text-white py-2 text-sm sm:text-md rounded-sm">
        Add To Cart
      </button>
    </div>
  );
}

export default ProductCard;
