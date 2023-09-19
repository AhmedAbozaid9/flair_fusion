"use client";
import axios from "axios";
import React, { useEffect, useState } from "react";

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
  return <div>Carousel !</div>;
};

export default ProductsCarousel;
