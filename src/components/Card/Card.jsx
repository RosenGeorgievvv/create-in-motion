import React from "react";
import { motion } from "framer-motion"; 

const Card = ({ item }) => {
  return (
    <motion.div
      className="w-1/3 p-4 border border-gray-200 rounded-lg shadow-lg bg-gray-300 relative"
      whileHover={{
        scale: 1.1, 
        boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.2)",
      }}
      transition={{
        duration: 0.3, 
        ease: "easeInOut",
      }}
    >
      <h2 className="text-2xl font-bold mb-4 text-center">{item.name}</h2>
      <img
        src={item.img[1]} 
        alt={item.name}
        className="w-full h-48 object-cover rounded-md"
      />
      <p className="mt-4 text-gray-600">
        {item.description.substring(0, 50)}...
      </p>
      <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 hover:opacity-100 rounded-md transition-opacity duration-300">
        <button className="text-white text-lg font-semibold">Read More</button>
      </div>
    </motion.div>
  );
};

export default Card;
