import { useEffect, useRef, useState } from "react";
import GlobalApi from "../../../Services/GlobalApi";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi";
import Button from "../Button/Button";

const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/original";

const Slider = () => {
  const [movieList, setMovieList] = useState([]);
  const elementRef = useRef();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isScrollingVertical, setIsScrollingVertical] = useState(false);

  const [imgWidth, setImgWidth] = useState(0);

  useEffect(() => {
    getTrendingMovies();
  }, []);

  useEffect(() => {
    const handleWindowScroll = () => {
      setIsScrollingVertical(true);
      setTimeout(() => setIsScrollingVertical(false), 1000);
    };
    window.addEventListener("scroll", handleWindowScroll);
    return () => window.removeEventListener("scroll", handleWindowScroll);
  }, []);

  useEffect(() => {
    if (elementRef.current && elementRef.current.children.length > 0) {
      setImgWidth(elementRef.current.children[0].clientWidth);
    }
  }, [movieList]);

  useEffect(() => {
    const handleScroll = () => {
      if (elementRef.current) {
        const scrollLeft = elementRef.current.scrollLeft;
        const newIndex = Math.round(scrollLeft / imgWidth);
        setCurrentIndex(newIndex % movieList.length);
      }
    };
    const el = elementRef.current;
    if (el) {
      el.addEventListener("scroll", handleScroll);
      return () => el.removeEventListener("scroll", handleScroll);
    }
  }, [imgWidth, movieList.length]);

  useEffect(() => {
    const interval = setInterval(() => {
      if (
        !isScrollingVertical &&
        elementRef.current &&
        elementRef.current.children.length > 0
      ) {
        const imgWidth = elementRef.current.children[0].clientWidth;
        const nextIndex = (currentIndex + 1) % movieList.length;
        const left = nextIndex * imgWidth;
        elementRef.current.scrollTo({ left, behavior: "smooth" });
        setCurrentIndex(nextIndex);
      }
    }, 5000);
    return () => clearInterval(interval);
  }, [movieList.length, isScrollingVertical, currentIndex]);

  const getTrendingMovies = () => {
    GlobalApi.getTrendingVideos.then((res) => {
      setMovieList(res.data.results);
    });
  };

  const sliderRight = () => {
    if (elementRef.current && elementRef.current.children.length > 0) {
      const imgWidth = elementRef.current.children[0].clientWidth;
      const nextIndex = (currentIndex + 1) % movieList.length;
      const left = nextIndex * imgWidth;
      elementRef.current.scrollTo({ left, behavior: "smooth" });
      setCurrentIndex(nextIndex);
    }
  };
  const sliderLeft = () => {
    if (elementRef.current && elementRef.current.children.length > 0) {
      const imgWidth = elementRef.current.children[0].clientWidth;
      const prevIndex =
        currentIndex === 0 ? movieList.length - 1 : currentIndex - 1;
      const left = prevIndex * imgWidth;
      elementRef.current.scrollTo({ left, behavior: "smooth" });
      setCurrentIndex(prevIndex);
    }
  };

  return (
    <div className="text-white relative">
      <HiChevronLeft
        className="hidden md:flex items-center justify-center text-[50px] absolute left-2 top-1/2 -translate-y-1/2 cursor-pointer z-20"
        onClick={() => sliderLeft(elementRef.current)}
      />
      <HiChevronRight
        className="flex items-center justify-center text-[50px] absolute right-2 top-1/2 -translate-y-1/2 cursor-pointer z-20"
        onClick={() => sliderRight(elementRef.current)}
      />
      <div
        className="flex overflow-x-auto overflow-y-hidden w-full scrollbar-hide scroll-smooth snap-x snap-mandatory"
        ref={elementRef}
      >
        {movieList.map((item, index) =>
          item.backdrop_path ? (
            <div
              key={index}
              className="relative min-w-full md:h-[650px] snap-start"
            >
              <img
                src={IMAGE_BASE_URL + item.backdrop_path}
                className="w-full h-full object-cover object-top hover:scale-105 transition-all duration-300 cursor-pointer"
                alt=""
              />
              <div className="absolute inset-0 flex items-center justify-start text-white pl-25">
                <div className="max-w-2xl">
                  <h2 className="text-3xl font-bold mb-2">
                    {item.title || item.name}
                  </h2>
                  <p className="text-xl">{item.overview}</p>
                  <Button className={"mr-4"}>Watch Now</Button>
                  <Button bg="bg-white/40" textColor="text-white">
                    Trailer
                  </Button>
                </div>
              </div>
            </div>
          ) : null
        )}
      </div>
    </div>
  );
};
export default Slider;
