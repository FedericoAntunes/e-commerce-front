import CategoryCarousel from "./partials/Home/CategoryCarousel";
import Companies from "./partials/Home/Companies";
import Filters from "./partials/Home/Filters";
import Hero from "./partials/Hero";
import apiCall from "./api/api";
import { useEffect } from "react";
import { useOutletContext } from "react-router-dom";
import CompaniesLoader from "./partials/loaders/CompaniesLoader";
import CategoriesLoader from "./partials/loaders/CategoriesLoader";

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

      {companies.length > 0 ? (
        <>
          <CategoryCarousel category={category} setCategory={setCategory} />
          <Companies companies={companies} />
        </>
      ) : (
        <>
          <CategoriesLoader />
          <CompaniesLoader />
        </>
      )}
    </>
  );
}

export default Home;
