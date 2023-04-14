function UnavailableProducts({ products }) {
  return (
    <>
      <div>
        Sorry! These products ran out of{" "}
        <span className="text-red-500 font-semibold">stock</span> 😔
      </div>
      <ul>
        {products.map((product) => (
          <li>
            {" "}
            <span className="font-bold">•</span> {product.title}
          </li>
        ))}
      </ul>
    </>
  );
}

export default UnavailableProducts;
