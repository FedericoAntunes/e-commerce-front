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
          return (
            <div key={category.id}>
              <img src={`${category.image}`} alt="category-img" />
            </div>
          );
        })}
      {companies &&
        companies.map((company) => {
          return (
            <div key={company.id}>
              <p>{company.name}</p>
              <img src={`${company.logo}`} alt="category-img" />
            </div>
          );
        })}
    </>
  );
}

export default Home;
