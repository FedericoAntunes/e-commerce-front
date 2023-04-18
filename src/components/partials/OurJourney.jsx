import { Link } from "@mui/material";

export default function OurJourney() {
  return (
    <>
      <div className="flex flex-col max-w-[1130px] mx-auto items-center my-4 sm:my-0 p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
        <h2 className="mb-4 text-3xl font-bold tracking-tight text-gray-900 dark:text-white">
          Our Journey
        </h2>
        <p className="sm:w-2/3 w-full px-4 mb-8 text-md md:text-lg font-medium text-gray-700 dark:text-gray-400 text-left leading-relaxed">
          We started doing our data base with Mongo DB, but because of a
          professor´s suggestion, we decided to make our data base with MySQL:
          the reason is that we can have a better record of the payments
          realised in the page. We took references from pages like PedidosYa,
          Rappi, etc.
        </p>
        <div className="block sm:w-2/3 w-full  h-full mx-auto sm:mx-0 my-4 sm:my-0 p-6 ">
          <h5 className="mb-10 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            Some Sketches
          </h5>
          <div className="grid grid-cols-1 lg:grid-cols-3 mb-20 justify-center gap-8">
            <img
              className="transform transition-all duration-300 lg:hover:scale-125"
              src="https://cdn.discordapp.com/attachments/834507129087328307/1087806556558594109/image.png"
              alt=""
            />
            <img
              className="transform transition-all duration-300 lg:hover:scale-125"
              src="https://cdn.discordapp.com/attachments/834507129087328307/1087803600203427860/image.png"
              alt=""
            />
            <img
              className="transform transition-all duration-300 lg:hover:scale-125"
              src="https://cdn.discordapp.com/attachments/834507129087328307/1087808764477984908/image.png"
              alt=""
            />
          </div>
        </div>
      </div>
    </>
  );
}
