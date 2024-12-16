import React, { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { motion } from "framer-motion";
import logo from "../../assets/logo.png";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  // Variants for the mobile menu
  const mobileMenuVariants = {
    hidden: {
      opacity: 0,
      y: -20,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
    exit: {
      opacity: 0,
      y: -20,
      transition: {
        duration: 0.5,
        ease: "easeIn",
      },
    },
  };

  // Variants for animating menu items
  const menuItemVariants = {
    hidden: {
      opacity: 0,
      x: -20,
    },
    visible: (index) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: index * 0.1,
        duration: 0.4,
      },
    }),
  };

  return (
    <header className="sticky top-0 z-50 bg-gray-100 shadow-md">
      <div className="flex items-center justify-between max-w-7xl h-24 mx-auto px-6 lg:px-12">
        <div className="flex">
          <img src={logo} alt="Logo" className="w-36 h-auto lg:w-48 lg:h-auto rounded-full cursor-pointer" />
        </div>

        {/* Navigation Menu for Large Screens */}
        <nav className="hidden lg:flex justify-center w-full">
          <motion.ul className="flex space-x-8 text-gray-700 font-bold text-xl lg:text-2xl mr-40" initial="hidden" animate="visible" >
            {["Home", "Travels", "About"].map((item, index) => (
              <motion.li
                key={item}
                variants={menuItemVariants}
                custom={index}
                whileHover={{ scale: 1.1, color: "#38a169" }}
                className="cursor-pointer"
              >
                {item}
              </motion.li>
            ))}
          </motion.ul>
        </nav>

        {/* Hamburger Menu Icon */}
        <div className="lg:hidden">
          <button className="text-gray-700 text-3xl cursor-pointer" onClick={toggleMenu} >
            <RxHamburgerMenu />
          </button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isMenuOpen && (
        <motion.nav className="lg:hidden bg-white border-t border-gray-200" variants={mobileMenuVariants} initial="hidden" animate="visible" exit="exit">
          <ul className="flex flex-col items-center space-y-4 py-4 text-gray-700 font-bold text-lg">
            {["Home", "Travels", "About"].map((item) => (
              <motion.li
                key={item}
                whileHover={{ scale: 1.1, color: "#38a169" }}
                className="cursor-pointer"
              >
                {item}
              </motion.li>
            ))}
          </ul>
        </motion.nav>
      )}
    </header>
  );
};

export default Navigation;
