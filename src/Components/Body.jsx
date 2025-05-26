import React, { useState } from "react";
import Header from "./Header";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowRightLong,
  faDownLong,
  faClose,
} from "@fortawesome/free-solid-svg-icons";
import { assest } from "../assets/asset";
import { Link } from "react-scroll";

const Body = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="relative scroll-smooth" id="header">
      <div className="absolute w-full">
        <Header isOpen={isOpen} setIsOpen={setIsOpen} />
      </div>
      <div className="grid grid-cols-2 items-center">
        <div className="px-6 lg:px-28 hidden md:block">
          <h1 className="text-5xl font-medium mb-2 overflow-hidden">
            Find Your Dream Home Today!
          </h1>
          <p className="text-sm my-5 lg:w-108">
            Discover the perfect place to live, work or invest. Browse our
            curated listings accross top neighborhoods and connect with trusted
            agents in one place
          </p>
          <div className="flex items-center gap-2">
            <FontAwesomeIcon
              icon={faArrowRightLong}
              className="p-1.5 text-xs bg-blue-900 text-white rounded"
            />
            <p className="underline text-blue-900 cursor-pointer">
              Explore our properties
            </p>
          </div>
        </div>
        <div className="w-180 lg:w-220 overflow-hidden">
          <img src={assest.home_6} alt="logo" className="bg-cover" />
          <div className="absolute block md:hidden top-1/3 left-top-1/3 transform -translate-x-top-1/3 -translate-y-top-1/3 mx-4">
            <h1 className="text-4xl font-extrabold text-blue-900 overflow-hidden">
              Find Your Dream Home Today!
            </h1>
            <p className="text-lg my-5 lg:w-108 text-blue-200 font-medium">
              Discover the perfect place to live, work or invest. Browse our
              curated listings accross top neighborhoods and connect with
              trusted agents in one place.
            </p>
            <div className="flex items-center gap-2">
              <p className="p-3 border rounded text-blue-200 font-medium cursor-pointer">
                Explore our properties
              </p>
            </div>
            <Link to="about" smooth={true} duration={800} offset={-80}>
              <FontAwesomeIcon
                icon={faDownLong}
                className="p-5  bg-gray-900/40 text-gray-400 rounded-full block md:hidden mt-32"
              />
            </Link>
          </div>
        </div>
      </div>
      {isOpen ? (
        <div className="w-full bg-white absolute top-0 bottom-0 h-full block md:hidden">
          <FontAwesomeIcon
            icon={faClose}
            className="text-2xl text-black right-0 absolute py-6 px-6 cursor-pointer"
            onClick={() => setIsOpen(!isOpen)}
          />

          <div className="flex flex-col items-center my-20 gap-7">
            <Link
              to="header"
              smooth={true}
              duration={500}
              offset={-80}
              className="text-[14px]"
              onClick={() => setIsOpen(!isOpen)}
            >
              Home
            </Link>
            <Link
              to="listings"
              smooth={true}
              duration={500}
              offset={-80}
              className="text-[14px]"
              onClick={() => setIsOpen(!isOpen)}
            >
              Listings
            </Link>
            <Link
              to="about"
              smooth={true}
              duration={500}
              offset={-80}
              className="text-[14px]"
              onClick={() => setIsOpen(!isOpen)}
            >
              About
            </Link>
            <Link
              to="testemonial"
              smooth={true}
              duration={500}
              offset={-80}
              className="text-[14px]"
              onClick={() => setIsOpen(!isOpen)}
            >
              Testemonials
            </Link>
            <Link
              to="contact"
              smooth={true}
              duration={500}
              offset={-80}
              onClick={() => setIsOpen(!isOpen)}
              className="bg-blue-900 text-white px-4 py-2 rounded-full cursor-pointer text-sm"
            >
              Contact us
            </Link>
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default Body;
