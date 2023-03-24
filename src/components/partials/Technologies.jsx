import React from "react";

function Technologies() {
  return (
    <>
      <div className="flex justify-center my-4">
        <h1 className="text-4xl text-indigo-600 mb-4">Technologies Used:</h1>
      </div>
      <div className="flex flex-wrap justify-center">
        <div className="m-4 p-4 transform hover:scale-110 transition-all duration-500 shadow-md hover:opacity-75">
         <a href="http://react.dev" target="_blank" rel="noopener noreferrer">
           <img src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg" alt="React.js" title="React.js" className="w-24 h-24" />
        </a>
        </div>
        <div className="m-4 p-4 transform hover:scale-110 transition-all duration-500 shadow-md hover:opacity-75">
            <a href="http://tailwindcss.com/" target="_blank" rel="noopener noreferrer">
            <img src="https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg" alt="Tailwind CSS" className="w-24 h-24" />
            </a>
        </div>
        <div className="m-4 p-4 transform hover:scale-110 transition-all duration-500 shadow-md hover:opacity-75">
            <a href="https://nodejs.org/en" target="_blank" rel="noopener noreferrer">
            <img src="https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg" alt="Node.js" className="w-24 h-24" />
            </a>
        </div>
        <div className="m-4 p-4 transform hover:scale-110 transition-all duration-500 shadow-md hover:opacity-75">
            <a href="http://expressjs.com/" target="_blank" rel="noopener noreferrer">
            <img src="https://i.ibb.co/Tm5DZ5N/pngwing-com-1.png" alt="Express.js" className="w-26 h-24" />
            </a>
        </div>
        <div className="m-4 p-4 transform hover:scale-110 transition-all duration-500 shadow-md hover:opacity-75">
            <a href="https://www.mysql.com/" target="_blank" rel="noopener noreferrer">
            <img src="https://i.ibb.co/c8mgPmX/pngwing-com.png" alt="MySQL" className="w-24 h-24" />
            </a>
        </div>
      </div>
    </>
  );
}

export default Technologies;
