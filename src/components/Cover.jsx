import React from "react";
import bgImage from "../assets/movies.jpg";
import { motion } from "framer-motion";

function Cover() {
  const onButtonClicked = () => {
    window.open(
      `https://wa.me/+212667256799?text=Request Free trial`,
      "_blank"
    );
  };
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.1 }}
      id="Home"
      className="relative w-full h-[350px] lg:h-[650px] md:h-[450px]"
    >
      <div className="w-full h-full">
        <img
          src={bgImage}
          alt="Iptv live soccer movies"
          className=" absolute left-0 top-0 w-full h-full bg-no-repeat object-cover opacity-80"
        />

        <div className=" absolute left-0 top-0 bg-gradient-to-l from-[#141414] to-[#141414] w-full h-full opacity-80"></div>
        <div className=" absolute left-0 top-0 w-full h-full flex flex-col items-center justify-center pt-20 md:pt-12">
          <motion.h1
            animate={{ x: 0, opacity: 1 }}
            initial={{ x: "-100vh", opacity: 0 }}
            transition={{ duration: 1.2 }}
            className="text-white text-center font-bold text-[1.2rem] md:text-[1.5rem] lg:text-3xl"
          >
            All-In-One IPTV Quality Service
          </motion.h1>
          <motion.p
            className="text-white text-center text-[0.8rem] mt-2 md:mt-4 md:text-[1.1rem] lg:text-xl"
            animate={{ x: 0, opacity: 1 }}
            initial={{ x: "-100vh", opacity: 0 }}
            transition={{ duration: 1.5 }}
          >
            Stream your favorite movies, TV shows, and sports events in stunning
            HD quality with our IPTV service.
          </motion.p>
          <motion.p
            className="text-white text-center text-[0.8rem] mt-2 md:mt-4 md:text-[1.1rem] lg:text-xl"
            animate={{ x: 0, opacity: 1 }}
            initial={{ x: "-100vh", opacity: 0 }}
            transition={{ duration: 1.8 }}
          >
            Experience the ultimate entertainment at your fingertips with our
            cutting-edge IPTV service.
          </motion.p>

          <button
            onClick={onButtonClicked}
            className="mt-4 w-[80px] h-[35px] text-[0.8rem] bg-[#F2E416] font-bold rounded-lg shadow-xl cursor-pointer md:w-[130px] md:h-[40px] md:text-[1.2rem]"
          >
            Free Trial
          </button>
          {/* LEAGUES LOGO  */}
          <div className="w-full flex flex-row justify-center mt-4 md:mt-8">
            <img
              className="w-[40px] h-[40px] md:w-[80px] md:h-[80px] mx-2 object-cover"
              src="https://upload.wikimedia.org/wikipedia/en/thumb/1/16/Senegalese_Football_Federation_logo.svg/800px-Senegalese_Football_Federation_logo.svg.png"
              alt="Senegal League"
            />
            <img
              className="w-[40px] h-[40px] md:w-[80px] md:h-[80px] mx-2 object-cover"
              src="https://seeklogo.com/images/P/premier-league-logo-7B3F0F173A-seeklogo.com.png"
              alt="Premier League"
            />
            <img
              className="w-[40px] h-[40px] md:w-[80px] md:h-[80px] mx-2 object-cover"
              src="https://1000logos.net/wp-content/uploads/2019/01/German-Bundesliga-Logo-2002.png"
              alt="Bundesliga"
            />
            <img
              className="w-[40px] h-[40px] md:w-[80px] md:h-[80px] mx-2 object-cover"
              src="https://1000logos.net/wp-content/uploads/2021/10/Italian-Serie-A-TIM-Logo-2019.png"
              alt="Seria A"
            />
            <img
              className="w-[40px] h-[40px] md:w-[80px] md:h-[80px] mx-2 object-cover"
              src="https://i.pinimg.com/564x/01/ee/bb/01eebb48530dfd231918bb184259f371.jpg"
              alt="Eredivisie "
            />
            <img
              className="w-[40px] h-[40px] md:w-[80px] md:h-[80px] mx-2 object-cover"
              src="https://a.espncdn.com/combiner/i?img=/i/leaguelogos/soccer/500/14.png"
              alt="portugal league"
            />
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default Cover;
