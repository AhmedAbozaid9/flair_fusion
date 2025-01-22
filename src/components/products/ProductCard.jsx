import useToast from "@hooks/useToast";
import axios from "axios";
import { useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

function ProductCard({ title, price, images, _id }) {
  const [imageError, setImageError] = useState(false);
  console.log("imageError", imageError);
  const { data: session } = useSession();
  const { showToast } = useToast();
  const handleAddToCart = async () => {
    showToast("Added to cart!");

    if (session) {
      try {
        await axios.post(`/api/cart/${session.user.id}`, {
          productId: _id,
        });
      } catch (e) {
        console.log(e);
      }
    }
  };
  return (
    <div className="cursor-pointer flex flex-col gap-2 items-center justify-center w-36 sm:w-60 h-[310px] sm:h-[450px]">
      <Link href={"/" + _id} className="w-full">
        <div className="relative w-full h-48 sm:h-80">
          <Image
            onErrorCapture={() => setImageError(true)}
            src={"/assets/productPlaceholder.png"}
            fill={true}
            className="object-cover"
            alt={title}
            sizes="(max-width: 240px) (max-height: 320px)"
          />
        </div>
        <h3 className="w-full py-2 truncate ...">{title}</h3>
        <p className="text-pastel_red pb-2">{price} EGP</p>
      </Link>
      <button
        className="w-full bg-pastel_red text-white py-2 text-sm sm:text-md rounded-sm"
        onClick={handleAddToCart}
      >
        Add To Cart
      </button>
      <div></div>
    </div>
  );
}

export default ProductCard;
