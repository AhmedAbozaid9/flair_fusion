"use client";
import { useSession } from "next-auth/react";
import React, { useEffect, useState } from "react";

import CartItemCard from "@components/cart/CartItemCard";
import CartLoadingItemCard from "@components/cart/CartLoadingItemCard";
import EmptyCart from "@components/cart/EmptyCart";
import axios from "axios";

const Page = () => {
  const [products, setProducts] = useState([]);
  const [price, setPrice] = useState(0);

  const [isLoading, setIsLoading] = useState(true);
  const { data: session } = useSession();

  useEffect(() => {
    (async () => {
      if (session) {
        const { data } = await axios.get(`/api/cart/${session.user.id}`);
        setProducts(data);

        setIsLoading(false);
      }
    })();
  }, [session]);

  useEffect(() => {
    const totalPrice = products.reduce((sum, item) => {
      const productPrice = parseFloat(item.product.price.replace(",", ""));
      const productTotal = productPrice * item.quantity;
      return sum + productTotal;
    }, 0);

    setPrice(totalPrice);
  }, [products]);
  const updateQuantity = async (productId, productQuanity) => {
    setProducts((prev) => {
      const updatedProduct = prev.find(
        (item) => item.product._id === productId
      );
      updatedProduct.quantity = productQuanity;
      return prev;
    });
  };

  return (
    <>
      <h1 className="sm:text-4xl text-3xl sm:my-4 my-2 mx-2 font-semibold">
        Shopping Cart
      </h1>
      <main className="flex max-lg:flex-col gap-3 mx-1">
        <section className="px-4 mt-4 border border-gray-300 rounded-md flex flex-col justify-center flex-1">
          {isLoading ? (
            <CartLoadingItemCard count={5} />
          ) : (
            <>
              {products.length > 0 ? (
                products.map((product, idx) => (
                  <div key={idx} className="flex flex-col">
                    <CartItemCard
                      product={product.product}
                      quantity={product.quantity}
                      updateQuantity={updateQuantity}
                      setProducts={setProducts}
                      setPrice={setPrice}
                    />
                    {!(products.length - 1 === idx) && (
                      <div className="my-4 w-full h-[0.5px] bg-gray-300" />
                    )}
                  </div>
                ))
              ) : (
                <EmptyCart />
              )}
            </>
          )}
        </section>
        <section className="p-4 mt-4 border border-gray-300 rounded-md flex h-full flex-col">
          <div>
            <p>Do you have a coupon ?</p>
            <div className="flex items-center mt-3">
              <input
                type="text"
                placeholder="Coupon code"
                className="border border-gray-300 outline-none p-2"
              />
              <button className="px-4 py-2 bg-blue-950 text-white">
                Apply
              </button>
            </div>
            <div className="my-4 w-full h-[0.5px] bg-gray-300" />
          </div>
          <div>
            <div className="flex items-center justify-between py-2">
              <p>Items Price : </p>
              <span className="font-semibold"> {`${price} EGP`}</span>
            </div>
            <div className="flex items-center justify-between py-2">
              <p>Shipping Price : </p>
              <span className="font-semibold">{`${30.0} EGP`}</span>
            </div>
            <div className="flex items-center justify-between py-2 ">
              <p>Total Price : </p>
              <span className="font-semibold">{`${price + 30.0} EGP`}</span>
            </div>
          </div>
          <button className="bg-blue-950 text-white px-4 py-2 mt-3">
            Checkout
          </button>
        </section>
      </main>
    </>
  );
};

export default Page;
