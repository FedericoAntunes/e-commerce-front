import { Navbar, Dropdown, Avatar } from "flowbite-react";
import { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping, faSearch } from "@fortawesome/free-solid-svg-icons";
import ShoppingCart from "../ShoppingCart";
import Search from "./Search";
import "./Header.css";
import Logo from "./Logo";
import { logOutUser } from "../../../redux/slice/userSlice";
import { toggleMenu } from "../../../redux/slice/showShoppingCartSlice";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { googleLogout } from "@react-oauth/google";

const notify = () =>
  toast.warn("This feature is not included yet.", {
    position: "bottom-right",
  });

function Header() {
  const [toggleSearch, setToggleSearch] = useState(false);
  const [navbarScroll, setNavbarScroll] = useState(false);
  const location = useLocation();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((state) => state.user);
  const shoppingList = useSelector((state) => state.shoppingList);

  function handleLogOut() {
    googleLogout();
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

        <Search
          navbarScroll={navbarScroll}
          toggleSearch={toggleSearch}
          setToggleSearch={setToggleSearch}
        />

        <div
          className="flex order-4 nav-cart-user ease-in-out duration-500"
          style={
            navbarScroll || location.pathname !== "/"
              ? { color: "gray" }
              : { color: "lightyellow" }
          }
        >
          <div className="relative">
            <FontAwesomeIcon
              className={`p-4 pt-5 pl-1 md:pl-3 hover:cursor-pointer hover:text-yellow-400 sm:hidden`}
              onClick={() => {
                setToggleSearch(!toggleSearch);
              }}
              icon={faSearch}
            />
            <FontAwesomeIcon
              className="p-4 pt-5 pl-1 md:pl-3 hover:cursor-pointer hover:text-yellow-400"
              onClick={() => dispatch(toggleMenu())}
              icon={faCartShopping}
            />
            {shoppingList.length > 0 && (
              <span className="absolute animate-bounce top-2 right-2 rounded-full w-4 h-4 text-white text-[0.7rem] bg-red-500">
                {shoppingList.length < 10 ? shoppingList.length : "9+"}
              </span>
            )}
          </div>

          {user ? (
            <Dropdown
              arrowIcon={false}
              inline={true}
              label={
                <Avatar
                  alt="User settings"
                  img={
                    user.avatar.substring(0, 4) === "http"
                      ? user.avatar
                      : process.env.REACT_APP_SERVER_DOMAIN + user.avatar
                  }
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
              <Link to="/order-history">
                <Dropdown.Item>Order History</Dropdown.Item>
              </Link>
              {/*<Dropdown.Item onClick={notify}>Settings</Dropdown.Item>*/}
              <Dropdown.Divider />
              <Dropdown.Item onClick={() => handleLogOut()}>
                Sign out
              </Dropdown.Item>
            </Dropdown>
          ) : null}
          <Navbar.Toggle
            className={`hover:text-yellow-400 ${user && "hidden"}`}
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
      <ShoppingCart />
    </div>
  );
}

export default Header;
