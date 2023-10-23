"use client";
import React, { useEffect, useState } from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/css";
import ProductCard from "./ProductCard";
import Link from "next/link";
import axios from "axios";
import LoadingProductCards from "./LoadingProductCards";

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
        <Link href={type} className="text-pastel_red">
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
          interval: 2000,
        }}
      >
        {isLoading ? (
          <LoadingProductCards count={5} isCarousel={true} />
        ) : (
          products.map((product) => (
            <SplideSlide key={product._id}>
              <div className="sm:px-4 px-2">
                <ProductCard {...product} />
              </div>
            </SplideSlide>
          ))
        )}
      </Splide>
    </div>
  );
};

export default ProductsCarousel;
