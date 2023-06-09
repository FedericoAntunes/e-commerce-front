import React from "react";

function AboutUsFeatures() {
  return (
    <>
      <div className="block w-[358px] h-full mx-auto sm:mx-0 my-4 sm:my-0 p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          Features
        </h5>
        <p className="mb-4 text-lg font-medium text-gray-700 dark:text-gray-400 text-left">
          Our ecommerce platform offers a seamless user experience with{" "}
          <span className="font-bold">responsive design</span>,{" "}
          <span className="font-bold">easy checkout</span>, and{" "}
          <span className="font-bold">order tracking</span>. Browse our wide
          range of products and shop with confidence knowing your personal
          information is secure.
        </p>
      </div>
    </>
  );
}

export default AboutUsFeatures;
