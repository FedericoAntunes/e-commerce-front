import { Navbar, Dropdown, Avatar } from "flowbite-react";
import { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import ShoppingCart from "../ShoppingCart";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import Search from "./Search";
import "./Header.css";
import Logo from "./Logo";
import { useDispatch, useSelector } from "react-redux";
import { logOutUser } from "../../../redux/slice/userSlice";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const notify = () =>
  toast.warn("This feature is not included yet.", {
    position: "bottom-right",
  });

function Header() {
  const [openMenu, setOpenMenu] = useState(false);
  const [navbarScroll, setNavbarScroll] = useState(false);
  const location = useLocation();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((state) => state.user);

  function toggleMenu() {
    setOpenMenu(!openMenu);
  }
  function handleLogOut() {
    dispatch(logOutUser());
    navigate("/login");
  }

  const navbarScrolling = () => {
    if (window.scrollY >= 400) {
      setNavbarScroll(true);
    } else {
      setNavbarScroll(false);
    }
  };

  useEffect(() => {
    navbarScrolling();
    // adding the event when scroll change background
    window.addEventListener("scroll", navbarScrolling);
  });

  return (
    <div className="fixed w-full h-16 z-50 top-0">
      <ToastContainer />
      <Navbar
        fluid={true}
        style={
          navbarScroll || location.pathname !== "/"
            ? { backgroundColor: "white" }
            : { backgroundColor: "transparent" }
        }
        className="ease-in-out duration-300"
      >
        <Logo />

        <Search navbarScroll={navbarScroll} />

        <div
          className="flex order-4 nav-cart-user ease-in-out duration-500"
          style={
            navbarScroll || location.pathname !== "/"
              ? { color: "gray" }
              : { color: "lightyellow" }
          }
        >
          <FontAwesomeIcon
            className="p-4 pt-5 pl-1 md:pl-3 hover:cursor-pointer hover:text-yellow-400"
            onClick={() => toggleMenu()}
            icon={faCartShopping}
          />
          {user ? (
            <Dropdown
              arrowIcon={false}
              inline={true}
              label={
                <Avatar
                  alt="User settings"
                  img={process.env.REACT_APP_SERVER_DOMAIN + user.avatar}
                  rounded={true}
                  className="pt-2 pr-1"
                />
              }
            >
              <Dropdown.Header>
                <span className="block text-sm">{user.username}</span>
                <span className="block truncate text-sm font-medium">
                  {user.email}
                </span>
              </Dropdown.Header>
              <Dropdown.Item onClick={notify}>Dashboard</Dropdown.Item>
              <Dropdown.Item onClick={notify}>Settings</Dropdown.Item>
              <Dropdown.Item onClick={notify}>Earnings</Dropdown.Item>
              <Dropdown.Divider />
              <Dropdown.Item onClick={() => handleLogOut()}>
                Sign out
              </Dropdown.Item>
            </Dropdown>
          ) : null}
          <Navbar.Toggle
            className="hover:text-yellow-400"
            style={
              navbarScroll || location.pathname !== "/"
                ? {
                    color: "gray",
                    backgroundColor: "transparent",
                    boxShadow: "none",
                  }
                : {
                    color: "lightyellow",
                    backgroundColor: "transparent",
                    boxShadow: "none",
                  }
            }
          />
        </div>

        <Navbar.Collapse className="navbar-links-container pt-[2px] order-6 md:order-3">
          <Link
            to={"/"}
            className="block py-2 border-0 bg-transparent hover:text-yellow-400 fs-[0.875rem] font-normal ease-in-out duration-200"
            style={
              navbarScroll || location.pathname !== "/"
                ? { color: "gray" }
                : { color: "lightyellow" }
            }
          >
            Home
          </Link>

          <Link
            to={"/about-us"}
            className="block py-2 border-0 bg-transparent hover:text-yellow-400 fs-[0.875rem] font-normal ease-in-out duration-200"
            style={
              navbarScroll || location.pathname !== "/"
                ? { color: "gray" }
                : { color: "lightyellow" }
            }
          >
            About this project
          </Link>

          {!user && (
            <>
              <Link
                to={"/login"}
                className="block py-2 border-0 bg-transparent hover:text-yellow-400 fs-[0.875rem] font-normal ease-in-out duration-200"
                style={
                  navbarScroll || location.pathname !== "/"
                    ? { color: "gray" }
                    : { color: "lightyellow" }
                }
              >
                Login
              </Link>

              <Link
                to={"/register"}
                className="block py-2 border-0 bg-transparent hover:text-yellow-400 fs-[0.875rem] font-normal ease-in-out duration-200"
                style={
                  navbarScroll || location.pathname !== "/"
                    ? { color: "gray" }
                    : { color: "lightyellow" }
                }
              >
                Register
              </Link>
            </>
          )}
        </Navbar.Collapse>
      </Navbar>
      <ShoppingCart openMenu={openMenu} toggleMenu={toggleMenu} />
    </div>
  );
}

export default Header;
