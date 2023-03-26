import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import apiCall from "../../api/api";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";

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
        slidesPerView={4}
        navigation={true}
        freeMode={true}
        modules={[FreeMode, Navigation]}
        className="w-full h-40"
      >
        {companies.map((company, index) => {
          return (
            <SwiperSlide className="h-32" key={index}>
              <div className="w-full max-w-md mx-4 mb-8">
                <div className="rounded-lg h-32 relative transition duration-500 transform hover:-translate-y-1 hover:scale-105">
                  <div className="p-4 pb-6 flex justify-center">
                    <Link to={`/${company.slug}`}>
                      <img
                        className="h-24 mx-auto rounded-full"
                        src={`${company.logo}`}
                        alt="category-img"
                      />
                      <h2 className="text-sm -bottom-3 font-bold text-dark">
                        {company.name}
                      </h2>
                    </Link>
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
