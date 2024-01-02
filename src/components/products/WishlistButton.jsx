"use client";
import axios from "axios";
import React, { useEffect } from "react";
import { AiOutlineHeart } from "react-icons/ai";

const WishlistButton = ({ size, productId, userId }) => {

  const handleAdd = async () => {
    await axios.post(`/api/wishlist/${userId}`, {
      productId,
    });
  };
  return (
    <button className="mx-2  text-blue-950" onClick={handleAdd}>
      <AiOutlineHeart size={size} />
    </button>
  );
};

export default WishlistButton;
