"use client";
import axios from "axios";
import React, { useState, useEffect } from "react";

import ProductGallery from "@components/productPage/ProductGallery";
import BreadCrumb from "@components/productPage/BreadCrumb";
import WishlistButton from "@components/products/WishlistButton";

const page = ({ params }) => {
  const productId = params.product;
  const [product, setProduct] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    (async () => {
      const { data } = await axios.get(`/api/product/${productId}`);
      setProduct(data);
      setIsLoading(false);
    })();
  }, [productId]);
  return (
    <>
      {isLoading ? (
        "loading"
      ) : (
        <section className="mx-auto px-2">
          <BreadCrumb
            gender={product.gender}
            type={product.type}
            category={product.category}
          />
          <div className="flex flex-col lg:flex-row gap-5">
            <ProductGallery images={product.images} />
            <div>
              <h2 className="text-3xl font-semibold">{product.title}</h2>
              <p className="mt-5 text-lg text-blue-950 font-medium">
                {product.price} EGP
              </p>
              <p className="text-gray-400">Inclusive of VAT</p>
              <div>
                <div className="flex gap-5 items-center">
                  <button
                    className="w-full bg-pastel_red text-white py-2 text-sm sm:text-md rounded-sm"
                    onClick={handleAddToCart}
                  >
                    Add To Cart
                  </button>
                  <WishlistButton />
                </div>
              </div>
              <p className="mt-5 max-w-xl">{product.desc}</p>
            </div>
          </div>
        </section>
      )}
    </>
  );
};

export default page;
