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
      <footer className="py-8 bg-white" style={{boxShadow: "rgba(181, 129, 108, 0.5) 0px 16px 24px -18px"}}>
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap">
            <div className="w-full lg:w-1/3 mb-4 lg:mb-0">
              <h2 className="text-black font-bold mb-4">About Us</h2>
              <p className="text-black">
                No Hunger is an e-commerce that will provide you the best
                restaurants all around the world.
              </p>
            </div>
            <div className="w-full lg:w-1/3 mb-4 lg:mb-0">
              <h2 className="text-black font-bold mb-4">Contact Us</h2>
              <p className="text-black">
                18 of July, Center
                <br />
                Montevideo, Uruguay 224
                <br />
                Phone: 099472300
                <br />
                Email: info@nohunger.org
              </p>
            </div>
            <div className="w-full lg:w-1/3 mb-4 lg:mb-0">
              <div className="flex sm: justify-end mt-5">
                <NavLink className=" mr-4 text-black">
                  <FontAwesomeIcon icon={faFacebook} size="2x" />
                </NavLink>
                <NavLink className="mr-4 text-black">
                  <FontAwesomeIcon icon={faTwitter} size="2x" />
                </NavLink>
                <NavLink className=" mr-4 text-black">
                  <FontAwesomeIcon icon={faInstagram} size="2x" />
                </NavLink>
              </div>
            </div>
          </div>
          <hr className="my-8 border-white" />
          <div className="flex flex-wrap">
            <div className="w-full text-end lg:w-2/3 lg:order-2 mb-4 lg:mb-0">
              <p className="text-black">
                &copy; 2023 No Hunger. All rights reserved.
              </p>
            </div>
            <div className="w-full text-start lg:w-1/3 lg:order-1">
              <NavLink className="text-white mr-4 hover:text-white">
                Privacy Policy
              </NavLink>
              <NavLink className="text-white mr-4 hover:text-white">
                Terms of Service
              </NavLink>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
