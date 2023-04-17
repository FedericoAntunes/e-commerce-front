import React from "react";

function BackBtn() {
  return (
    <button
      type="submit"
      className="text-white bg-yellow-500 lg:hover:bg-yellow-400 active:bg-yellow-600 lg:active:bg-yellow-600 font-medium rounded-lg text-base px-5 py-2.5 text-center ease-in-out duration-100"
    >
      <p className="mx-auto font-semibold inline-block text-md">Back</p>
    </button>
  );
}

export default BackBtn;
