"use client";
import React from "react";
import { SplideSlide } from "@splidejs/react-splide";

const LoadingProductCards = ({ count, isCarousel }) => {
  const nums = Array.from({ length: count }, (_, index) => index);

  return (
    <>
      {isCarousel
        ? nums.map((num) => (
            <SplideSlide>
              <div className="sm:mx-4 mx-2 h-[310px] sm:h-[450px] w-36 sm:w-60">
                <div
                  key={num}
                  className="bg-gray-200 animate-pulse h-[220px] sm:h-[350px]"
                ></div>
                <div className="bg-gray-200 animate-pulse w-20 sm:w-48 h-[10px] mt-4"></div>
                <div className="bg-gray-200 animate-pulse w-24 sm:w-56 h-[10px] mt-4"></div>
              </div>
            </SplideSlide>
          ))
        : nums.map((num) => (
            <div className="sm:px-4 px-2 h-[310px] sm:h-[450px] w-36 sm:w-60">
              <div
                key={num}
                className="bg-gray-200 animate-pulse h-[220px] sm:h-[350px]"
              ></div>
              <div className="bg-gray-200 animate-pulse w-20 sm:w-40 h-[15px] mt-4"></div>
              <div className="bg-gray-200 animate-pulse w-24 sm:w-48 h-[15px] mt-4"></div>
            </div>
          ))}
    </>
  );
};

export default LoadingProductCards;
