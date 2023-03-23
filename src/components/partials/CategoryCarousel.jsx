import React, { useRef, useState, useEffect } from "react";
import apiCall from "../api/api";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";

import "./CategoryCarousel.css";

// import required modules
import { FreeMode, Navigation } from "swiper";

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
        slidesPerView={"auto"}
        navigation={true}
        freeMode={true}
        modules={[FreeMode, Navigation]}
        className="mySwiper"
      >
        {categories.map((category) => {
          return (
            <SwiperSlide key={category.id} className={"bg-black"}>
              <div className="relative">
                <img
                  src={`${category.image}`}
                  alt="category-img"
                  className="mx-auto"
                />
                <div className="absolute bottom-1 left-0 right-0 text-yellow-200">
                  <span className="rounded-full bg-gray-700 bg-opacity-70 p-1 text-sm font-bold">
                    {category.name}
                  </span>
                </div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </>
  );
}
