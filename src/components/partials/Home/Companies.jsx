import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

function Companies({ companies }) {
  return (
    <div className="grid-cols-1 sm:grid-cols-2 mx-4 lg:mx-24 grid gap-x-8 gap-y-12 border-t pt-16 mt-16">
      {companies.map((company, index) => (
        <NavLink key={index} to={`/${company.slug}`}>
          <div className="rounded-lg overflow-hidden border shadow-lg lg:hover:scale-105 ease-in-out duration-300 cursor-pointer">
            <div
              style={{
                backgroundImage: `url("${
                  company.background.substring(0, 4) === "http"
                    ? company.background
                    : process.env.REACT_APP_IMAGE_BASEURL + company.background
                }")`,
              }}
              className="h-28 relative bg-cover bg-no-repeat"
            >
              {company.valoration >= 4.7 && (
                <span className="bg-green-500 md:font-semibold text-white rounded-r-full absolute left-0 top-2 py-1 px-3">
                  {" "}
                  Trending restaurant{" "}
                </span>
              )}
            </div>
            <div className="text-left bg-white relative p-4">
              <h5 className="font-bold mb-1 text-lg mr-12 truncate">
                {company.name}
              </h5>
              <span className="absolute right-2 top-6 font-bold">
                {company.valoration === 0 ? "-" : company.valoration}
                <FontAwesomeIcon
                  className="text-yellow-400 ml-1"
                  icon={faStar}
                />
              </span>
              <div>{company.estimated_time}</div>
            </div>
          </div>
        </NavLink>
      ))}
    </div>
  );
}

export default Companies;
