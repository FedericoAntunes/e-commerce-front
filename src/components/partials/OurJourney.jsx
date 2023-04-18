import { Link } from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faNodeJs,
  faReacteurope,
  faDatabase,
  faMoneyCheck,
} from "@fortawesome/free-solid-svg-icons";

export default function OurJourney() {
  return (
    <>
      <div className="px-4 lg:px-0 flex flex-col max-w-[1130px] mx-auto items-center my-4 sm:my-0 py-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
        <h2 className="mb-4 text-3xl font-bold tracking-tight text-gray-900 dark:text-white">
          Our Journey
        </h2>
        <p className="prose sm:w-2/3 w-full px-4 mb-8 text-md md:text-lg font-medium text-gray-700 dark:text-gray-400 text-left leading-relaxed">
          We began our application development journey using React as our
          frontend JavaScript library, and we used{" "}
          <span className="font-bold">MongoDB</span> as our initial database.
          However, based on a professor's suggestion, we switched to{" "}
          <span className="font-bold">MySQL</span> to improve our payment record
          keeping capabilities. We also utilized Node.js and Express.js to build
          our backend server and API. Our design inspiration came from popular
          delivery apps like{" "}
          <Link
            href="https://www.pedidosya.com.uy/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 underline lg:hover:text-blue-600"
          >
            PedidosYa
          </Link>{" "}
          and{" "}
          <Link
            href="https://www.rappi.com.uy/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 underline lg:hover:text-blue-600"
          >
            Rappi.
          </Link>
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
