"use client";
import React, { useEffect, useState } from "react";
import { useSession } from "next-auth/react";

import CartItemCard from "@components/cart/CartItemCard";
import EmptyCart from "@components/cart/EmptyCart";
import axios from "axios";
import CartLoadingItemCard from "@components/cart/CartLoadingItemCard";

const Page = () => {
  const [products, setProducts] = useState([]);
  const [price, setPrice] = useState(0);

  const [isLoading, setIsLoading] = useState(true);
  const { data: session } = useSession();

  useEffect(() => {
    (async () => {
      if (session) {
        const { data } = await axios.get(`/api/cart/${session.user.id}`);
        setIsLoading(false);
        setProducts(data);
      }
    })();
  }, [session]);

  return (
    <>
      <h1 className="sm:text-4xl text-3xl sm:my-4 my-2 mx-2 font-semibold">
        Shopping Cart
      </h1>
      <main className="flex max-lg:flex-col gap-3 mx-1">
        <section className="px-4 mt-4 border border-gray-300 rounded-md flex flex-col just flex-1">
          {isLoading ? (
            <CartLoadingItemCard count={5} />
          ) : (
            <>
              {products.length > 0 ? (
                products.map((product, idx) => (
                  <div key={product.productId} className="flex flex-col">
                    <CartItemCard
                      {...product}
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
