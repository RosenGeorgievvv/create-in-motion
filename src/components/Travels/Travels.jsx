import React, { useState } from "react";
import { motion } from "framer-motion";
import Card from "../Card/Card";
import Travel from "../Travel/Travel.jsx";
import data from "../data.js";

const Travels = () => {
  const [selectedTravel, setSelectedTravel] = useState(null);

  const handleCardClick = (item) => {
    setSelectedTravel(item);
  };

  const handleBack = () => {
    setSelectedTravel(null);
  }; 

  return (
    <div className="p-6 md:p-12 relative bg-gray-100">
      {selectedTravel ? (
        <Travel item={selectedTravel} onBack={handleBack} />
      ) : (
        <>
          <motion.div
            className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-green-600"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, ease: "easeInOut" }}
          />
          <div className="space-y-12">
            {data.map((item, index) => (
              <motion.div
                key={item.id}
                className={`flex items-center ${
                  index % 2 === 0
                    ? "justify-start md:pl-48 lg:pl-96"
                    : "justify-end md:pr-48 lg:pr-96"
                } md:flex-row flex-col`}
                initial={{ opacity: 0, x: -100 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{
                  delay: index * 0.2,
                  type: "spring",
                  stiffness: 50,
                  damping: 15,
                }}
              >
                <Card item={item} onClick={() => handleCardClick(item)} />
              </motion.div>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default Travels;
