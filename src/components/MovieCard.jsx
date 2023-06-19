import React from "react";
import { motion } from "framer-motion";

function MovieCard(props) {
  return (
    <motion.div
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: props.duration }}
      className="relative cursor-pointer duration-500 ease-in-out mx-2  w-[80px] h-[120px] md:w-[150px] md:h-[280px] lg:w-[200px] lg:h-[300px]"
    >
      <img
        className="absolute left-0 top-0 object-fill bg-no-repeat w-full h-full"
        src={props.movieImage}
        alt=""
      />
      <div className="absolute left-0 top-0 w-full h-full bg-black opacity-10"></div>
    </motion.div>
  );
}

export default MovieCard;
