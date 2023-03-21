
import { Outlet } from "react-router-dom";
import Header from "../partials/Header";
import Footer from "../partials/Footer"

function Layout() {
  return (
    <>
    <div className="">
      <div className="">
        <Header/>
      </div>
      <main className="">
        <Outlet/>
      </main>
      <div className="">
        <Footer/>
      </div>
    </div>
    </>
  );
}

export default Layout;

