import React from "react";

import promo1 from "../assets/Shared Mobile & Desktop Assets/Promo 1.jpg";
import promo2 from "../assets/Shared Mobile & Desktop Assets/Promo 2.jpg";
import promo3 from "../assets/Shared Mobile & Desktop Assets/Promo 3.jpg";
import promo4 from "../assets/Shared Mobile & Desktop Assets/Promo 4.jpg";

const promos = [
  { id: 1, text: "BUY 2 FOR R700", image: promo1 },
  { id: 2, text: "BUY 2 FOR R1000", image: promo2 },
  { id: 3, text: "BUY 2 FOR R1200", image: promo3 },
  { id: 4, text: "BUY 2 FOR R800", image: promo4 },
];

const PromotionSection = () => {
  return (
    <section className="w-full py-20 px-4 bg-white">
      <div className="flex justify-center">
        <div className="flex gap-[50px] w-[1290px]">
          {promos.map((promo) => (
            <div
              key={promo.id}
              className="relative w-[314px] h-[313px] flex-shrink-0 overflow-hidden rounded-lg shadow-lg"
            >
              <img
                src={promo.image}
                alt={promo.text}
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-red-600 text-white font-bold text-lg px-4 py-2 text-center">
                {promo.text}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PromotionSection;
