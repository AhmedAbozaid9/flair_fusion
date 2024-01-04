"use client";
import ProductsList from "@components/products/ProductsList";
import axios from "axios";
import { useSearchParams } from "next/navigation";
import React, { useEffect, useState } from "react";

import { categories } from "@constants/categories";
import Filter from "@components/products/Filter";

const page = () => {
  const searchParams = useSearchParams();
  const searchTerm = searchParams.get("searchTerm");
  const category = searchParams.get("category");

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
  }, [page, searchTerm, category]);

  return (
    <>
      <Filter categories={categories} />
      <ProductsList
        products={products}
        count={count}
        isLoading={isLoading}
        setPage={setPage}
      />
    </>
  );
};

export default page;
