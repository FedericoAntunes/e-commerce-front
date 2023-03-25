import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import apiCall from "../../api/api";

function Companies() {
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
      <div class="flex flex-wrap justify-center">
        {companies &&
          companies.map((company) => {
            return (
              <div
                key={company.id}
                class="w-full max-w-md mx-4 mb-8 overflow-hidden"
              >
                <Link to={`/${company.slug}`}>
                  <div class="bg-gray-300 rounded-lg shadow-lg overflow-hidden transition duration-500 transform hover:-translate-y-1 hover:scale-105 shadow">
                    <div class="p-4 flex justify-center">
                      <img
                        class="h-40 rounded-full"
                        src={`${company.logo}`}
                        alt="category-img"
                      />

                      <p class="text-gray-400">{company.description}</p>
                    </div>
                    <h2 class="text-xl font-bold mt-4 text-dark">
                        {company.name}
                      </h2>
                  </div>
                </Link>
              </div>
            );
          })}
      </div>
    </>
  );
}

export default Companies;
