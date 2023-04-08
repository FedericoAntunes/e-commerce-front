import CategoryCarousel from "./partials/Home/CategoryCarousel";
import Companies from "./partials/Home/Companies";
import Filters from "./partials/Home/Filters";
import Hero from "./partials/Hero";
import apiCall from "./api/api";
import { useEffect } from "react";
import { useOutletContext } from "react-router-dom";

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

      <CategoryCarousel category={category} setCategory={setCategory} />

      {/* <Filters /> */}

      <Companies companies={companies} />
    </>
  );
}

export default Home;
