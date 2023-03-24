import { Navbar, Dropdown, Avatar } from "flowbite-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import ShoppingCart from "./ShoppingCart";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";

function Header() {
  const [openMenu, setOpenMenu] = useState(false);

  function toggleMenu() {
    setOpenMenu(!openMenu);
  }

  return (
    <div className="fixed w-full h-16 z-10 top-0">
      <Navbar fluid={true} style={{ backgroundColor: "#1F2937" }}>
        <Navbar.Brand>
          <img
            src="https://i.ibb.co/pQFPDr4/no-hunger-update.png"
            className="mr-5 h-16"
            alt="No Hunger Logo"
          />
          <span className="self-center whitespace-nowrap text-xl text-yellow-200 font-semibold dark:text-white">
            No Hunger
          </span>
        </Navbar.Brand>
        <form>
          <label
            for="default-search"
            className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
          >
            Search
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <img
                src="https://i.ibb.co/pQFPDr4/no-hunger-update.png"
                width="25"
                height="25"
              />
            </div>
            <input
              type="search"
              id="default-search"
              className="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Search Mockups, Logos..."
              required
            />
            <button
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
            </button>
          </div>
        </form>
        <div className="flex md:order-2">
          <Dropdown
            arrowIcon={false}
            inline={true}
            label={
              <Avatar
                alt="User settings"
                img="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
                rounded={true}
              />
            }
          >
            <Dropdown.Header>
              <span className="block text-sm">Bonnie Green</span>
              <span className="block truncate text-sm font-medium">
                name@flowbite.com
              </span>
            </Dropdown.Header>
            <Dropdown.Item>Dashboard</Dropdown.Item>
            <Dropdown.Item>Settings</Dropdown.Item>
            <Dropdown.Item>Earnings</Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Item>Sign out</Dropdown.Item>
          </Dropdown>
          <Navbar.Toggle />
        </div>
        <Navbar.Collapse style={{ hover: "background-color: #111827" }}>
          <Link
            to={"/"}
            className="block py-2 pr-4 pl-3 md:p-0   text-gray-300  dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:border-0 md:hover:bg-transparent  md:dark:hover:bg-transparent md:dark:hover:text-white text-lg     md:hover:text-yellow-200 "
            style={{ fontWeight: "600" }}
          >
            Home
          </Link>
          <Link
            to={"/about-us"}
            className="block py-2 pr-4 pl-3 md:p-0   text-gray-300  dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:border-0 md:hover:bg-transparent  md:dark:hover:bg-transparent md:dark:hover:text-white text-lg   md:hover:text-yellow-200 "
            style={{ fontWeight: "600" }}
          >
            About
          </Link>
          <Link
            to={"/login"}
            className="block py-2 pr-4 pl-3 md:p-0   text-gray-300 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:border-0 md:hover:bg-transparent  md:dark:hover:bg-transparent md:dark:hover:text-white text-lg    md:hover:text-yellow-200 "
            style={{ fontWeight: "600" }}
          >
            Login
          </Link>

          <Link
            to={"/register"}
            className="block py-2 pr-4 pl-3 md:p-0   text-gray-300 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:border-0 md:hover:bg-transparent  md:dark:hover:bg-transparent md:dark:hover:text-white text-lg   md:hover:text-yellow-200 "
            style={{ fontWeight: "600" }}
          >
            Register
          </Link>

          <Link
            className="block py-2 pr-4 pl-3 md:p-0   text-gray-300  dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:border-0 md:hover:bg-transparent  md:dark:hover:bg-transparent md:dark:hover:text-white text-lg   md:hover:text-yellow-200 "
            style={{ fontWeight: "600" }}
          >
            Contact
          </Link>
        </Navbar.Collapse>
        <FontAwesomeIcon
          className="text-gray-300"
          onClick={() => toggleMenu()}
          icon={faCartShopping}
        />
      </Navbar>
      <ShoppingCart openMenu={openMenu} toggleMenu={toggleMenu} />
    </div>
  );
}

export default Header;
