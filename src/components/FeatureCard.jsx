import React from "react";

function FeatureCard(props) {
  return (
    <div
      className={`w-[250px] h-[130px] mt-2 flex flex-col items-center justify-center m-2 shadow-2xl rounded-2xl hover:scale-[1.05] border-[0.2rem] border-[#FFCC00] ease-in-out duration-500 bg-gradient-to-br ${props.startColor} ${props.endColor} cursor-pointer md:mt-5 md:w-[300px] md:h-[150px] lg:mx-5`}
    >
      {props.icon}
      <p className={`py-1 ${props.textColor} text-[1rem] md:text-[1.2rem]`}>
        {props.name}
      </p>
    </div>
  );
}

export default FeatureCard;
