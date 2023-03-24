import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import apiCall from "./api/api";
import { Link } from "react-router-dom";
import ProductModal from "./partials/ProductModal";

function Restaurant() {
  const [products, setProducts] = useState([]);
  const [company, setCompany] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

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
            <ProductModal
              title={product.title}
              image={product.image}
              description={product.description}
              logo={product.logo}
              price={product.price}
              stock={product.stock}
            ></ProductModal>
          </div>
        );
      })}

  
    
  







    </>
  );
}

export default Restaurant;
