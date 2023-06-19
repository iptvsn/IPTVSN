import React from "react";
import { motion } from "framer-motion";
import PricingCard from "./PricingCard";

function Pricing() {
  const pricingPlans = [
    {
      period: "3 Mois",
      normalPrice: "7500",
      discountPrice: "6000",
    },
    {
      period: "6 Mois",
      normalPrice: "12 000",
      discountPrice: "10 000",
    },
    {
      period: "12 Mois",
      normalPrice: "24 500",
      discountPrice: "19 500",
    },
  ];

  return (
    <div id="Pricing" className="w-full pt-4">
      <motion.div
        animate={{ x: 0, opacity: 1 }}
        initial={{ x: -1080, opacity: 0 }}
        transition={{ duration: 1 }}
        className="w-full flex flex-col justify-center items-center"
      >
        <h1 className="text-center font-bold md:text-[1.5rem]">Pricing</h1>
        <div className="w-[60px] h-[5px] bg-[#FFCC00] rounded-lg md:w-[120px] md:h-[5px]"></div>
      </motion.div>
      <div className="w-full overflow-hidden flex flex-row flex-wrap mt-5 justify-center">
        {pricingPlans.map((plan, index) => (
          <PricingCard
            key={index}
            period={plan.period}
            normalPrice={plan.normalPrice}
            discountPrice={plan.discountPrice}
          />
        ))}
      </div>
    </div>
  );
}

export default Pricing;
