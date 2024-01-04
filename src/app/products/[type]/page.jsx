"use client";
import React, { useState, useEffect } from "react";
import axios from "axios";

import ProductsList from "@components/products/ProductsList";

const Page = ({ params }) => {
  const type = params.type;

  const [products, setProducts] = useState([]);
  const [count, setCount] = useState(0);
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    (async () => {
      const { data } = await axios.get(`/api/${type}`, {
        params: { page },
      });
      setIsLoading(false);
      setProducts((prev) => [...prev, ...data.products]);
      setCount(data.productsCount);
    })();
  }, [type, page]);

  return (
    <ProductsList
      products={products}
      count={count}
      isLoading={isLoading}
      setPage={setPage}
    />
  );
};

export default Page;
