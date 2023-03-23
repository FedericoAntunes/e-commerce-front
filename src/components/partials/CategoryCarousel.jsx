import React, { useRef, useState, useEffect } from "react";
import apiCall from "../api/api";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

//import "./styles.css";

// import required modules
import { FreeMode, Pagination } from "swiper";

export default function CategoryCarousel() {
  const [categories, setCategories] = useState([]);

  const getCategories = async () => {
    const response = await apiCall("/categories", "get");
    setCategories(response);
  };

  useEffect(() => {
    getCategories();
  }, []);
  return (
    <>
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        freeMode={true}
        loop={true}
        autoPlay={true}
        pagination={{
          clickable: true,
        }}
        modules={[FreeMode, Pagination]}
        className="mySwiper"
      >
        {categories.map((category) => {
          return (
            <SwiperSlide key={category.id} className="bg-gray-700">
              <img src={`${category.image}`} alt="category-img" />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </>
  );
}
