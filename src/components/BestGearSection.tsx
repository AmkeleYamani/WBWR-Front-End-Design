import React from "react";

import trainImg from "../assets/Shared Mobile & Desktop Assets/Train.jpg";
import runImg from "../assets/Shared Mobile & Desktop Assets/Run.jpg";
import golfImg from "../assets/Shared Mobile & Desktop Assets/Golf.jpg";
import accessoriesImg from "../assets/Shared Mobile & Desktop Assets/Accessories.jpg";

const gearItems = [
  { id: 1, label: "TRAIN", image: trainImg },
  { id: 2, label: "RUN", image: runImg },
  { id: 3, label: "GOLF", image: golfImg },
  { id: 4, label: "ACCESSORIES", image: accessoriesImg },
];

const BestGearSection = () => {
  return (
    <section className="w-full py-20 bg-white flex justify-center">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-x-[28px] gap-y-6" style={{ width: "1290px" }}>
        {gearItems.map((item) => (
          <div
            key={item.id}
            className="relative w-[314px] h-[313px] overflow-hidden rounded-lg shadow-lg group"
          >
            <img
              src={item.image}
              alt={item.label}
              className="w-full h-full object-cover transform group-hover:scale-105 transition duration-300"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white text-lg font-bold text-center py-3">
              {item.label}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default BestGearSection;
