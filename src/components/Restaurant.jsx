import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import apiCall from "./api/api";

function Restaurant() {
  const [products, setProducts] = useState([]);
  const [company, setCompany] = useState(null);

  const params = useParams();
  const getData = async () => {
    const companyData = await apiCall(`/companies/${params.slug}`, "get");
    setCompany(companyData);
    const productData = await apiCall(
      `/products?companyId=${companyData.id}`,
      "get"
    );
    setProducts(productData);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      {products.map((product) => {
        return (
          <div key={product.id}>
            <p>{product.title}</p>
            <img src={`${product.image}`} alt="category-img" />
          </div>
        );
      })}
    </>
  );
}

export default Restaurant;
