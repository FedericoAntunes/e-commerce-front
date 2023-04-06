import { FaReact, FaCss3, FaNodeJs } from 'react-icons/fa';
import { SiMysql, SiExpress } from 'react-icons/si';
import { MdWeb } from 'react-icons/md';

function AboutUsTechnologies() {
  return (
    <>
      <div className="block w-[358px] mx-auto sm:mx-0 my-4 sm:my-0 p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          Technologies
        </h5>
        <ul className="list-none text-left w-full pl-20 mt-6">
          <li className="mb-2 text-lg font-medium text-gray-700 dark:text-gray-400">
            <FaReact className="inline-block mr-2 text-4xl" /> React
          </li>
          <li className="mb-2 text-lg font-medium text-gray-700 dark:text-gray-400">
            <FaCss3 className="inline-block mr-2 text-4xl" /> Tailwind CSS
          </li>
          <li className="mb-2 text-lg font-medium text-gray-700 dark:text-gray-400">
            <SiMysql className="inline-block mr-2 text-4xl" /> MySQL
          </li>
          <li className="mb-2 text-lg font-medium text-gray-700 dark:text-gray-400">
            <FaNodeJs className="inline-block mr-2 text-4xl" /> Node.js
          </li>
          <li className="mb-2 text-lg font-medium text-gray-700 dark:text-gray-400">
            <SiExpress className="inline-block mr-2 text-4xl" /> Express.js
          </li>
          <li className="mb-2 text-lg font-medium text-gray-700 dark:text-gray-400">
            <MdWeb className="inline-block mr-2 text-4xl" /> Material UI
          </li>
        </ul>
      </div>
    </>
  );
}

export default AboutUsTechnologies;
