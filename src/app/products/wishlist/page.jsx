"use client";
import LoadingProductCards from "@components/products/LoadingProductCards";
import WishlistCard from "@components/products/WishlistCard";
import axios from "axios";
import { useSession } from "next-auth/react";
import React, { useEffect, useState } from "react";

const page = () => {
  const { data: session } = useSession();
  const [products, setProducts] = useState([]);
  const [isLoading, setIsloading] = useState(true);
  useEffect(() => {
    if (session) {
      (async () => {
        const { data } = await axios.get(`/api/wishlist/${session.user.id}`);
        setProducts(data);

        setIsloading(false);
      })();
    }
  }, [session]);

  const handleDeleteFromWishlist = async (id) => {
    setProducts((prev) => prev.filter((product) => product._id !== id));
    if (session) {
      try {
        await axios.delete(`/api/wishlist/${session.user.id}`, {
          data: {
            productId: id,
          },
        });
      } catch (e) {
        console.log(e);
      }
    }
  };

  return (
    <div className="mx-auto grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8">
      {isLoading ? (
        <LoadingProductCards count={5} />
      ) : (
        <>
          {products.map((product) => (
            <WishlistCard
              key={product._id}
              {...product}
              handleDeleteFromWishlist={handleDeleteFromWishlist}
            />
          ))}
        </>
      )}
    </div>
  );
};

export default page;
