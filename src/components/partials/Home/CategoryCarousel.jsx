import React, { useState, useEffect } from "react";
import apiCall from "../../api/api";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";

import "./CategoryCarousel.css";

// import required modules
import { FreeMode, Navigation } from "swiper";

// Reacy-toastify
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function CategoryCarousel() {
  const [categories, setCategories] = useState([]);

  const getCategories = async () => {
    const response = await apiCall("/categories", "get");
    setCategories(response);
  };

  useEffect(() => {
    getCategories();
  }, []);

  const notify = () =>
    toast.warn("This feature is not included yet.", {
      position: "bottom-right",
    });

  return (
    <div onClick={notify} className="pt-2">
      <ToastContainer />
      <Swiper
        slidesPerView={"auto"}
        navigation={true}
        freeMode={true}
        modules={[FreeMode, Navigation]}
        className="mySwiper w-[90%]"
      >
        {categories.map((category, index) => {
          return (
            <SwiperSlide  key={index} >
              <div className="relative">
                <img
                  src={`${category.image}`}
                  alt="category-img"
                  className="mx-auto"
                />
                <div className="absolute bottom-1 left-0 right-0 text-yellow-200">
                  <span className="rounded-full bg-gray-700 bg-opacity-70 p-1 text-xs font-bold">
                    {category.name}
                  </span>
                </div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
}
