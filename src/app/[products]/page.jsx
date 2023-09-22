import ProductsBrowser from "@components/products/ProductsBrowser";
import React from "react";

const Page = ({ params }) => {
  console.log(params.products);
  return <ProductsBrowser type={params.products} />;
};

export default Page;
