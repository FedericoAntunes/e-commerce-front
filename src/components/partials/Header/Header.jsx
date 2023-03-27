import { Navbar, Dropdown, Avatar } from "flowbite-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import ShoppingCart from "../ShoppingCart";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import Search from "./Search";
import "./Header.css";
import Logo from "./Logo";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const notify = () =>
  toast.warn("This feature is not included yet.", {
    position: "bottom-right",
  });

function Header() {
  const [openMenu, setOpenMenu] = useState(false);

  function toggleMenu() {
    setOpenMenu(!openMenu);
  }

  return (
    <div onClick={notify} className="fixed w-full h-16 z-10 top-0">
      <ToastContainer />
      <Navbar
        fluid={true}
        style={{ boxShadow: "rgba(181, 129, 108, 0.5) 0px 16px 24px -18px;" }}
      >
        <Logo />

        <Search />

        <div className="flex order-4">
          <FontAwesomeIcon
            className="text-gray-300 p-4 pt-5 pl-1 md:pl-3 hover:cursor-pointer hover:text-yellow-600"
            onClick={() => toggleMenu()}
            icon={faCartShopping}
          />

          <Dropdown
            arrowIcon={false}
            inline={true}
            label={
              <Avatar
                alt="User settings"
                img="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
                rounded={true}
                className="pt-2 pr-1"
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
          <Navbar.Toggle
            className="hover:text-yellow-400"
            style={{ backgroundColor: "transparent", boxShadow: "none" }}
          />
        </div>

        <Navbar.Collapse className="navbar-links-container pt-[2px] order-6 md:order-3">
          <Link
            to={"/"}
            className="block py-2 text-dark border-0 bg-transparent hover:text-yellow-600"
            style={{ fontWeight: "800", fontSize: "0.875rem" }}
          >
            Home
          </Link>
          <Link
            to={"/about-us"}
            className="block py-2 text-dark border-0 bg-transparent hover:text-yellow-600"
            style={{
              fontWeight: "800",
              fontSize: "0.875rem",
            }}
          >
            About
          </Link>
          <Link
            to={"/login"}
            className="block py-2 text-dark border-0 bg-transparent hover:text-yellow-600"
            style={{
              fontWeight: "800",
              fontSize: "0.875rem",
            }}
          >
            Login
          </Link>

          <Link
            to={"/register"}
            className="block py-2 text-dark border-0 bg-transparent hover:text-yellow-600"
            style={{
              fontWeight: "800",
              fontSize: "0.875rem",
            }}
          >
            Register
          </Link>

          <Link
            className="block py-2 text-dark border-0 bg-transparent hover:text-yellow-600"
            style={{
              fontWeight: "800",
              fontSize: "0.875rem",
            }}
          >
            Contact
          </Link>
        </Navbar.Collapse>
      </Navbar>
      <ShoppingCart openMenu={openMenu} toggleMenu={toggleMenu} />
    </div>
  );
}

export default Header;
