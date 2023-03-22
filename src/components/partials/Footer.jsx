import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faTwitter,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

function Footer() {
  return (
    <>
      <footer className="bg-gray-900 py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap">
            <div className="w-full lg:w-1/3 mb-4 lg:mb-0">
              <h2 className="text-white font-bold mb-4">About Us</h2>
              <p className="text-gray-500">
                No Hunger is an e-commerce that will provide you the best
                restaurants all around the world.
              </p>
            </div>
            <div className="w-full lg:w-1/3 mb-4 lg:mb-0">
              <h2 className="text-white font-bold mb-4">Contact Us</h2>
              <p className="text-gray-500">
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
              <div className="flex sm: justify-center mt-5">
                <a href="#" className="text-gray-500 mr-4 hover:text-white">
                  <FontAwesomeIcon icon={faFacebook} size="2x" />
                </a>
                <a href="#" className="text-gray-500 mr-4 hover:text-white">
                  <FontAwesomeIcon icon={faTwitter} size="2x" />
                </a>
                <a href="#" className="text-gray-500 mr-4 hover:text-white">
                  <FontAwesomeIcon icon={faInstagram} size="2x" />
                </a>
              </div>
            </div>
          </div>
          <hr className="my-8 border-gray-800" />
          <div className="flex flex-wrap">
            <div className="w-full lg:w-2/3 lg:order-2 mb-4 lg:mb-0">
              <p className="text-gray-500">
                &copy; 2023 No Hunger. All rights reserved.
              </p>
            </div>
            <div className="w-full lg:w-1/3 lg:order-1">
              <a href="#" className="text-gray-500 mr-4 hover:text-white">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-500 mr-4 hover:text-white">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
