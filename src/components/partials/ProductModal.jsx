import React from "react";

export default function ProductModal({
  product,
  isModalOpen,
  setIsModalOpen,
  actualProduct,
}) {
  return (
    <>
      {isModalOpen && product.id === actualProduct ? (
        <>
          <div className=" justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-auto my-6 mx-auto w-[30rem]">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <img
                  className="h-40 rounded-t"
                  src={`${product.logo}`}
                  alt="category-img"
                />
                <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                  <h3 className="text-3xl font-semibold">{product.title}</h3>
                  <button
                    className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={() => setIsModalOpen()}
                  >
                    <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                      ×
                    </span>
                  </button>
                </div>
                {/*body*/}
                <div className="relative p-6 flex-auto">
                  <p className="my-4 text-slate-500 text-lg leading-relaxed w-[30rem]">
                    {product.description}
                  </p>
                  <h1>In stock: {product.stock}</h1>
                  <div className="text-right">
                    <h1>US$ {product.price}</h1>
                  </div>
                </div>
                {/*footer*/}
                <div className="flex flex-col  items-center justify-center p-6 border-t border-solid border-slate-200 rounded-b">
                  <button class="bg-yellow-600 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded-full w-4/5">
                    Add to my cart
                  </button>
                  <button
                    className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setIsModalOpen()}
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>
  );
}
