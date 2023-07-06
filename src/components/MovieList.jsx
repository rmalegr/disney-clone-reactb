import { useEffect, useRef } from "react";
import GlobalApi from "../Services/GlobalApi";
import { useState } from "react";
import MovieCard from "./MovieCard";
import { IoChevronBackOutline, IoChevronForwardOutline } from 'react-icons/io5';
import HrMovieCard from "./HrMovieCard";


const MovieList = ({ genereId,  index_ }) => {
  const [movieList, setMovieList] = useState([]);
  const elementRef = useRef(null);


  useEffect(() => {
    getMovieByGenreId();
  }, []);
  
  const getMovieByGenreId = () => {
    GlobalApi.getMovieByGenreId(genereId).then((res) => {
      setMovieList(res.data.results);
    });
  }; 

  const sliderRight = (element) => {
    element.scrollLeft += 500;
  };
  const sliderLeft = (element) => {
    element.scrollLeft -= 500;
  };
  
  return (
    <div className='relative'>
         <IoChevronBackOutline onClick={()=>sliderLeft(elementRef.current)} 
         className={`text-[50px] text-white
           p-2 z-10 cursor-pointer 
            hidden md:block absolute
            ${index_%3==0?'mt-[80px]':'mt-[150px]'} `}/>
   
    <div ref={elementRef} className='flex overflow-x-auto gap-8
     scrollbar-none scroll-smooth pt-4 px-3 pb-4'>
        {movieList.map((item,index)=>(
           <>
          {index_ %3==0?<HrMovieCard movie={item}/>:<MovieCard movie={item} />}
           </> 
        ))}
    </div>
    <IoChevronForwardOutline onClick={()=>sliderRight(elementRef.current)}
           className={`text-[50px] text-white hidden md:block
           p-2 cursor-pointer z-10 top-0
            absolute right-0 
            ${index_%3==0?'mt-[80px]':'mt-[150px]'}`}/> 
    </div>
   
  );
};

export default MovieList;
