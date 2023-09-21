import ProductsBrowser from "@components/products/ProductsBrowser";
import React from "react";

const Page = () => {
  return (
    <div>
      <ProductsBrowser type={"trending"} />
    </div>
  );
};

export default Page;
