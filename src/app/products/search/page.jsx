"use client";
import ProductsList from "@components/products/ProductsList";
import axios from "axios";
import { useSearchParams } from "next/navigation";
import React, { useEffect, useState } from "react";

import { categories } from "@constants/categories";
import Filter from "@components/search/Filter";

const page = () => {
  const searchParams = useSearchParams();
  const searchTerm = searchParams.get("searchTerm");

  const [products, setProducts] = useState([]);
  const [count, setCount] = useState(0);
  const [page, setPage] = useState(1);
  const [category, setCategory] = useState(searchParams.get("category") || "");
  const [isLoading, setIsLoading] = useState(true);

  console.log(category);

  useEffect(() => {
    (async () => {
      const { data } = await axios.get("/api/search/", {
        params: {
          page,
          searchTerm,
          category,
        },
      });

      setIsLoading(false);
      setProducts((prev) => [...prev, ...data.products]);
      setCount(data.productsCount);
    })();
  }, [page]);

  useEffect(() => {
    (async () => {
      setProducts([]);
      setIsLoading(true);
      const { data } = await axios.get("/api/search/", {
        params: {
          page,
          searchTerm,
          category,
        },
      });

      setIsLoading(false);
      setProducts(data.products);
      setCount(data.productsCount);
    })();
  }, [searchTerm, category]);

  return (
    <>
      <Filter categories={categories} setCategory={setCategory} />
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
