"use client";
import React, { useEffect, useState } from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/css";
import ProductCard from "./ProductCard";
import Link from "next/link";
import axios from "axios";



const ProductsCarousel = ({title,link}) => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    (async () => {
      const response = await axios.get('api/products',{
          params:{
              type:link
          }
      });
      setProducts(response.data);
    })();
  }, []);
    console.log(products)
  return (
      <div className="w-full max-w-7xl mx-auto my-6 md:my-16">
        <div className="flex justify-between items-center pb-3 mb-6 border-b-2">
          <h3 className="text-2xl font-bold text-blue-950">{title}</h3>
          <Link href={link} className="text-pastel_red">See more</Link>
        </div>
        <Splide options={{ autoWidth: true, pagination: false, type:"loop", arrows:false, autoplay:true,interval:2000 }}>
          {
            products.map((product) => (
                    <SplideSlide key={product._id} >
                      <ProductCard {...product} />
                    </SplideSlide>
                )
            )}
        </Splide>
      </div>
  )
};

export default ProductsCarousel;
