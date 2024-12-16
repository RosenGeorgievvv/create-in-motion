import React from "react";
import logo from "../../assets/logo.png";

const Navigation = () => {
  return (
    <header className="flex items-center px-6 bg-gray-100 shadow-md w-full">
        {/* centralized & logo */}
      <div className="flex justify-between items-center max-w-5xl mx-auto w-full">
        <img src={logo} alt="Logo" className="w-14 h-14" />
      </div>
      {/* Navigation Menu */}
      <nav>
        <ul className="flex space-x-6 text-gray-700 font-semibold ">
          <li className="hover:text-blue-500 cursor-pointer">Home</li>
          <li className="hover:text-blue-500 cursor-pointer">Travels</li>
          <li className="hover:text-blue-500 cursor-pointer">About</li>
        </ul>
      </nav>
    </header>
  );
};

export default Navigation;
