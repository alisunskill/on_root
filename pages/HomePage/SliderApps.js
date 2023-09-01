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

export default function SliderApps({ images }) {
  const dynamicImage = images;
  console.log(dynamicImage, "dynamicImage");
  // Assuming you have your static images defined like this
  const slideImg = [
    {
      id: "dynamic",
      img: images,
    },
    {
      id: "3",
      img: "https://swiperjs.com/demos/images/nature-3.jpg",
    },
    {
      id: "5",
      img: "https://swiperjs.com/demos/images/nature-5.jpg",
    },
    {
      id: "6",
      img: "https://swiperjs.com/demos/images/nature-6.jpg",
    },
    {
      id: "7",
      img: "https://swiperjs.com/demos/images/nature-7.jpg",
    },
    {
      id: "8",
      img: "https://swiperjs.com/demos/images/nature-8.jpg",
    },
  ];

  const [selectedData, setSelectedData] = useState(null);

  const handleClick = (itemId) => {
    const selected = slideImg.find((item) => item.id === itemId);
    // console.log(selected, "ali");
    setSelectedData(selected);
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
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper2"
        slidesPerView={1}
      >
        {selectedData ? (
          <SwiperSlide>
            <img className={` ${styles.scenery}`} src={selectedData.img} />
          </SwiperSlide>
        ) : (
          <SwiperSlide>
            <img className={` ${styles.scenery}`} src={dynamicImage} />
          </SwiperSlide>
        )}
        {/* {slideImg.slice(1).map((item) => (
          <SwiperSlide>
            <img className={` ${styles.scenery}`} src={item.img} />
          </SwiperSlide>
        ))} */}
      </Swiper>
      <Swiper
        spaceBetween={10}
        slidesPerView={6}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper"
      >
        {slideImg.map((item) => (
          <SwiperSlide
            key={item.id}
            onClick={() => handleClick(item.id)}
            style={{ marginRight: "0px" }}
          >
            <img className={styles.smallimg} src={item.img} />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
