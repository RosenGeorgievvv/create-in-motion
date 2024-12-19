import React from "react";
import { motion } from "framer-motion"; 
import Card from "../Card/Card";
import data from "../data.js";

const Travels = () => {
  return (
    <div className="p-12 relative bg-gray-100">
      <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-green-600"></div>
      <div className="space-y-12">
        {data.map((item, index) => (
          <motion.div
            key={item.id}
            className={`flex items-center ${
              index % 2 === 0 ? "justify-start pl-96" : "justify-end pr-96"
            }`}
            initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              duration: 0.8,
              ease: "easeInOut",
            }}
          >
            <Card item={item} />
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Travels;
