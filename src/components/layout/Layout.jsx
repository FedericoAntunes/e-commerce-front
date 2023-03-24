import { Outlet } from "react-router-dom";
import Header from "../partials/Header";
import Footer from "../partials/Footer";
import { useState } from "react";

function Layout() {
  const [category, setCategory] = useState("");
  const [products, setProducts] = useState([]);

  return (
    <>
      <div>
        <div className="mb-[5.25rem]">
          <Header products={products} setProducts={setProducts} />
        </div>
        <main className="">
          <Outlet context={[category, setCategory, products, setProducts]} />
        </main>
        <div>
          <Footer />
        </div>
      </div>
    </>
  );
}

export default Layout;
