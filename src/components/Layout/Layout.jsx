import { Outlet } from "react-router-dom";
import Header from "../partials/Header";
import Footer from "../partials/Footer";
import { useState } from "react";
import AboutBtn from "../partials/Header/AboutBtn";
import { Link } from "react-router-dom";
import ScrollToTop from "../ScrollToTop";

function Layout() {
  const [category, setCategory] = useState("");

  const [companies, setCompanies] = useState([]);

  return (
    <>
      <ScrollToTop />
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
// xs:mt-[5.25rem] mt-[146px]
export default Layout;
