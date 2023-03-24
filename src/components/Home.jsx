import CategoryCarousel from "./partials/Home/CategoryCarousel";
import Companies from "./partials/Home/Companies";
import Filters from "./partials/Home/Filters";
import Products from "./partials/Home/Products";

function Home() {
  return (
    <>
      <CategoryCarousel />

      <Filters />

      <Companies />

      <Products />
    </>
  );
}

export default Home;
