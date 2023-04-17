import { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Navbar, Dropdown, Avatar } from "flowbite-react";
import { googleLogout } from "@react-oauth/google";

// Fontawesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping, faSearch } from "@fortawesome/free-solid-svg-icons";

// Actions
import { logOutUser } from "../../../redux/slice/userSlice";
import { toggleMenu } from "../../../redux/slice/showShoppingCartSlice";

// Components
import ShoppingCart from "../ShoppingCart";
import Search from "./Search";
import Logo from "./Logo";
import "./Header.css";

function Header() {
  const [toggleSearch, setToggleSearch] = useState(false);
  const [navbarScroll, setNavbarScroll] = useState(false);

  const location = useLocation();

  const dispatch = useDispatch();

  const navigate = useNavigate();

  const user = useSelector((state) => state.user);
  const shoppingList = useSelector((state) => state.shoppingList);
  const isShoppingCartOpen = useSelector(
    (state) => state.showShoppingCart.showCart
  );

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

  /*   useEffect(() => {
    console.log(isShoppingCartOpen);
    if (isShoppingCartOpen) {
      console.log("elimino scroll");
      document.body.style.overflow = "hidden";
    } else {
      console.log("habilito scroll");

      document.body.style.overflow = "visible";
    }
    console.log(document.body.style);
  }, [isShoppingCartOpen]); */

  useEffect(() => {
    navbarScrolling();
    // adding the event when scroll change background
    window.addEventListener("scroll", navbarScrolling);
  });

  return (
    <div className="fixed w-full h-16 z-50 -top-1">
      <Navbar
        fluid={true}
        style={
          navbarScroll || location.pathname !== "/"
            ? {
                backgroundColor: "white",
              }
            : { backgroundColor: "transparent" }
        }
        className="ease-in-out duration-500 px-4 lg:px-24"
      >
        <Logo />
        <Search
          navbarScroll={navbarScroll}
          toggleSearch={toggleSearch}
          setToggleSearch={setToggleSearch}
          header={true}
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
            {(navbarScroll || location.pathname !== "/") && (
              <FontAwesomeIcon
                className={`p-4 pt-5 pl-1 md:pl-3 lg:hover:cursor-pointer lg:hover:text-yellow-400 sm:hidden`}
                onClick={() => {
                  setToggleSearch(!toggleSearch);
                }}
                icon={faSearch}
              />
            )}
            <FontAwesomeIcon
              className="m-4 mt-5 ml-1 md:ml-3 active:text-yellow-500 lg:active:text-yellow-500 ease-in-out duration-100 lg:hover:cursor-pointer lg:hover:text-yellow-400"
              onClick={() =>
                dispatch(toggleMenu({ scroll: false, showCart: true }))
              }
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
                      : process.env.REACT_APP_IMAGE_BASEURL + user.avatar
                  }
                  rounded={true}
                  className="pt-2"
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
              <Dropdown.Divider />
              <Dropdown.Item onClick={() => handleLogOut()}>
                Sign out
              </Dropdown.Item>
            </Dropdown>
          ) : (
            <Navbar.Toggle
              className={`lg:hover:text-yellow-400`}
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
          )}
        </div>
        <Navbar.Collapse className="navbar-links-container pt-[2px] order-6 md:order-3">
          {!user && (
            <>
              <Link
                to={"/login"}
                className="block py-2 border-0 bg-transparent lg:hover:scale-110 lg:hover:drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)] text-[1.15rem] font-bold ease-in-out duration-200"
                style={
                  navbarScroll || location.pathname !== "/"
                    ? {
                        color: "gray",
                        filter: "none",
                      }
                    : { color: "white" }
                }
              >
                Login
              </Link>
              <Link
                to={"/register"}
                className="block py-2 border-0 bg-transparent lg:hover:scale-110 lg:hover:drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)] text-[1.15rem] font-bold ease-in-out duration-200"
                style={
                  navbarScroll || location.pathname !== "/"
                    ? { color: "gray", filter: "none" }
                    : { color: "white" }
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
