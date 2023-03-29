import { Outlet } from "react-router-dom";
import Header from "../partials/Header";
import Footer from "../partials/Footer";
import { useState } from "react";

function Layout() {
  const [category, setCategory] = useState("");

  const [companies, setCompanies] = useState([]);

  return (
    <>
      <div>
        <div>
          <Header />
        </div>
        <main className="">
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
