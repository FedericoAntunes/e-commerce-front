import { NavLink } from "react-router-dom";

function Companies({ companies }) {
  return (
    <div className="grid-cols-1 sm:grid-cols-2 mx-4 grid gap-x-2 gap-y-8 border-t pt-8 mt-4">
      {companies.map((company, index) => (
        <NavLink key={index} to={`/${company.slug}`}>
          <div className="mx-2">
            <div
              style={{ backgroundImage: `url("${company.background}")` }}
              className="h-28"
            ></div>
            <div className="text-left">
              <h5 className="font-bold text-lg">{company.name}</h5>
              <div>50-60min</div>
            </div>
          </div>
        </NavLink>
      ))}
    </div>
  );
}

export default Companies;
