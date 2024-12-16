import React, { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { motion } from "framer-motion"; 
import logo from "../../assets/logo.png";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const menuVariants = {
    hidden: {
      opacity: 0,
      y: -20,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
    exit: {
      opacity: 0,
      y: -20,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <header className="w-full bg-white shadow-md">
      <div className="flex items-center justify-between max-w-7xl h-24 mx-auto px-6 lg:px-12">
        <div className="shrink-0">
          <img src={logo} alt="Logo" className="w-36 h-auto lg:w-48 lg:h-auto rounded-full cursor-pointer" />
        </div>

        <nav className="hidden lg:flex flex-grow justify-center">
          <ul className="flex space-x-8 text-gray-700 font-bold text-xl lg:text-2xl">
            <li className="hover:text-green-500 cursor-pointer">Home</li>
            <li className="hover:text-green-500 cursor-pointer">Travels</li>
            <li className="hover:text-green-500 cursor-pointer">About</li>
          </ul>
        </nav>

        <button className="lg:hidden text-gray-700 text-3xl cursor-pointer" onClick={toggleMenu} >
          <RxHamburgerMenu />
        </button>
      </div>

      {/* Mobile Navigation Menu */}
      {isMenuOpen && (
        <motion.nav
          className="lg:hidden bg-white border-t border-gray-200"
          initial="hidden"
          animate="visible"
          exit="exit"
          variants={menuVariants}
        >
          <ul className="flex flex-col items-center space-y-4 py-4 text-gray-700 font-bold text-lg">
            <li className="hover:text-green-500 cursor-pointer">Home</li>
            <li className="hover:text-green-500 cursor-pointer">Travels</li>
            <li className="hover:text-green-500 cursor-pointer">About</li>
          </ul>
        </motion.nav>
      )}
    </header>
  );
};

export default Navigation;
