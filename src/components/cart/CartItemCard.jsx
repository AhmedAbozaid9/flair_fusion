import React from "react";
import Image from "next/image";

import WishlistButton from "@components/products/WishlistButton";
import QuantityCounter from "./QuantityCounter";
import axios from "axios";
import { useSession } from "next-auth/react";
import Link from "next/link";

const CartItemCard = ({
  product,
  quantity,
  updateQuantity,
  setProducts,
  setPrice,
}) => {
  const { data: session } = useSession();

  const handleAdd = async () => {
    updateQuantity(product._id, quantity + 1);
    setPrice((prev) => prev + parseFloat(product.price.replace(",", "")));
    if (session) {
      try {
        await axios.post(`/api/cart/${session.user.id}`, {
          productId: product._id,
        });
      } catch (e) {
        console.log(e);
      }
    }
  };
  const handleDeleteAll = async () => {
    setProducts((prev) =>
      prev.filter((item) => item.product._id !== product._id)
    );
    if (session) {
      try {
        await axios.delete(`api/cart/${session.user.id}`, {
          data: {
            productId: product._id,
            deleteQuantity: quantity,
          },
        });
      } catch (e) {
        console.log(e);
      }
    }
  };

  const handleDelete = async (deleteQuantity) => {
    updateQuantity(product._id, quantity - deleteQuantity);
    console.log(quantity);
    setPrice(
      (prev) =>
        prev - parseFloat(product.price.replace(",", "")) * deleteQuantity
    );

    if (quantity < 2) {
      setProducts((prev) =>
        prev.filter((item) => item.product._id !== product._id)
      );
    }
    if (session) {
      try {
        await axios.delete(`api/cart/${session.user.id}`, {
          data: {
            productId: product._id,
            deleteQuantity: deleteQuantity,
          },
        });
      } catch (e) {
        console.log(e);
      }
    }
  };
  return (
    <div className="min-h-28 my-4 flex max-sm:flex-col sm:items-center sm:justify-between h-full">
      <Link
        href={`/${product._id}`}
        className="h-full flex items-center gap-3 sm:gap-5"
      >
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
      </Link>
      <div className="flex justify-between items-center mt-2">
        <QuantityCounter
          quantity={quantity}
          handleAdd={handleAdd}
          handleDelete={handleDelete}
        />
        <p className="text-center w-32">{`${product.price} EGP`}</p>
        <div className="flex items-center">
          <WishlistButton
            size={30}
            productId={product._id}
            userId={session.user.id}
          />
          <button
            className="action_btn border border-blue-950 max-sm:text-sm"
            onClick={handleDeleteAll}
          >
            Remove
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartItemCard;
