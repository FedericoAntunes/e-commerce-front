import { Navbar, Dropdown, Avatar } from "flowbite-react";
import { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import ShoppingCart from "../ShoppingCart";
import Search from "./Search";
import "./Header.css";
import Logo from "./Logo";
import { logOutUser } from "../../../redux/slice/userSlice";
import { toggleMenu } from "../../../redux/slice/showShoppingCartSlice";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const notify = () =>
  toast.warn("This feature is not included yet.", {
    position: "bottom-right",
  });

function Header() {
  const [navbarScroll, setNavbarScroll] = useState(false);
  const location = useLocation();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((state) => state.user);
  const shoppingList = useSelector((state) => state.shoppingList);

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
          <div className="relative">
            <FontAwesomeIcon
              className="p-4 pt-5 pl-1 md:pl-3 hover:cursor-pointer hover:text-yellow-400"
              onClick={() => dispatch(toggleMenu())}
              icon={faCartShopping}
            />
            <span className="absolute top-2 right-2 rounded-full px-1 text-white text-xs bg-red-500">
              {shoppingList.length}
            </span>
          </div>
          {/* {shoppingList.map((product)=>{
            <h5>{product.quantity}</h5>
          })} */}
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
            <motion.span
              animate={{ x: [50, 150, 50], opacity: 1, scale: 1 }}
              transition={{
                duration: 5,
                delay: 0.3,
                ease: [0.5, 0.71, 1, 1.5],
              }}
              initial={{ opacity: 0, scale: 0.5 }}
              whileHover={{ scale: 1.2 }}
            >
              About this project
            </motion.span>
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
      <ShoppingCart />
    </div>
  );
}

export default Header;
