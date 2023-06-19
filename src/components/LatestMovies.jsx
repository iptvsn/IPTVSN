import MovieCard from "./MovieCard";

function LatestMovies() {
  const moviesList = [
    "https://m.media-amazon.com/images/M/MV5BZTcxMDI3YzUtMzY2NC00M2RhLTg0ZTMtYzFjOTVjMGI2Mjg2XkEyXkFqcGdeQXVyMjc5MDg0NDc@._V1_.jpg",
    "https://fr.web.img3.acsta.net/pictures/22/10/04/08/45/5146722.jpg",
    "https://www.moviemeter.com/images/cover/1146000/1146802.jpg",
    "https://www.pathe.sn/media/vista/poster/en/HO00000037/lg/1/HO00000037",
    "https://fr.web.img4.acsta.net/medias/nmedia/18/35/31/38/18383463.jpg",
  ];

  return (
    <div className="w-full pt-4">
      <div className="w-full">
        <div className="w-full flex flex-col justify-center items-center">
          <h1 className="text-center font-bold md:text-[1.5rem]">
            Latest Movies
          </h1>
          <div className="w-[60px] h-[5px] bg-[#FFCC00] rounded-lg md:w-[120px] md:h-[5px]"></div>
        </div>
        <div className="w-full overflow-hidden flex flex-row mt-5 justify-center">
          {moviesList.map((movie, index) => (
            <MovieCard
              key={index}
              duration={2}
              movieImage={movie}
              enter={true}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default LatestMovies;
