import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { ReactSearchAutocomplete } from "react-search-autocomplete";
import "react-toastify/dist/ReactToastify.css";
import "./Search.css";

// ApiCall
import apiCall from "../../api/api";

function Search({ navbarScroll, toggleSearch, header }) {
  const [items, setItems] = useState([]);

  const location = useLocation();
  const navigate = useNavigate();

  const getItems = async () => {
    const products = await apiCall("/products", "get");
    const companies = await apiCall("/companies", "get");
    const categories = await apiCall("/categories", "get");

    const formatedProducts = await products.data.map((product) => {
      return { ...product, name: product.title };
    });

    setItems([...formatedProducts, ...companies.data, ...categories.data]);
  };

  useEffect(() => {
    getItems();
  }, []);

  const handleOnSearch = (string, results) => {
    // onSearch will have as the first callback parameter
    // the string searched and for the second the results.
    // console.log(string, results);
  };

  const handleOnHover = (result) => {
    // the item hovered
    //console.log(result);
  };

  const handleOnSelect = (item) => {
    if (item.title) {
      navigate(`/${item.company.slug}?product=${item.slug}`);
    } else if (item.logo) {
      navigate(`/${item.slug}`);
    } else {
      navigate(`/category/${item.slug}`);
    }
  };

  const handleOnFocus = () => {
    //console.log("Focused");
  };

  const formatResult = (item) => {
    return (
      <>
        {item.title ? (
          <div key={"prod" + item.id} className="flex items-center gap-2 h-10">
            <div className="">
              <img
                src={
                  item.image.substring(0, 4) === "http"
                    ? item.image
                    : process.env.REACT_APP_IMAGE_BASEURL + item.image
                }
                width="50px"
                height="50px"
                alt=""
              />
            </div>
            <span className="block">{item.title}</span>
            <span className="text-gray-400 text-sm">
              <span>(Product)</span>
            </span>
            <hr />
          </div>
        ) : item.logo ? (
          <div key={"co" + item.id} className="flex items-center gap-2 h-10">
            <div className="">
              <img
                src={
                  item.logo.substring(0, 4) === "http"
                    ? item.logo
                    : process.env.REACT_APP_IMAGE_BASEURL + item.logo
                }
                width="50px"
                height="50px"
                alt=""
              />
            </div>
            <span className="block">{item.name}</span>
            <span className="text-gray-400 text-sm">
              <span>(Company)</span>
            </span>
            <hr />
          </div>
        ) : (
          <div key={"cat" + item.id} className="flex items-center gap-2 h-10">
            <div className="">
              <img src={item.image} width="50px" height="50px" alt="" />
            </div>
            <span className="block">{item.name}</span>
            <span className="text-gray-400 text-sm">
              <span>(Category)</span>
            </span>
            <hr />
          </div>
        )}
      </>
    );
  };
  return (
    <>
      <form
        id="searchForm"
        style={
          navbarScroll || location.pathname !== "/"
            ? {
                opacity: 1,
                flex: "1 1 auto",
                minWidth: "235px",
                maxWidth: "700px",
              }
            : {
                opacity: 0,
                flex: "1 1 auto",
                minWidth: "235px",
                maxWidth: "700px",
              }
        }
        className={`px-0 xs:px-3 mt-2 xs:mt-0 order-5 xs:order-2 ease-in-out duration-500 ${
          !toggleSearch && header && "hidden"
        } sm:inline`}
        onSubmit={(e) => e.preventDefault()}
      >
        <label
          htmlFor="default-search"
          className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
        >
          Search
        </label>
        <div className="relative w-auto z-10">
          <ReactSearchAutocomplete
            type="search"
            id="default-search"
            className={`block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:visible`}
            placeholder="Search Restaurant, Category, Food..."
            items={items}
            onSearch={handleOnSearch}
            onHover={handleOnHover}
            onSelect={handleOnSelect}
            onFocus={handleOnFocus}
            maxResults={5}
            showNoResultsText={"No results"}
            formatResult={formatResult}
            fuseOptions={{ keys: ["name"] }}
            resultStringKeyName="name"
            showIcon={true}
          />
        </div>
      </form>
    </>
  );
}

export default Search;
