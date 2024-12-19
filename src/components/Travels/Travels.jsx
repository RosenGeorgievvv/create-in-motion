import React from "react";
import Card from "../Card/Card";
import data from "../data.js"; 

const Travels = () => {
  return (
    <div className="p-8 relative">
      <div className="absolute left-1/2 transform -translate-x-1/2 h-5/6 w-1 bg-green-700"></div>

      <div className="space-y-12">
        {data.map((item, index) => (
          <div
            key={item.id}
            className={`flex items-center ${
              index % 2 === 0 ? "justify-start" : "justify-end"
            }`}
          >
            <Card item={item} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Travels;
