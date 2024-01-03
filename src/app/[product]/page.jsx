"use client";
import axios from "axios";
import React, { useState, useEffect } from "react";

import ProductGallery from "@components/products/ProductGallery";

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
        <section className="flex flex-col lg:flex-row">
          <ProductGallery images={product.images} />
          <div>
            <h2 className="text-3xl font-semibold">{product.title}</h2>
            <p>{product.desc}</p>
            <p>
              Price : <span>{product.price}</span>
            </p>
          </div>
        </section>
      )}
    </>
  );
};

export default page;
