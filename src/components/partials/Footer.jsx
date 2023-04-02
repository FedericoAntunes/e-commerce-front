import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faTwitter,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import { NavLink } from "react-router-dom";

function Footer() {
  return (
    <>
      <footer
        className="py-8 bg-white text-left mt-12"
        style={{ boxShadow: "rgba(181, 129, 108, 0.5) 0px 16px 24px -18px" }}
      >
        <div className="w-full px-4">
          <div className="flex flex-wrap w-full justify-between">
            <div className="w-full lg:border-r border-b pb-2 pr-2 lg:w-[300px] mb-4 lg:mb-0">
              <h2 className="text-black text-xl font-bold mb-4">About Us</h2>
              <p className="text-gray-700">
                No Hunger is an e-commerce that will provide you the best
                restaurants all around the world.
              </p>
            </div>
            <div className="w-full lg:border-r border-b pb-2 pr-2 lg:w-[300px] mb-4 lg:mb-0">
              <h2 className="text-black text-xl font-bold mb-4">Contact Us</h2>
              <p className="text-gray-700">
                18 de Julio, Centro
                <br />
                Montevideo, Uruguay 224
                <br />
                Phone: 123456789
                <br />
                Email: info@nohunger.org
              </p>
            </div>
            <div className="lg:border-r justify-center flex w-full lg:w-[300px] mb-4 lg:mb-0">
              <div className="flex mt-5">
                <NavLink className="mx-4">
                  <FontAwesomeIcon
                    className="text-yellow-300 hover:text-yellow-400"
                    icon={faFacebook}
                    size="2x"
                  />
                </NavLink>
                <NavLink className="mr-4">
                  <FontAwesomeIcon
                    className="text-yellow-300 hover:text-yellow-400"
                    icon={faTwitter}
                    size="2x"
                  />
                </NavLink>
                <NavLink className="mr-4">
                  <FontAwesomeIcon
                    className="text-yellow-300 hover:text-yellow-400"
                    icon={faInstagram}
                    size="2x"
                  />
                </NavLink>
              </div>
            </div>
            <div className="w-full mx-4 mt-6 flex justify-end text-start">
              <NavLink className="text-black mr-4">Privacy Policy</NavLink>
              <NavLink className="text-black mr-4">Terms of Service</NavLink>
            </div>
            <div className="w-full flex justify-end pr-2  mb-4 lg:mb-0">
              <p className="text-gray-600">
                &copy; 2023 No Hunger. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
