import { Link } from "react-router-dom";

function Products({ products }) {
  return (
    <div className="grid-cols-1 sm:grid-cols-4 mx-4 grid gap-2">
      {products.map((product, index) => {
        return (
          <div
            key={index}
            className="relative w-70 max-w-sm bg-white border m-2 border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
          >
            <div className="-mb-6 relative">
              <img
                className="rounded-full absolute left-4 top-2 h-12"
                src={product.company.logo}
                alt="company"
              />
              {/*               <div className="flex justify-center mt-2  ">
                <h3 className="font-2xl font-bold">{product.company.name}</h3>
              </div> */}
            </div>
            <Link to={`/${product.company.slug}`}>
              <img
                className="pt-8 pb-4 mx-auto rounded-t-lg w-[12rem]"
                src={product.image}
                alt="product"
              />
            </Link>
            <div className="px-5">
              <Link to={`/${product.company.slug}`}>
                <h5 className="text-md text-start font-semibold tracking-tight text-gray-900 dark:text-white">
                  {product.title}
                </h5>
              </Link>
              <div className="flex items-center justify-between">
                <span className="font-bold text-gray-900 dark:text-white">
                  ${product.price}
                </span>
                {/*     <NavLink
                    to={`/${product.company.slug}`}
                    className="text-white absolute bottom-2 right-2
                    bg-yellow-500 hover:bg-yellow-400 focus:ring-4 focus:outline-none focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  >
                    Go to restaurant
                  </NavLink> */}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Products;
