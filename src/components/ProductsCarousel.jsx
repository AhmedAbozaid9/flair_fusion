"use client";
import axios from "axios";
import React, { useEffect, useState } from "react";
import ProductCard from "./ProductCard";

const ProductsCarousel = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    (async () => {
      const response = await fetch("/api/products");
      const data = await response.json();
      setProducts(data);
    })();
  }, []);
  console.log(products);
  return (
    <div className="flex flex-wrap gap-5 items-center justify-center">
      {products.map((product) => (
        <ProductCard key={product._id} {...product} />
      ))}
    </div>
  );
};

export default ProductsCarousel;
