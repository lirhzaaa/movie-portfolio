import { useEffect, useRef, useState } from "react"; // Tambahkan useState di sini
import GlobalApi from "../../../Services/GlobalApi";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi";

const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/original"; // Definisikan sebagai konstanta

const screenWidth = window.innerWidth;

const Slider = () => {
  const [movieList, setMovieList] = useState([]);
  const elementRef = useRef();

  useEffect(() => {
    getTrendingMovies();
  }, []);

  const getTrendingMovies = () => {
    GlobalApi.getTrendingVideos.then((res) => {
      console.log(res);
      setMovieList(res.data.results);
    });
  };

  const sliderRight = (elemet) => {
    elemet.scrollLeft += screenWidth-110;
  };
  const sliderLeft = (elemet) => {
    elemet.scrollLeft -= screenWidth-110;
  };

  return (
    <div className="pt-30 text-white">
      <HiChevronLeft
        className="hidden md:block text-[30px] absolute mx-8 mt-[150px] cursor-pointer"
        onClick={() => sliderLeft(elementRef.current)}
      />
      <HiChevronRight
        className="text-[30px] absolute mx-8 mt-[150px] cursor-pointer right-0"
        onClick={() => sliderRight(elementRef.current)}
      />
      <div
        className="flex overflow-x-auto w-full px-16 py-4 scrollbar-hide scroll-smooth"
        ref={elementRef}
      >
        {movieList.map((item, index) =>
          item.backdrop_path ? (
            <img
              src={IMAGE_BASE_URL + item.backdrop_path}
              className="min-w-full md:h-[310px] object-cover object-left-top mr-5 rounded-md hover:border-[4px] border-gray-400 transition-all duration-100 ease-in-out"
              alt=""
              key={index}
            />
          ) : null
        )}
      </div>
    </div>
  );
};

export default Slider;
