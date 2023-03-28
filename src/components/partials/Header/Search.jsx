import { useState, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { ReactSearchAutocomplete } from "react-search-autocomplete";
import apiCall from "../../api/api";
import "./Search.css";

const notify = () =>
  toast.warn("This feature is not included yet.", {
    position: "bottom-right",
  });

function Search({ navbarScroll }) {
  const [items, setItems] = useState([]);

  const getItems = async () => {
    const products = await apiCall("/products", "get");
    const companies = await apiCall("/companies", "get");
    const categories = await apiCall("/categories", "get");

    setItems([...products, ...companies, ...categories]);
    console.log(items);
  };

  useEffect(() => {
    getItems();
  }, []);

  const handleOnSearch = (string, results) => {
    // onSearch will have as the first callback parameter
    // the string searched and for the second the results.
    console.log(string, results);
  };

  const handleOnHover = (result) => {
    // the item hovered
    console.log(result);
  };

  const handleOnSelect = (item) => {
    // the item selected
    console.log(item);
  };

  const handleOnFocus = () => {
    console.log("Focused");
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
          navbarScroll
            ? {
                opacity: 1,
                flex: "1 1 auto",
                minWidth: "250px",
                maxWidth: "700px",
              }
            : {
                opacity: 0,
                flex: "1 1 auto",
                minWidth: "250px",
                maxWidth: "700px",
              }
        }
        className="px-0 xs:px-3 mt-2 xs:mt-0 order-5 xs:order-2 ease-in-out duration-300"
        onSubmit={handleOnSearch}
      >
        <ToastContainer />
        <label
          htmlFor="default-search"
          className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
        >
          Search
        </label>
        <div className="relative w-auto">
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <img src="/img/no-hunger.png" width="25" height="25" />
          </div>
          <ReactSearchAutocomplete
            type="search"
            id="default-search"
            className="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50"
            placeholder="Search Restaurant, Category, Food..."
            items={items}
            onSearch={handleOnSearch}
            onHover={handleOnHover}
            onSelect={handleOnSelect}
            onFocus={handleOnFocus}
            autoFocus
            formatResult={formatResult}
            fuseOptions={{ keys: ["title", "name"] }}
            resultStringKeyName="name"
          />
          {/* <input
            type="search"
            id="default-search"
            className="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Search Restaurant, Category, Food..."
            onChange={(e) => setSearchString(e.target.value)}
          /> */}
          {/* <button
            onClick={notify}
            type="submit"
            className="text-white absolute right-2.5 bottom-2.5 bg-yellow-500 hover:bg-yellow-400 focus:ring-4 focus:outline-none focus:ring-yellow-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-yellow-600 dark:hover:bg-yellow-700 dark:focus:ring-yellow-800"
          >
            <svg
              aria-hidden="true"
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              ></path>
            </svg>
          </button> */}
        </div>
      </form>
    </>
  );
}

export default Search;
