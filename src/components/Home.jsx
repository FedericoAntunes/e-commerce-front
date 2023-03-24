import apiCall from "./api/api";
import { useEffect, useState } from "react";
import CategoryCarousel from "./partials/CategoryCarousel";
import { Link } from "react-router-dom";

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
      <CategoryCarousel />
<div class="flex flex-wrap justify-center bg-gray-900">
  {companies && companies.map((company) => {
    return (
      <div key={company.id} class="w-full max-w-md mx-4 mb-8 overflow-hidden">
        <Link to={`/${company.slug}`}>
          <div class="bg-gray-800 border border-gray-600 rounded-lg shadow-lg overflow-hidden transition duration-500 transform hover:-translate-y-1 hover:scale-105">
            <div class="p-4">
              <img class="object-contain w-full h-40" src={`${company.logo}`} alt="category-img" />
              <h2 class="text-xl font-bold mt-4 text-white">{company.name}</h2>
              <p class="text-gray-400">{company.description}</p>
            </div>
          </div>
        </Link>
      </div>
    );
  })}
</div>




    </>
  );
}

export default Home;
