import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

function Companies({ companies }) {
  return (
    <div className="grid-cols-1 md:grid-cols-2 grid gap-y-12 gap-8 mt-4">
      {companies.map((company, index) => (
        <div className="rounded-lg w-full max-w-[815px] mx-auto text-ellipsis truncate lg:hover:scale-105 ease-in-out duration-300 cursor-pointer overflow-hidden border shadow-lg">
          <NavLink key={index} to={`/${company.slug}`}>
            <div
              style={{
                backgroundImage: `url("${
                  company.background.substring(0, 4) === "http"
                    ? company.background
                    : process.env.REACT_APP_IMAGE_BASEURL + company.background
                }")`,
                backgroundSize: "100%",
                backgroundRepeat: "no-repeat",
              }}
              className="h-28 relative bg-cover bg-no-repeat"
            >
              {company.valoration >= 4.7 && (
                <span className="bg-green-500 text-white p-1 rounded-r-full absolute left-0 top-2">
                  {" "}
                  Trending restaurant{" "}
                </span>
              )}
            </div>
            <div className="text-left bg-white relative p-4">
              <h5 className="font-bold mb-1 truncate text-lg mr-12">
                {company.name}
              </h5>
              <span className="absolute right-2 top-6">
                {company.valoration}
                <FontAwesomeIcon
                  className="text-yellow-400 ml-1"
                  icon={faStar}
                />
              </span>
              <div>{company.estimated_time}</div>
            </div>
          </NavLink>
        </div>
      ))}
    </div>
  );
}

export default Companies;
