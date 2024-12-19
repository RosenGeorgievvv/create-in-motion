import React from "react";

const Card = ({ item }) => {
  return (
    <div className="w-5/12 p-4 border border-gray-200 rounded-lg shadow-lg bg-white relative">
      <h2 className="text-2xl font-bold mb-4 text-center">{item.name}</h2>
      <img
        src={item.img[0]} // Use the first image
        alt={item.name}
        className="w-full h-48 object-cover rounded-md"
      />
      <p className="mt-4 text-gray-600">
        {item.description.substring(0, 100)}...
      </p>
      <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 hover:opacity-100 rounded-md transition-opacity duration-300">
        <button className="text-white text-lg font-semibold">Read More</button>
      </div>
    </div>
  );
};

export default Card;
