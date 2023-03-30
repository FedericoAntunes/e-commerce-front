import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import apiCall from "./api/api";

function FilteredCategory() {
  const [products, setProducts] = useState(null);
  const params = useParams();

  const getCategoryProducts = async () => {
    const category = await apiCall(
      `/categories/${params.category_slug}`,
      "get"
    );
    const products = await apiCall(
      `/products?categoryId=${category.id}`,
      "get"
    );
    setProducts(products);
  };

  useEffect(() => {
    getCategoryProducts();
    // eslint-disable-next-line
  }, []);

  return (
    <div className="mt-32">
      {products &&
        products.map((item, index) => <p key={index}>{item.title}</p>)}
    </div>
  );
}

export default FilteredCategory;
