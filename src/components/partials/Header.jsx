
import { Navbar, Dropdown, Avatar } from "flowbite-react"
import { Link } from "react-router-dom"
function Header() {
  return (
    <>
<Navbar
  fluid={true}

  className= "bg-yellow-600"
>
  <Navbar.Brand>
    <img
      src="https://i.ibb.co/qCJx7Zs/nohungerlogo.png"
      className="mr-3 h-20 sm:h-40"
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
      label={<Avatar alt="User settings" img="https://flowbite.com/docs/images/people/profile-picture-5.jpg" rounded={true}/>}
    >
      <Dropdown.Header>
        <span className="block text-sm">
          Bonnie Green
        </span>
        <span className="block truncate text-sm font-medium">
          name@flowbite.com
        </span>
      </Dropdown.Header>
      <Dropdown.Item>
        Dashboard
      </Dropdown.Item>
      <Dropdown.Item>
        Settings
      </Dropdown.Item>
      <Dropdown.Item>
        Earnings
      </Dropdown.Item>
      <Dropdown.Divider />
      <Dropdown.Item>
        Sign out
      </Dropdown.Item>
    </Dropdown>
    <Navbar.Toggle />
  </div>
  <Navbar.Collapse>
    <Navbar.Link
      href="/"
      active={true}
      className = "text-lg md:text-gray-700 md:hover:text-yellow-200"
    >
      Home
    </Navbar.Link>
    <Navbar.Link
     href="/about-us"
     className = "text-lg sm:hover:text-yellow-200 md:hover:text-yellow-200 hover:bg-yellow-600"
     >

      About
    </Navbar.Link>
    <Navbar.Link 
    href="/login"
    className = "text-lg  sm:hover:text-yellow-200  md:hover:text-yellow-200 hover:bg-yellow-600 "
    >
      
      Login
    </Navbar.Link>
    <Navbar.Link 
    href="/register"
    className = "text-lg  sm:hover:text-yellow-200  md:hover:text-yellow-200 hover:bg-yellow-600"
    >
      Register
    </Navbar.Link>
    <Navbar.Link 
    
    className = "text-lg  sm:hover:text-yellow-200  md:hover:text-yellow-200 hover:bg-yellow-600"
    >
      Contact
    </Navbar.Link>
  </Navbar.Collapse>
</Navbar>



    </>
  )
}

export default Header