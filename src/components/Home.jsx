import apiCall from "./api/api";
import { useEffect, useState } from "react";

function Home() {
  const [companies, setCompanies] = useState([]);
  const [categories, setCategories] = useState([]);

  const getCategories = async () => {
    const response = await apiCall("/categories", "get");
    setCategories(response);
  };

  const getCompanies = async () => {
    const response = await apiCall("/companies", "get");
    setCompanies(response);
  };

  useEffect(() => {
    getCompanies();
    getCategories();
  }, []);

  return (
    <>
      {categories &&
        categories.map((category) => {
          return <p key={category.id}>{category.name}</p>;
        })}
      {companies &&
        companies.map((company) => {
          return <p key={company.id}>{company.name}</p>;
        })}
    </>
  );
}

export default Home;
