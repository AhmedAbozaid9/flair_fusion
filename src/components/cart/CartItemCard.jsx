import React, { useEffect, useState } from "react";
import Image from "next/image";
import { AiOutlineHeart } from "react-icons/ai";

import QuantityCounter from "./QuantityCounter";
import axios from "axios";
import { useSession } from "next-auth/react";

const CartItemCard = ({ productId, count, setProducts, setPrice }) => {
  const { data: session } = useSession();

  const [product, setProduct] = useState();
  const [quantity, setQuantity] = useState(count);

  useEffect(() => {
    (async () => {
      const { data } = await axios.get(`/api/product/${productId}`);
      setProduct(data);
      setPrice(
        (prev) => prev + parseFloat(data.price.replace(",", "")) * count
      );
    })();
  }, [productId]);

  const handleAdd = async () => {
    setQuantity((prev) => prev + 1);
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

  const handleDelete = async (existingQuantity) => {
    console.log(product);

    setQuantity((prev) => prev - 1);
    setPrice(
      (prev) =>
        prev - parseFloat(product.price.replace(",", "")) * existingQuantity
    );

    if (quantity < 2) {
      setProducts((prev) =>
        prev.filter((product) => product.productId !== productId)
      );
    }
    if (session) {
      try {
        await axios.delete(`api/cart/${session.user.id}`, {
          data: {
            productId: product._id,
            deleteQuantity: existingQuantity,
          },
        });
      } catch (e) {
        console.log(e);
      }
    }
  };
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
            <QuantityCounter
              quantity={quantity}
              handleAdd={handleAdd}
              handleDelete={handleDelete}
            />
            <p className="text-center w-32">{`${product.price} EGP`}</p>
            <div className="flex items-center">
              <button className="mx-2  text-blue-950">
                <AiOutlineHeart size={30} />
              </button>
              <button
                className="action_btn border border-blue-950 max-sm:text-sm"
                onClick={() => {
                  setQuantity(1);
                  setProducts((prev) =>
                    prev.filter((product) => product.productId !== productId)
                  );
                  handleDelete(quantity);
                }}
              >
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
