
import { Outlet } from "react-router-dom";
import Header from "../partials/Header";
import Footer from "../partials/Footer"

function Layout() {
  return (
    <div className="row m-0 overlow">
      <div className="d-none d-sm-block col-2 g-0">
        <Header/>
      </div>
      <main className="col-12 col-sm-9 col-md-6 border g-0">
        <Outlet />
      </main>
      <div className="d-none d-md-block col-4 g-0">
        <Footer />
      </div>
    </div>
  );
}

export default Layout;

