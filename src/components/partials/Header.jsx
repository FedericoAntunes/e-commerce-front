import { Navbar, Dropdown, Avatar } from "flowbite-react";
import { Link } from "react-router-dom";
function Header() {
  return (
    <>
      <Navbar fluid={true} style={{ backgroundColor: "#1F2937" }}>
        <Navbar.Brand>
          <img
            src="https://i.ibb.co/pQFPDr4/no-hunger-update.png"
            className="mr-5 h-12 sm:h-16"
            alt="No Hunger Logo"
          />
          <span className="self-center whitespace-nowrap text-xl text-yellow-200 font-semibold dark:text-white">
            No Hunger
          </span>
        </Navbar.Brand>
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
      </Navbar>
    </>
  );
}

export default Header;
