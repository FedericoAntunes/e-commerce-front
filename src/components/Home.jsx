import { useEffect } from "react";
import { useOutletContext } from "react-router-dom";

// Components
import CategoryCarousel from "./partials/Home/CategoryCarousel";
import Companies from "./partials/Home/Companies";
import Hero from "./partials/Hero";
import CompaniesLoader from "./partials/loaders/CompaniesLoader";
import CategoriesLoader from "./partials/loaders/CategoriesLoader";

// ApiCall
import apiCall from "./api/api";
import Loader from "./partials/loaders/Loader";

function Home() {
  const [category, setCategory, companies, setCompanies] = useOutletContext();

  const getCompanies = async () => {
    const response = await apiCall("/companies", "get");
    setCompanies(response.data);
  };

  useEffect(() => {
    getCompanies();
    // eslint-disable-next-line
  }, []);

  return (
    <>
      <Hero />
      {companies.length < 0 ? (
        <>
          <CategoryCarousel category={category} setCategory={setCategory} />
          <Companies companies={companies} />
        </>
      ) : (
        <>
          <Loader />
          <CategoriesLoader />
          <CompaniesLoader />
        </>
      )}
    </>
  );
}

export default Home;
