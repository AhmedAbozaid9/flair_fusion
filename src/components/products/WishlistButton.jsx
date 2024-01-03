"use client";
import useToast from "@hooks/useToast";
import axios from "axios";
import React from "react";
import { AiOutlineHeart } from "react-icons/ai";

const WishlistButton = ({ size, productId, userId }) => {
  const { showToast } = useToast();

  const handleAdd = async () => {
    await axios.post(`/api/wishlist/${userId}`, {
      productId,
    });
    showToast("Added to wishlist!");
  };
  return (
    <button className="mx-2  text-blue-950" onClick={handleAdd}>
      <AiOutlineHeart size={size} />
    </button>
  );
};

export default WishlistButton;
