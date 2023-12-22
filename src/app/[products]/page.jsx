import ProductsBrowser from "@components/products/ProductsBrowser";
import React from "react";

const Page = ({ params }) => {
  return <ProductsBrowser type={params.products} />;
};

export default Page;
