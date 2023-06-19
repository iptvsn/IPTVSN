import React from "react";
import { motion } from "framer-motion";
import FeatureCard from "./FeatureCard";
import { FaMoneyBill } from "react-icons/fa";
import { BsSpeedometer2 } from "react-icons/bs";
import { BiSupport } from "react-icons/bi";
import { MdOutlineInstallDesktop, MdOutlinePayment } from "react-icons/md";
import tvLogo from "../assets/icons8-tv.svg";

function Features() {
  const featuresList = [
    {
      name: "Ultra-speed Connection",
      icon: <BsSpeedometer2 size={50} color="white" />,
      startColor: "from-[#333333]",
      endColor: "to-[#333333]",
      textColor: "text-[#FFFFFF]",
    },
    {
      name: "17k+ World Channels",
      icon: (
        <img
          src={tvLogo}
          alt="Iptv Channels"
          className="w-[50px] h-[50px] bg-no-repeat object-cover"
        />
      ),
      startColor: "from-[#333333]",
      endColor: "to-[#333333]",
      textColor: "text-[#FFFFFF]",
    },
    {
      name: "Fast Installation - Less Than 24H",
      icon: <MdOutlineInstallDesktop size={50} color="white" />,
      startColor: "from-[#333333]",
      endColor: "to-[#333333]",
      textColor: "text-[#FFFFFF]",
    },
    {
      name: "Flexible Tariff Plans",
      icon: <FaMoneyBill size={50} color="white" />,
      startColor: "from-[#333333]",
      endColor: "to-[#333333]",
      textColor: "text-[#FFFFFF]",
    },
    {
      name: "Fast Support 24/7",
      icon: <BiSupport size={50} color="white" />,
      startColor: "from-[#333333]",
      endColor: "to-[#333333]",
      textColor: "text-[#FFFFFF]",
    },
    {
      name: "Paiemement facile et efficace",
      icon: <MdOutlinePayment size={50} color="white" />,
      startColor: "from-[#333333]",
      endColor: "to-[#333333]",
      textColor: "text-[#FFFFFF]",
    },
  ];
  return (
    <div id="Features" className="w-full mt-5 flex flex-col items-center">
      <motion.div
        animate={{ x: 0, opacity: 1 }}
        initial={{ x: -1080, opacity: 0 }}
        transition={{ duration: 1 }}
        className="w-full flex flex-col justify-center items-center"
      >
        <h1 className="text-center font-bold md:text-[1.5rem]">Features</h1>
        <div className="w-[60px] h-[5px] bg-[#FFCC00] rounded-lg md:w-[120px] md:h-[5px]"></div>
      </motion.div>
      {/* FEATURES CARD  */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {featuresList.map((feature, index) => (
          <FeatureCard
            key={index}
            name={feature.name}
            icon={feature.icon}
            startColor={feature.startColor}
            endColor={feature.endColor}
            textColor={feature.textColor}
          />
        ))}
      </div>
    </div>
  );
}

export default Features;
