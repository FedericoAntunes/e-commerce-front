import { Link } from "react-router-dom";

function Logo() {
  return (
    <>
      <Link to={"/"} className="order-first">
        <img
          src="/img/no-hunger.png"
          className="mr-1 h-16"
          alt="No Hunger Logo"
        />
      </Link>
    </>
  );
}

export default Logo;
