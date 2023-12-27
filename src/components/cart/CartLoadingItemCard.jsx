import React from "react";

const CartLoadingItemCard = ({ count }) => {
  const nums = Array.from({ length: count }, (_, index) => index);

  return (
    <>
      {nums.map((_, idx) => (
        <div className="flex flex-col ">
          <div className="flex max-sm:flex-col sm:items-center sm:justify-between h-full my-4">
            <div className="flex gap-5">
              <div className="w-24 h-24 sm:w-32 sm:h-32 bg-gray-200 animate-pulse" />
              <div>
                <div className="w-44 sm:w-64 h-4 bg-gray-200 animate-pulse" />
                <div className="w-36 sm:w-52 h-2 bg-gray-200 animate-pulse mt-3" />
                <div className="w-28 sm:w-44 h-2 bg-gray-200 animate-pulse mt-3" />
              </div>
            </div>
          </div>
          {!(nums.length - 1 === idx) && (
            <div className="my-4 w-full h-[0.5px] bg-gray-300" />
          )}
        </div>
      ))}
    </>
  );
};
export default CartLoadingItemCard;
