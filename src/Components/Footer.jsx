import React from "react";
import { assest } from "../assets/asset";
import { Link } from "react-scroll";

const Footer = () => {
  return (
    <div
      className="px-4 mt-6 md:mt-14 lg:mt-20 bg-blue-900 pt-10 scroll-smooth"
      id="Footer"
    >
      <div className="container mx-auto fl ex flex-col md:flex-row justify-between items-center">
        <div className="w-full md:w-1/3 mb-8 md:mb-0">
          <img src={assest.logo} alt="" />
          <p className="text-gray-400 mt-4">
            Welcome to Home 2 Home, your trusted partner in real estate. With
            years of expertise and a passion for connecting people to their
            dream properties
          </p>
        </div>
        <div className="w-full md:w-1/5 mb-8 md:mb-0">
          <h3 className="text-white text-lg font-bold mb-4">Company</h3>
          <ul className="flex flex-col gap-2 text-gray-400">
            <Link
              to="header"
              smooth={true}
              duration={500}
              offset={-80}
              className="hover:text-white"
            >
              Home
            </Link>
            <Link
              to="listings"
              smooth={true}
              duration={500}
              offset={-80}
              className="hover:text-white"
            >
              Listings
            </Link>
            <Link
              to="about"
              smooth={true}
              duration={500}
              offset={-80}
              className="hover:text-white"
            >
              About
            </Link>
            <Link
              to="testemonial"
              smooth={true}
              duration={500}
              offset={-80}
              className="hover:text-white"
            >
              Testimonial
            </Link>
          </ul>
        </div>
        <div className="w-full md:w-1/3">
          <h3 className="text-white text-lg font-bold mb-4">
            Subscribe to our newsletter
          </h3>
          <p className="text-gray-400 mb-4 max-w-80">
            The latest news, articles and resources, sent to your inbox weekly
          </p>
          <div className="flex gap-2">
            <input
              type="email"
              placeholder="Enter your email"
              className="p-2 rounded bg-gray-800 text-gray-400 border border-gray-700 focus:outline-none w-full md:w-auto"
            />
            <button className="py-2 px-4 rounded bg-blue-500 text-white">
              Send
            </button>
          </div>
        </div>
      </div>
      <div className="border-t border-blue-700 py-4 mt-10 text-center text-gray-300">
        Copyright 2025 @ comfort. All Right Reserved.
      </div>
    </div>
  );
};

export default Footer;
