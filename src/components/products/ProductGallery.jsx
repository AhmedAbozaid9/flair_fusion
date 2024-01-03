import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const ProductGallery = ({ images, transitionTime }) => {
  const [shownIndex, setShownIndex] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShownIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    }, transitionTime || 5000);
    return () => clearTimeout(timer);
  }, [shownIndex]);

  return (
    <div className="flex flex-col items-center">
      <AnimatePresence mode="wait" initial={false}>
        <motion.img
          key={shownIndex}
          src={images[shownIndex]}
          alt={`Product Image ${shownIndex + 1}`}
          className="rounded-lg shadow-lg object-cover"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        />
      </AnimatePresence>
      <div className="mt-3 w-full flex gap-3 justify-center flex-wrap">
        {images.map((image, idx) => {
          const isActive = idx === shownIndex;
          return (
            <div className="relative">
              {isActive && (
                <div className="w-full h-full absolute top-0 left-0 bg-white opacity-60" />
              )}
              <img
                key={idx}
                src={image}
                alt="product image"
                className={`w-16 h-12 cursor-pointer ${isActive}`}
                onClick={() => setShownIndex(idx)}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ProductGallery;
