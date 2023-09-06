import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import styles from "../../styles/singular.module.css";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import { FreeMode, Navigation, Thumbs } from "swiper/modules";

export default function SliderApps({ images1 }) {
  const dynamicImage = images1;

  console.log(dynamicImage, "dynamicImage");

  const [selectedImage, setSelectedImage] = useState(null);

  const [selectedData, setSelectedData] = useState(null);
  const [imageLoading, setImageLoading] = useState(true);
  const imageUrls = dynamicImage?.map((item) => (
    <img key={item} src={item} alt="" onLoad={() => setImageLoading(false)} />
  ));
  // console.log(imageUrls, "imageUrlsimageUrlsimageUrls");
  // const handleClick = (itemId) => {
  //   const selected = slideImg.find((item) => item._id === itemId);
  //   setSelectedData(selected);
  // };
  const handleClick = (image) => {
    setSelectedImage(image);
  };
  return (
    <>
      <Swiper
        style={{
          "--swiper-navigation-color": "transparent",
          "--swiper-pagination-color": "#fff",
        }}
        spaceBetween={10}
        navigation={true}
        modules={[Navigation, Thumbs]}
        className="mySwiper2"
        slidesPerView={1}
      >
        {selectedImage ? (
          <SwiperSlide>
            <img
              className={`${styles.scenery} object-cover`}
              src={selectedImage}
              alt=""
            />
          </SwiperSlide>
        ) : (
          images1?.map((item, index) => (
            <SwiperSlide key={index}>
              <img
                className={`${styles.scenery} object-cover`}
                src={item}
                alt=""
                onClick={() => handleClick(item)}
              />
            </SwiperSlide>
          ))
        )}
      </Swiper>
      <Swiper
        spaceBetween={10}
        slidesPerView={6}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[Navigation, Thumbs]}
        className="mySwiper"
      >
        {images1?.map((item, index) => (
          <SwiperSlide
            key={index}
            onClick={() => handleClick(item)}
            style={{ marginRight: "0px" }}
          >
            <img className={styles.smallimg} src={item} alt="" />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
