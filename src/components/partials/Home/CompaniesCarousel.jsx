import { NavLink } from "react-router-dom";
import { useEffect, useState } from "react";
import apiCall from "../../api/api";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "./CompaniesCarousel.css";

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
        <div className="flex flex-wrap justify-center my-2">
        {companies.map((company, index) => {
          return (
            <div className="mx-2" key={index}>
              <NavLink className="" to={`/${company.slug}`}>
                <img
                  className="rounded-full h-24 w-24 mx-auto shadow-xl"
                  src={`${company.logo}`}
                  alt="category-img"
                />
              </NavLink>
              <h2 className="font-bold">{company.name}</h2>
            </div>
          );
        })}
        </div>
    
    </>
  );
}

export default CompaniesCarousel;
