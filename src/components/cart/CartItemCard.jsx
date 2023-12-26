import React, { useEffect, useState } from "react";
import Image from "next/image";
import { AiOutlineHeart } from "react-icons/ai";

import QuantityCounter from "./QuantityCounter";
import axios from "axios";
const CartItemCard = ({ productId, count }) => {
  const [product, setProduct] = useState();
  const [quantity, setQuantity] = useState(0);
  useEffect(() => {
    (async () => {
      const { data } = await axios.get(`/api/product/${productId}`);
      setQuantity(count);
      setProduct(data);
    })();
  }, [productId]);
  return (
    <>
      {product && (
        <div className="flex max-sm:flex-col sm:items-center sm:justify-between h-full">
          <div className="h-full flex items-center gap-3 sm:gap-5">
            <div className="relative w-28 h-28 sm:w-36 sm:h-36">
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
            <QuantityCounter count={quantity} />
            <p className="text-center w-32">{`${product.price} EGP`}</p>
            <div className="flex items-center">
              <button className="mx-2  text-blue-950">
                <AiOutlineHeart size={30} />
              </button>
              <button className="action_btn border border-blue-950 max-sm:text-sm">
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
