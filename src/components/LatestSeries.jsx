import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import MovieCard from "./MovieCard";

function LatestSeries() {
  const [currentPart, setCurrentPart] = useState(1);
  const firstPart = [
    "https://m.media-amazon.com/images/M/MV5BYmQ4YWMxYjUtNjZmYi00MDQ1LWFjMjMtNjA5ZDdiYjdiODU5XkEyXkFqcGdeQXVyMTMzNDExODE5._V1_FMjpg_UX1000_.jpg",
    "https://m.media-amazon.com/images/M/MV5BZjkzMmU5MjMtODllZS00OTA5LTk2ZTEtNjdhYjZhMDA5ZTRhXkEyXkFqcGdeQXVyOTA3MTMyOTk@._V1_FMjpg_UX1000_.jpg",
    "https://flxt.tmsimg.com/assets/p14652182_b_v8_aa.jpg",
    "https://fr.web.img5.acsta.net/pictures/17/05/22/16/49/588696.jpg",
    "https://m.media-amazon.com/images/M/MV5BMTU1OTdjYTUtMzA2MS00Njg4LWI1NTctMWUzYzNkNmQ5YWY3XkEyXkFqcGdeQXVyMTUwMzM5ODkz._V1_FMjpg_UX1000_.jpg",
  ];

  const secondPart = [
    "https://cinedweller.com/wp-content/uploads/2019/07/2284257.jpg-r_1920_1080-f_jpg-q_x-xxyxx-768x1024.jpg",
    "https://m.media-amazon.com/images/M/MV5BZmU5NTcwNjktODIwMi00ZmZkLTk4ZWUtYzVjZWQ5ZTZjN2RlXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_FMjpg_UX1000_.jpg",
    "https://m.media-amazon.com/images/M/MV5BMDEwOWVlY2EtMWI0ZC00OWVmLWJmZGItYTk3YjYzN2Y0YmFkXkEyXkFqcGdeQXVyMTUzMTg2ODkz._V1_.jpg",
    "https://fr.web.img6.acsta.net/pictures/15/07/29/14/33/086520.jpg",
    "https://resizing.flixster.com/3ko6zO6791p1QPOXHUI2eCwmHXQ=/ems.cHJkLWVtcy1hc3NldHMvdHZzZXJpZXMvMDIyOTBmN2QtMzM0Yi00ODUxLWE0MWYtMmViYWJiOGViZjRkLmpwZw==",
  ];

  const switchTime = 5000;

  useEffect(() => {
    const interval = setInterval(() => {
      if (currentPart === 1) setCurrentPart(2);
      else if (currentPart === 2) setCurrentPart(1);
      console.log("Changed");
    }, switchTime);

    return () => clearInterval(interval);
  }, [currentPart]);

  return (
    <div className="w-full pt-4">
      <div className="w-full flex flex-col justify-center items-center">
        <h1 className="text-center font-bold md:text-[1.5rem]">
          Latest Series
        </h1>
        <div className="w-[60px] h-[5px] bg-[#FFCC00] rounded-lg md:w-[120px] md:h-[5px]"></div>
      </div>
      <div className="w-full overflow-hidden flex flex-row mt-5 justify-center">
        {currentPart === 1
          ? firstPart.map((movie, index) => (
              <motion.div key={index}>
                <MovieCard
                  key={index}
                  duration={2}
                  movieImage={movie}
                  enter={true}
                />
              </motion.div>
            ))
          : secondPart.map((movie, index) => (
              <MovieCard
                key={index}
                duration={2}
                movieImage={movie}
                enter={true}
              />
            ))}
      </div>
    </div>
  );
}

export default LatestSeries;
