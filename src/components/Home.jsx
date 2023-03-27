import CategoryCarousel from "./partials/Home/CategoryCarousel";
import Companies from "./partials/Home/CompaniesCarousel";
import Filters from "./partials/Home/Filters";
import Products from "./partials/Home/Products";
import Hero from "./partials/Hero";
import apiCall from "./api/api";
import { useEffect } from "react";
import { useOutletContext } from "react-router-dom";

function Home() {
  const [category, setCategory, products, setProducts] = useOutletContext();

  const getProducts = async () => {
    const response = await apiCall("/products", "get");
    setProducts(response);
  };

  useEffect(() => {
    getProducts();
    // eslint-disable-next-line
  }, []);
  return (
    <>
      <Hero />

      <CategoryCarousel category={category} setCategory={setCategory} />

      <Filters setProducts={setProducts} />

      <Companies />

      <Products products={products} />
    </>
  );
}

export default Home;
