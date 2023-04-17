import { useDispatch } from "react-redux";
import { toggleMenu } from "../../redux/slice/showShoppingCartSlice";

export default function RestaurantInfoModal({
  company,
  isDescriptionOpen,
  setIsDescriptionOpen,
  handleMoreInfoModal,
}) {
  return (
    <>
      {isDescriptionOpen ? (
        <>
          <div
            onClick={() => {
              handleMoreInfoModal();
            }}
            className="backdrop-blur-sm justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-[51] outline-none focus:outline-none"
          >
            <div
              onClick={(e) => e.stopPropagation()}
              className="relative w-auto my-6 mx-auto max-w-4xl"
            >
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                  <h3 className="text-3xl font-semibold">{company.name}</h3>
                  <button
                    className="p-1 ml-auto bg-transparent border-0 text-black float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={() => handleMoreInfoModal()}
                  >
                    <span className="bg-transparent text-black h-6 w-6 text-2xl block outline-none focus:outline-none">
                      ×
                    </span>
                  </button>
                </div>
                {/*body*/}
                <div className="relative md:p-6 p-2 flex justify-center md:flex-nowrap items-start">
                  <p className=" text-left my-4 text-slate-500 text-lg leading-relaxed mx-4 overflow-y-scroll h-24 sm:h-fit sm:overflow-y-hidden">
                    {company.description}
                  </p>
                </div>
                {/*footer*/}
                <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                  <button
                    className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => handleMoreInfoModal()}
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
        </>
      ) : null}
    </>
  );
}
