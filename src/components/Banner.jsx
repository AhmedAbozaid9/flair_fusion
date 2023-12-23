import React from "react";
import Image from "next/image";
const Banner = () => {
  return (
    <div className="banner">
      <div className="dark_overlay" />
      <div className="banner_layout">
        <p className="bg-white text-blue-950 text-xs font-semibold rounded-full px-2 py-0.5">
          Sales up to <span className="text-wild_red ">30%</span>
        </p>
        <div className=" md:text-4xl lg:text-5xl text-3xl font-semibold ">
          Discover our <br />
          <span className="text-wild_red">New{` `}</span>
          Collection
        </div>
        <button className="action_btn mt-3">Buy Now Today</button>
      </div>
      <Image
        src={"assets/banner_pic.svg"}
        alt="banner_image"
        width={300}
        height={600}
      />
    </div>
  );
};

export default Banner;
