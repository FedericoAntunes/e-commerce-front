import { useState } from "react";
import { Link, Outlet } from "react-router-dom";

// Components
import AboutBtn from "../partials/Header/AboutBtn";
import Header from "../partials/Header";
import Footer from "../partials/Footer";

function Layout() {
  const [category, setCategory] = useState("");
  const [companies, setCompanies] = useState([]);

  return (
    <>
      <div>
        <Link to={"/about-us"}>
          <AboutBtn />
        </Link>
        <div>
          <Header />
        </div>
        <main className="min-h-[90vh]">
          <Outlet context={[category, setCategory, companies, setCompanies]} />
        </main>
        <div>
          <Footer />
        </div>
      </div>
    </>
  );
}

export default Layout;
