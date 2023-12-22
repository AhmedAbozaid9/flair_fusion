"use client";
import GalleryCarousel from "@components/GalleryCarousel";
import axios from "axios";
import React, { useState, useEffect } from "react";

const page = ({ params }) => {
  const productId = params.product;
  const [product, setProduct] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  const images = product?.images?.map((image) => {
    return { original: image, thumbnail: image };
  });

  useEffect(() => {
    (async () => {
      const { data } = await axios.get(`/api/product/${productId}`);
      setProduct(data);
      setIsLoading(false);
    })();
  }, [productId]);
  return (
    <>
      <section className="flex">
        <GalleryCarousel productImages={product.images} />
        <div>
          <h2 className="text-3xl font-semibold">{product.title}</h2>
          <p>{product.desc}</p>
          <p>
            Price : <span>{product.price}</span>
          </p>
        </div>
      </section>
    </>
  );
};

export default page;
