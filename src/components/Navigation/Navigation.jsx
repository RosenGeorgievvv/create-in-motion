import React, { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
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
    <header className="w-full bg-gray-200 shadow-md">
      <div className="flex justify-between p-4 lg:justify-center mr-40 relative">
        {/* Logo */}
        <div className="flex items-center">
          <Link to="/">
            <img
              src={logo}
              alt="Logo"
              className="w-36 h-auto lg:w-48 lg:h-auto rounded-full cursor-pointer"
            />
          </Link>
        </div>

        {/* Hamburger Menu Icon */}
        <div className="lg:hidden">
          <button
            className="text-gray-700 text-3xl cursor-pointer"
            onClick={toggleMenu}
          >
            <RxHamburgerMenu />
          </button>
        </div>

        {/* Desktop Navigation Menu */}
        <nav className="hidden lg:flex justify-center items-center w-full">
          <ul className="flex space-x-8 text-gray-700 font-bold text-xl lg:text-2xl">
            <li className="hover:text-green-700 cursor-pointer">
              <Link to="/">Home</Link>
            </li>
            <li className="hover:text-green-700 cursor-pointer">
              <Link to="/travels">Travels</Link>
            </li>
            <li className="hover:text-green-700 cursor-pointer">
              <Link to="/about">About</Link>
            </li>
          </ul>
        </nav>
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
          <ul className="flex flex-col items-center justify-center space-y-4 py-4 text-gray-700 font-bold text-lg">
            <li className="hover:text-green-700 cursor-pointer">
              <Link to="/">Home</Link>
            </li>
            <li className="hover:text-green-700 cursor-pointer">
              <Link to="/travels">Travels</Link>
            </li>
            <li className="hover:text-green-700 cursor-pointer">
              <Link to="/about">About</Link>
            </li>
          </ul>
        </motion.nav>
      )}
    </header>
  );
};

export default Navigation;
