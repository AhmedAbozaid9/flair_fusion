import ProductsList from "@components/products/ProductsList";
import React from "react";

const Page = ({ params }) => {
  return <ProductsList type={params.type} />;
};

export default Page;
