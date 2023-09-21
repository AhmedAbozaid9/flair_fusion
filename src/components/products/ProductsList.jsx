"use client";
import axios from "axios";
import React, { useState, useEffect } from "react";
import ProductCard from "./ProductCard";

const ProductsList = ({ type }) => {
  const [products, setProducts] = useState([]);
  const [count, setCount] = useState(0);
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    (async () => {
      setIsLoading(true);
      const { data } = await axios.get("api/products/", {
        params: { type, page },
      });
      setIsLoading(false);
      setProducts((prev) => [...prev, ...data.products]);
      setCount(data.productsCount);
    })();
  }, [type, page]);
  return (
    <div className="mx-auto">
      <div className="self-start">
        <h2 className="text-gray-500 my-2">{count} Products</h2>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8">
        {products.map((product) => (
          <ProductCard key={product._id} {...product} />
        ))}
      </div>
      <div className="flex mx-auto flex-col">
        <button
          className="w-fit mx-auto py-4 px-20 hover:bg-white hover:text-blue-950 my-10 bg-blue-950 hover:border-2 hover:border-blue-950 text-white"
          onClick={() => setPage((prev) => prev + 1)}
        >
          See More
        </button>
        <p className="text-center">
          {products.length} Products out of {count}
        </p>
        <div className="h-10"></div>
      </div>
    </div>
  );
};

export default ProductsList;
