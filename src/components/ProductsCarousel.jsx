"use client";
import React, { useEffect, useState } from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/css";
import ProductCard from "./ProductCard";
import Link from "next/link";

const ProductsCarousel = ({title,link}) => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    (async () => {
      const response = await fetch("/api/products");
      const data = await response.json();
      setProducts(data);
    })();
  }, []);
  return (
      <div className="w-full max-w-7xl mx-auto my-6 md:my-16">
        <div className="flex justify-between items-center pb-3 mb-6 border-b-2">
          <h3 className="text-2xl font-bold text-blue-950">{title}</h3>
          <Link href={link} className="text-pastel_red">See more</Link>
        </div>
        <Splide options={{ autoWidth: true, pagination: false }}>
          {
            products.map((product) => (
                    <SplideSlide key={product.id}>
                      <ProductCard {...product} />
                    </SplideSlide>
                )
            )}
        </Splide>
      </div>
  )
};

export default ProductsCarousel;
