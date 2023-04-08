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
import "react-toastify/dist/ReactToastify.css";
import { NavLink } from "react-router-dom";

export default function CategoryCarousel() {
  const [categories, setCategories] = useState([]);

  const getCategories = async () => {
    const response = await apiCall("/categories", "get");
    setCategories(response.data);
  };

  useEffect(() => {
    getCategories();
  }, []);

  return (
    <div className="pt-2 my-16 px-4 w-full mx-auto">
      <h4 className="text-left mb-12 border-t pt-6 text-3xl font-semibold">
        Explore by category
      </h4>
      <Swiper
        slidesPerView={"auto"}
        navigation={true}
        freeMode={true}
        modules={[FreeMode, Navigation]}
        className="mySwiper cursor-pointer"
      >
        {categories.map((category, index) => {
          return (
            <SwiperSlide key={index}>
              <NavLink to={`/category/${category.slug}`}>
                <div className="rounded-lg overflow-hidden relative mx-2 bg-gray-200 flex">
                  <div className="flex items-center text-black">
                    <div className="font-sm max-w-[80px] ml-3 align-middle font-bold">
                      {category.name}
                    </div>
                  </div>
                  <img
                    src={`${category.image}`}
                    alt="category-img"
                    className="ml-auto h-20"
                  />
                </div>
              </NavLink>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
}
