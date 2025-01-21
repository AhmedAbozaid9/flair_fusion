"use client";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/css";
import axios from "axios";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import LoadingProductCards from "./LoadingProductCards";
import ProductCard from "./ProductCard";

const ProductsCarousel = ({ type }) => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    (async () => {
      const { data } = await axios.get(`api/${type}`);
      setProducts(data.products);

      setIsLoading(false);
    })();
  }, []);

  return (
    <div className="w-full mx-auto my-6 md:my-16">
      <div className="flex justify-between items-center pb-3 mb-6 border-b-2">
        <h3 className="text-xl sm:text-2xl font-bold text-blue-950">
          {type.charAt(0).toUpperCase() + type.slice(1)}
        </h3>
        <Link href={`products/${type}`} className="text-pastel_red">
          See more
        </Link>
      </div>
      <Splide
        options={{
          autoWidth: true,
          pagination: false,
          type: "loop",
          arrows: false,
          autoplay: true,
          interval: 3500,
        }}
      >
        {isLoading ? (
          <LoadingProductCards count={5} isCarousel={true} />
        ) : (
          products.map((product) => (
            <SplideSlide key={product._id}>
              <div className="sm:px-4 px-2">
                <ProductCard {...product} type={type} />
              </div>
            </SplideSlide>
          ))
        )}
      </Splide>
    </div>
  );
};

export default ProductsCarousel;
