import React from "react";
import Image from "next/image";
import { AiOutlineHeart } from "react-icons/ai";

import QuantityCounter from "./QuantityCounter";
const CartItemCard = ({ product }) => {
  return (
    <>
      {product && (
        <div className="flex max-sm:flex-col sm:items-center sm:justify-between h-full">
          <div className="h-full flex items-center gap-3 sm:gap-5">
            <div className="relative w-36 h-36">
              <Image
                src={product.images[0]}
                alt={product.title}
                fill={true}
                sizes="(max-width: 240px) (max-height: 320px)"
                className="object-cover"
              />
            </div>
            <div>
              <p>{product.title}</p>
              <p className="text-gray-400 w-full">{product.category}</p>
              <p className="text-gray-400 w-full">{product.gender}</p>
            </div>
          </div>
          <div className="flex justify-between items-center mt-2">
            <QuantityCounter />
            <p>{`${product.price} EGP`}</p>
            <div className="flex items-center">
              <button className="mx-2  text-blue-950">
                <AiOutlineHeart size={30} />
              </button>
              <button className="action_btn border-2 border-blue-950">
                Remove
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default CartItemCard;
