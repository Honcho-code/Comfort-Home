import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { assest } from "../assets/asset";
import { faBars, faClose } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { Link } from 'react-scroll';

const Header = ({isOpen, setIsOpen}) => {
  
  return (
    <div className="md:fixed w-full z-10 scroll-smooth">
      <div className="backdrop-blur-xl border-1 border-gray-300 flex items-center justify-between m-3 md:m-6 lg:mx-28 rounded-full p-2">
        <img src={assest.favLogo} alt="" className="hidden md:block"/>
        <img src={assest.logo} alt="" className="block md:hidden" />
        <div className="md:flex items-center  hidden lg:gap-7">
          <Link to="header" smooth={true} duration={500} offset={-80} className="text-white text-[14px] hover:bg-gray-50 hover:text-black lg:px-2 px-3 py-2 rounded transition duration-300 cursor-pointer ease-in-out">Home</Link>
          <Link smooth={true} duration={500} offset={-20} to="listings" className="text-white text-[14px] hover:bg-gray-50 hover:text-black lg:px-2 px-3 py-2 rounded transition duration-300 cursor-pointer ease-in-out">Listings</Link>
          <Link smooth={true} duration={500} offset={-20} to="about" className="text-white text-[14px] hover:bg-gray-50 hover:text-black lg:px-2 px-3 py-2 rounded transition duration-300 cursor-pointer ease-in-out">About</Link>
          <Link smooth={true} duration={500} offset={-20} to="testemonial" className="text-white text-[14px] hover:bg-gray-50 hover:text-black lg:px-2 px-3 py-2 rounded transition duration-300 cursor-pointer ease-in-out">Testemonials</Link>
          <Link smooth={true} duration={500} offset={-20} to="contact"  className="bg-blue-900 text-white px-4 py-2 rounded-full cursor-pointer text-sm hover:bg-blue-700 transition duration-300  ease-in-out">
            Contact us
          </Link>
        </div>
        <div
          className="block md:hidden px-3"
          onClick={() => setIsOpen(!isOpen)}
        >
          <FontAwesomeIcon
            icon={isOpen ? faClose : faBars}
            className="text-2xl text-white"
          />
        </div>
      </div>
    </div>
  );
};

export default Header;
