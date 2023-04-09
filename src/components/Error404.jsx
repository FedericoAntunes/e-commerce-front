import { Link } from "react-router-dom";
import "./error404.css";

function Error404() {
  return (
    <>
      <h1 className="text-center mt-3">404 Error</h1>
      <section className="error-container">
        <span>
          <span>4</span>
        </span>
        <span>0</span>
        <span>
          <span>4</span>
        </span>
      </section>
      <div className="link-container">
        <Link className="more-link " to="/">
          Return
        </Link>
      </div>
    </>
  );
}

export default Error404;
