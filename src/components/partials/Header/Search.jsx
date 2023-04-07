import { useState, useEffect } from "react";
import { useLocation, Link, useNavigate } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { ReactSearchAutocomplete } from "react-search-autocomplete";
import apiCall from "../../api/api";
import "./Search.css";

function Search({ navbarScroll, toggleSearch, setToggleSearch, header }) {
  const [items, setItems] = useState([]);
  const location = useLocation();
  const navigate = useNavigate();

  const getItems = async () => {
    const products = await apiCall("/products", "get");
    const companies = await apiCall("/companies", "get");
    const categories = await apiCall("/categories", "get");

    setItems([...products.data, ...companies.data, ...categories.data]);
  };

  useEffect(() => {
    getItems();
  }, []);

  const handleOnSearch = (string, results) => {
    // onSearch will have as the first callback parameter
    // the string searched and for the second the results.
    //console.log(string, results);
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
          <div key={"prod" + item.id} className="flex items-center gap-2">
            <span className="text-gray-400">
              <small>Product</small>
            </span>
            <div className="">
              <img src={item.logo} width="50px" height="50px" alt="" />
            </div>
            <span className="block">{item.title}</span>
            <hr />
          </div>
        ) : item.logo ? (
          <div key={"co" + item.id} className="flex items-center gap-2">
            <span className="text-gray-400">
              <small>Company</small>
            </span>
            <div className="">
              <img src={item.logo} width="50px" height="50px" alt="" />
            </div>
            <span className="block">{item.name}</span>
            <hr />
          </div>
        ) : (
          <div key={"cat" + item.id} className="flex items-center gap-2">
            <span className="text-gray-400">
              <small>Category</small>
            </span>
            <div className="">
              <img src={item.image} width="50px" height="50px" alt="" />
            </div>
            <span className="block">{item.name}</span>
            <hr />
          </div>
        )}
      </>
    );
  };
  return (
    <>
      <form
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
        className={`px-0 xs:px-3 mt-2 xs:mt-0 order-5 xs:order-2 ease-in-out duration-300 ${
          !toggleSearch && header && "hidden"
        } sm:inline`}
        onSubmit={handleOnSearch}
      >
        <ToastContainer />
        <label
          htmlFor="default-search"
          className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
        >
          Search
        </label>
        <div className="relative w-auto z-10">
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <img src="/img/no-hunger.png" width="25" height="25" alt="" />
          </div>
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
            autoFocus
            maxResults={5}
            showNoResultsText={"No results"}
            formatResult={formatResult}
            fuseOptions={{ keys: ["title", "name"] }}
            resultStringKeyName="name"
          />
        </div>
      </form>
    </>
  );
}

export default Search;
