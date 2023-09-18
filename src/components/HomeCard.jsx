import React from "react";

const HomeCard = ({ title, bg }) => {
  return (
    <div
      className={`${bg} w-[320px] h-[200px] rounded-sm flex items-center justify-center relative`}
    >
      <button className=" z-10 action_btn">{title}</button>
      <div className="absolute opacity-50 w-full h-full bg-wild_red top-0 left-0" />
    </div>
  );
};

export default HomeCard;
