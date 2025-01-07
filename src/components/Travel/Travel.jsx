import React from "react";
import { motion } from "framer-motion";
import { IoArrowBack } from "react-icons/io5"; 

const Travel = ({ item, onBack }) => {
  return (
    <div className="p-6 md:p-12 bg-gray-100">
      <button
        onClick={onBack}
        className="px-3 py-3 bg-green-600 text-white rounded-full shadow-md hover:bg-green-700 transition flex items-center justify-center"
      >
        <IoArrowBack className="text-xl" />
      </button>

      <h1 className="text-2xl md:text-4xl font-bold mb-8 md:mb-16 text-center">
        {item.name}
      </h1>

      <motion.h2
        className="text-base md:text-lg text-center text-gray-700 mb-8 md:mb-12 px-2 md:px-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        {item.description}
      </motion.h2>

      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-12"
        initial="hidden"
        animate="visible"
        variants={{
          hidden: { opacity: 0, y: 50 },
          visible: {
            opacity: 1,
            y: 0,
            transition: { staggerChildren: 0.2, duration: 0.5 },
          },
        }}
      >
        {item.img.map((src, index) => (
          <motion.div
            key={index}
            className="relative overflow-hidden rounded-lg shadow-md cursor-pointer"
            initial={{ scale: 1 }}
            whileHover={{ scale: 1.1, zIndex: 5 }}
            whileTap={{ scale: 1.1 }}
            animate={{ opacity: 1 }}
            transition={{
              duration: 0.3,
              ease: "easeInOut",
            }}
          >
            <motion.img
              src={src}
              alt={`${item.name} ${index + 1}`}
              className="w-full h-64 md:h-96 object-contain"
              whileHover={{
                filter: "brightness(1.1)",
              }}
            />
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Travel;
