import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

function CardAbout({ name, description, linkedin, github, image }) {
  return (
    <>
      <div className="w-[200px] h-full bg-white scale-125 sm:scale-100 border border-gray-300 rounded-lg shadow-lg dark:bg-gray-800 dark:border-gray-700 m-3">
        <div className="bg-gray-200">
          <img
            className="rounded-full h-52 mx-auto  "
            src={image}
            alt="card-img"
          />
        </div>
        <div className="p-5">
          <h5 className="mb-2 text-lg font-bold tracking-tight text-gray-900 dark:text-white">
            {name}
          </h5>
          <h6 className="text-indigo-800 text-sm font-bold">
            Full Stack Developer Jr
          </h6>
          <p class="mb-3 leading-7 font-normal text-gray-700 dark:text-gray-400 md:text-xs md:px-4 lg:mb-6 break-words">
            {description}
          </p>

          <div className="absolute bottom-3 left-0 right-0 flex justify-center gap-6 items-center">
            <a
              href={linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-700 hover:text-gray-800 hover:scale-110 transition duration-300"
            >
              <FontAwesomeIcon icon={faLinkedin} size="2x" />
            </a>
            <a
              href={github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-700 hover:text-gray-800 hover:scale-110 transition duration-300"
            >
              <FontAwesomeIcon icon={faGithub} size="2x" />
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default CardAbout;
