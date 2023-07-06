import { useEffect, useRef, useState } from "react";
import GlobalApi from "../Services/GlobalApi";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi";

const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/original";

const Slider = () => {
  const [movieList, setMovieList] = useState([]);
  const elementRef = useRef();
  const screenWidth = window.innerWidth;

  useEffect(() => {
      getTrendingMovies();
  }, []);

  const getTrendingMovies = () => {
     GlobalApi.getTrendingVideos.then((res) => {
      setMovieList(res.data.results);
    });
  };
  const sliderRight = (element) => {
    element.scrollLeft += screenWidth - 110;
  };
  const sliderLeft = (element) => {
    element.scrollLeft -= screenWidth - 110;
  };
  return (
    <>
     <HiChevronLeft
        className="hidden md:block text-[30px] absolute text-white mx-8 mt-[150px] cursor-pointer"
        onClick={() => { sliderLeft(elementRef.current) }} />
      
      <HiChevronRight
        className="hidden md:block text-[30px] absolute text-white mx-8 mt-[150px] cursor-pointer right-0"
        onClick={() => { sliderRight(elementRef.current) }} />

      <div className="flex overflow-x-auto w-full px-16 py-4 scrollbar-none scroll-smooth " ref={elementRef} >
        {movieList.map((item) => (
          <img
              className="min-w-full  md:h-[310px] object-cover
              object-left-top mr-5 rounded-md hover:border-[4px]
              border-gray-400 transition-all duration-100 ease-in"
              src={IMAGE_BASE_URL + item.backdrop_path}
              key={item.id}
          />
        ))}
      </div>
    </>
  );
};

export default Slider;
