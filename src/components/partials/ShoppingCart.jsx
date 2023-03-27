import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClose } from "@fortawesome/free-solid-svg-icons";

function ShoppingCart({ openMenu, toggleMenu }) {
  return (
    <>
      <div
        className={`fixed right-0 h-screen top-0 bg-white w-full lg:w-1/4 z-10 ease-in-out duration-300 ${
          openMenu ? "translate-x-0 " : "translate-x-full"
        }`}
      >
        <div className="bg-yellow-300 h-16 w-22 text-black text-lg py-2 px-3">
          <span className="absolute right-3 top-4" onClick={() => toggleMenu()}>
            <FontAwesomeIcon icon={faClose} />
          </span>
          <div className="font-bold">Your Shopping cart</div>
          <div className="font-semibold">Enter your location</div>
        </div>
        <div className="flex text-black justify-center ml-3 mt-6">
          <ul className="text-center">
            <li
              /*    onClick={() => {
                  scrollToSection(aboutMe);
                  toggleMenu();
                }} */
              className="mt-2 text-lg py-1 border-b border-gray-500 font-semibold"
            >
              <h4>Chicken McNuggets 20 units</h4>
              <small>USD $11 </small>
              <small>Quantity: 1</small>
            </li>
            <li className="mt-2 text-lg py-1 border-b border-gray-500 font-semibold">
              Example
            </li>
            <li className="mt-2 text-lg py-1 border-b border-gray-500 font-semibold">
              Example
            </li>
            <li className="mt-2 text-lg py-1 border-b border-gray-500 font-semibold">
              Example
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default ShoppingCart;
