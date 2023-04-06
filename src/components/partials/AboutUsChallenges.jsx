import React from "react";
import { FaCreditCard, FaSearch } from "react-icons/fa";

function AboutUsChallenges() {
  return (
    <>
      <div className="block w-[358px] mx-auto sm:mx-0 my-4 sm:my-0 p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          Challenges
        </h5>
        <ul className="list-disc list-inside text-left">
          <li className="flex items-center mb-2 text-lg font-medium text-gray-700 dark:text-gray-400">
            <FaCreditCard className="inline-block mr-3 text-8xl text-gray-500 dark:text-gray-400" />Payment gateway: Integrating a payment gateway can be complex and requires careful attention to security and user experience.
          </li>
          <li className="flex items-center mb-2 text-lg font-medium text-gray-700 dark:text-gray-400">
            <FaSearch className="inline-block mr-3 text-8xl text-gray-500 dark:text-gray-400" /> Search functionality: Building a fast and accurate search engine for large datasets can be a challenge, requiring knowledge of indexing, ranking, and optimization techniques.
          </li>
        </ul>
      </div>
    </>
  );
}

export default AboutUsChallenges;
