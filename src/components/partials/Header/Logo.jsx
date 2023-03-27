import { Link } from "react-router-dom";

function Logo() {
  return (
    <>
        <Link to={"/"} className="order-first">
          <img
            // src="https://i.ibb.co/pQFPDr4/no-hunger-update.png"
            src="/img/no-hunger.png"
            className="mr-1 h-16"
            alt="No Hunger Logo"
          />
        </Link>
        {/* <span className="self-center whitespace-nowrap text-sm text-yellow-200 dark:text-white">
            No Hunger
          </span> */}
    </>
  );
}

export default Logo;
