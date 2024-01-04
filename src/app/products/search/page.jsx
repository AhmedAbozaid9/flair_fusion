"use client";
import ProductsList from "@components/products/ProductsList";
import axios from "axios";
import { useSearchParams } from "next/navigation";
import React, { useEffect, useState } from "react";

const page = () => {
  const searchParams = useSearchParams();
  const searchTerm = searchParams.get("searchTerm");

  const [products, setProducts] = useState([]);
  const [count, setCount] = useState(0);
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    (async () => {
      const { data } = await axios.get("/api/search/", {
        params: {
          page: page,
          searchTerm: searchTerm,
        },
      });

      setIsLoading(false);
      setProducts((prev) => [...prev, ...data.products]);
      setCount(data.productsCount);
    })();
  }, [page, searchTerm]);

  console.log(products);
  return (
    <ProductsList
      products={products}
      count={count}
      isLoading={isLoading}
      setPage={setPage}
    />
  );
};

export default page;
