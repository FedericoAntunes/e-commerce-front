import { NavLink } from "react-router-dom";
import { useEffect, useState } from "react";
import apiCall from "../../api/api";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "./CompaniesCarousel.css"

// import required modules
import { FreeMode, Navigation } from "swiper";

function CompaniesCarousel() {
  const [companies, setCompanies] = useState([]);

  const getCompanies = async () => {
    const response = await apiCall("/companies", "get");
    setCompanies(response);
  };

  useEffect(() => {
    getCompanies();
  }, []);

  return (
    <>
      <h3 className="font-bold text-yellow-600">Trending restaurants</h3>
      <Swiper
        slidesPerView={"auto"}
        navigation={true}
        freeMode={true}
        modules={[FreeMode, Navigation]}
        className="mySwiper"
      >
        {companies.map((company, index) => {
          return (
            <SwiperSlide className="mx-2" key={index}>
              <div className="">
                <div className="">
                  <div className="">
                    <NavLink to={`/${company.slug}`}>
                      <img
                        className="rounded-full"
                        src={`${company.logo}`}
                        alt="category-img"

                      />
                      <h2 className="">
                        {company.name}
                      </h2>
                    </NavLink >
                  </div>
                </div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </>
  );
}

export default CompaniesCarousel;
