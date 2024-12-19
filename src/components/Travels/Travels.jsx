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

  const handleBack = () =>{
    setSelectedTravel(null);
  }


  return (
    <div className="p-12 relative bg-gray-100">
      {selectedTravel ? (
        <Travel item={selectedTravel} onBack={handleBack} />
      ) : (
        <>
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-green-600"></div>
          <div className="space-y-12">
            {data.map((item, index) => (
              <div
                key={item.id}
                className={`flex items-center ${
                  index % 2 === 0 ? "justify-start pl-96" : "justify-end pr-96"
                }`}
              >
                <Card item={item} onClick={() => handleCardClick(item)} />
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default Travels;
