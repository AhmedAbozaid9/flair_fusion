import ProductsList from "./ProductsList";

const ProductsBrowser = ({ type }) => {
  return (
    <div className="flex flex-col mx-auto w-full overflow-x-hidden">
      <ProductsList type={type} />
    </div>
  );
};

export default ProductsBrowser;
