import ProductsBrowser from "@components/products/ProductsBrowser";
import React from "react";

const Page = ({ params }) => {
  console.log("aaa");
  return <ProductsBrowser type={params.type} />;
};

export default Page;
