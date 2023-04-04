import React from "react";
import { Grid } from "@mui/material";

function AboutDescription() {
  return (
    <div className="mt-[84px]">
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <h2 className="text-2xl font-bold mb-4">About this project:</h2>
          <p className="mb-4 w-1/2 mx-auto">
            Welcome to our ecommerce platform! We used cutting-edge technologies
            like NodeJS, ExpressJS, ReactJS, MaterialUI, Tailwind, and MySQL to
            create a fast, scalable, efficient, and visually appealing platform.
            Our goal is to provide a secure and easy-to-use shopping experience
            for our customers. This platform is the final project of a 600+
            hours coding bootcamp at Hack Academy, developed by a team of highly
            trained developers committed to staying up-to-date with the latest
            industry trends and emerging technologies.
          </p>
          <p className="font-bold mb-2">We used the following technologies:</p>
          <ul className="list-none grid grid-cols-3 w-1/4 mx-auto mt-6 mb-6">
            <li className="flex flex-col items-center my-2">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg"
                alt="React.js"
                className="h-14 mb-2"
              />
              <a
                href="http://react.dev"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="text-sm font-bold">React.js</span>
              </a>
            </li>
            <li className="flex flex-col items-center my-2">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg"
                alt="Tailwind CSS"
                className="h-14 mb-2"
              />
              <a
                href="http://tailwindcss.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="text-sm font-bold">Tailwind CSS</span>
              </a>
            </li>
            <li className="flex flex-col items-center my-2">
              <img
                src="https://i.ibb.co/Pwz6wGg/muilogo.png"
                alt="Material UI"
                className="h-14 mb-2"
              />
              <a
                href="https://mui.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="text-sm font-bold">Material UI</span>
              </a>
            </li>
            <li className="flex flex-col items-center">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg"
                alt="Node.js"
                className="h-14 mb-2"
              />
              <a
                href="https://nodejs.org/en"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="text-sm font-bold">Node.js</span>
              </a>
            </li>
            <li className="flex flex-col items-center my-2">
              <img
                src="https://i.ibb.co/Tm5DZ5N/pngwing-com-1.png"
                alt="Express.js"
                className="h-14 mb-2"
              />
              <a
                href="http://expressjs.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="text-sm font-bold">Express.js</span>
              </a>
            </li>
            <li className="flex flex-col items-center my-2">
              <img
                src="https://i.ibb.co/c8mgPmX/pngwing-com.png"
                alt="MySQL"
                className="h-14 mb-2"
              />
              <a
                href="https://www.mysql.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="text-sm font-bold">MySQL</span>
              </a>
            </li>
          </ul>
          <p className="font-bold text-xl mb-2">Features:</p>
          <ul className="list-none list-inside mb-6 w-1/2 text-left mx-auto ">
            <li className="mb-2">
              <span className="font-bold">Responsive design:</span> Our website
              adapts to different screen sizes and devices, providing a seamless
              user experience.
            </li>
            <li className="mb-2">
              <span className="font-bold">User registration and login:</span>{" "}
              Users can create accounts, log in, and save their preferences and
              orders.
            </li>
            <li className="mb-2">
              <span className="font-bold">Product browsing and search:</span>{" "}
              Our website offers a wide range of products, with a powerful
              search engine to find exactly what you need.
            </li>
            <li className="mb-2">
              <span className="font-bold">Shopping cart:</span> Users can add
              and remove items from their cart, and keep track of the total cost
              and quantity.
            </li>
            <li className="mb-2">
              <span className="font-bold">Checkout process:</span> Our website
              integrates with a secure payment gateway, allowing users to
              complete their purchases safely and easily.
            </li>
            <li>
              <span className="font-bold">Order history and tracking:</span>{" "}
              Users can view their past orders and track the status of their
              current ones.
            </li>
          </ul>

          <p className="font-bold text-xl mb-2">Challenges:</p>
          <ul className="list-none list-inside mb-6 w-1/2 text-left mx-auto">
            <li className="mb-2">
              <span className="font-bold">Payment gateway:</span> Integrating a
              payment gateway can be complex and requires careful attention to
              security and user experience.
            </li>
            <li>
              <span className="font-bold">Search functionality:</span> Building
              a fast and accurate search engine for large datasets can be a
              challenge, requiring knowledge of indexing, ranking, and
              optimization techniques.
            </li>
          </ul>
        </Grid>
      </Grid>
    </div>
  );
}

export default AboutDescription;
