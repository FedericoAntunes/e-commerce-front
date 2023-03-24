import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

function CardAbout({ name, description, linkedin, github, image }) {
  return (
    <>
      <div className="w-[258px] bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 mx-3 my-3">
        <img
          className="rounded-t-lg h-64 mx-auto  "
          src={image}
          alt="card-img"
        />
        <div className="p-5">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {name}
          </h5>
          <h6 className="text-indigo-800 font-bold">Full Stack Developer Jr</h6>

          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
            {description}
          </p>
          <div className="flex justify-center gap-6 items-center">
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
