import React from "react";
import ImageGallery from "react-image-gallery";

const GalleryCarousel = ({ productImages }) => {
  const images = productImages?.map((image) => {
    return {
      original: image,
      thumbnail: image,
      originalHeight: "300",
      originalWidth: "200",
    };
  });
  console.log(images);
  return (
    <>
      {images && (
        <ImageGallery
          items={images}
          loading="lazy"
          showPlayButton={false}
          showFullscreenButton={false}
          showNav={false}
          originalHeight={100}
          originalWidth={200}
        />
      )}
    </>
  );
};

export default GalleryCarousel;
