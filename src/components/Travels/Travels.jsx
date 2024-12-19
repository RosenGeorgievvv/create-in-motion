import React, { useState } from "react";
import data from '../data.js'


const Travels = () => {

  const [filter, setFilter] = useState('All');

  const handleFilterChange = (option) =>{
    setFilter(option);
  }

  const filteredData = filter === "All" ? data : data.filter((item) => item.name.includes(filter));

  return (
    <div className="p-4">
      {/* Filter Options */}
      <div className="flex flex-wrap gap-4 mb-6">
        {[
          "All",
          "Rwanda & Burundi",
          "Yemen",
          "Afghanistan",
          "Pakistan",
          "Venezuela",
          "Uganda",
          "South Maldives",
          "Bhutan",
          "Nepal",
        ].map((option) => (
          <button
            key={option}
            className={`px-4 py-2 rounded ${
              filter === option
                ? "bg-blue-500 text-white"
                : "bg-gray-200 hover:bg-gray-300"
            }`}
            onClick={() => handleFilterChange(option)}
          >
            {option}
          </button>
        ))}
      </div>

      {/* Grid for displaying items */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredData.map((item) => (
          <div
            key={item.id}
            className="relative group border border-gray-200 rounded-lg overflow-hidden shadow-md"
          >
            <img
              src={item.img[0]} // Use the first image for the grid
              alt={item.name}
              className="w-full h-48 object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <button className="text-white text-lg font-semibold">
                Read More
              </button>
            </div>
            <div className="p-4">
              <h2 className="text-xl font-bold">{item.name}</h2>
              <p className="text-sm text-gray-600">
                {item.description.substring(0, 100)}...
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Travels;
