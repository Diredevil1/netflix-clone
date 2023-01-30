import React, { useState, useEffect, useRef } from "react";
import { SlArrowRight } from "react-icons/sl";
import { SlArrowLeft } from "react-icons/sl";
import { FiChevronRight } from "react-icons/fi";

const MovieSlider = () => {
  const key = "5a0fc1801a307f60f8fc7090d29cda7b";
  const [moviePopular, setMoviePopular] = useState([]);
  const [movieTrending, setMovieTrending] = useState([]);
  const [movieUpcoming, setMovieUpcoming] = useState([]);

  useEffect(() => {
    let ignore = false;

    const dataFetch = async () => {
      const dataPopular = await (
        await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${key}`)
      ).json();
      if (!ignore) {
        setMoviePopular(dataPopular);
      }

      const dataTrending = await (
        await fetch(
          `https://api.themoviedb.org/3/trending/all/week?api_key=${key}`
        )
      ).json();
      if (!ignore) {
        setMovieTrending(dataTrending);
      }

      const dataUpcoming = await (
        await fetch(
          `https://api.themoviedb.org/3/movie/upcoming?api_key=${key}`
        )
      ).json();
      if (!ignore) {
        setMovieUpcoming(dataUpcoming);
      }
    };
    dataFetch();

    return () => {
      ignore = true;
    };
  }, []);

  const maxScrollWidth = useRef(0);
  const [currMovement, setCurrMovement] = useState(0);
  const carousel = useRef(null);

  const handleLeftClick = () => {
    if (currMovement > 0) {
      setCurrMovement((prevState) => prevState - 1);
    }
    console.log(carousel.current.scrollLeft);
  };
  const handleRightClick = () => {
    if (
      carousel.current !== null &&
      carousel.current.offsetWidth * currMovement <= maxScrollWidth.current
    ) {
      setCurrMovement((prevState) => prevState + 1);
    }
    console.log(carousel.current.scrollLeft);
  };

  useEffect(() => {
    if (carousel !== null && carousel.current !== null) {
      carousel.current.scrollLeft = carousel.current.offsetWidth * currMovement;
    }
  }, [currMovement]);

  useEffect(() => {
    maxScrollWidth.current = carousel.current
      ? carousel.current.scrollWidth - carousel.current.offsetWidth
      : 0;
  });

  return (
    <div className="flex flex-col gap-11 mt-10">
      <div className="group/movies select-none">
        <section className="group/mylist flex items-end align-bottom">
          <div className="inline-block align-bottom text-zinc-400 ml-20 font-semibold text-xl cursor-pointer hover:text-slate-100 hover duration-100">
            Popular
          </div>
          <span className="whitespace-nowrap max-w-0 cursor-pointer opacity-0 group-hover/mylist:block group-hover/mylist:ml-2 group-hover/mylist:opacity-100 group-hover/mylist:max-w-fit duration-1000 text-[#54b9c5]">
            Explore All
          </span>
          <FiChevronRight
            strokeWidth="3"
            size="1.4rem"
            className="text-[#54b9c5] opacity-0 group-hover/movies:opacity-100"
          />
        </section>
        <div className="flex justify-center ">
          <span
            onClick={handleLeftClick}
            tabIndex="0"
            className="w-20 bg-[hsla(0,0%,8%,.7)] rounded-r opacity-70 z-10 flex justify-center items-center my-1.5"
          >
            <SlArrowLeft size="2rem" className="text-slate-100" />
          </span>
          <div
            ref={carousel}
            // style={{ transform: `translateX(-%)` }}
            className={`text-center overflow-hidden scroll-smooth snap-mandatory my-1 flex w-[calc(100%-10rem)] transform duration-700 ease-in-out`}
          >
            {movieTrending.results?.map((movie) => {
              return (
                <div
                  style={{
                    backgroundImage: `url(https://image.tmdb.org/t/p/w500/${movie.poster_path})`,
                  }}
                  key={movie.id}
                  className="text-zinc-50 snap-start bg-cover shrink-0 grow-0 basis-1/5 max-w-[19.73%] w-1/5 aspect-video rounded bg-zinc-300 m-0.5 origin-left duration-200 delay-500 hover:scale-125"
                >
                  {movie.title}
                </div>
              );
            })}
          </div>
          <span
            onClick={handleRightClick}
            tabIndex="0"
            className="w-20 bg-[hsla(0,0%,8%,.7)] rounded-l opacity-70 z-10 flex justify-center items-center my-1.5"
          >
            <SlArrowRight size="2rem" className="text-slate-100" />
          </span>
        </div>
      </div>
      <div className="group/movies select-none">
        <section className="group/mylist flex items-end align-bottom">
          <div className="inline-block align-bottom text-zinc-400 ml-20 font-semibold text-xl cursor-pointer hover:text-slate-100 hover duration-100">
            Trending
          </div>
          <span className="whitespace-nowrap max-w-0 cursor-pointer opacity-0 group-hover/mylist:block group-hover/mylist:ml-2 group-hover/mylist:opacity-100 group-hover/mylist:max-w-fit duration-1000 text-[#54b9c5]">
            Explore All
          </span>
          <FiChevronRight
            strokeWidth="3"
            size="1.4rem"
            className="text-[#54b9c5] opacity-0 group-hover/movies:opacity-100"
          />
        </section>
        <div className="flex justify-center ">
          <span
            onClick={handleLeftClick}
            tabIndex="0"
            className="w-20 bg-[hsla(0,0%,8%,.7)] rounded-r opacity-70 z-10 flex justify-center items-center my-1.5"
          >
            <SlArrowLeft size="2rem" className="text-slate-100" />
          </span>
          <div
            ref={carousel}
            // style={{ transform: `translateX(-%)` }}
            className={`text-center overflow-hidden scroll-smooth snap-mandatory my-1 flex w-[calc(100%-10rem)] transform duration-700 ease-in-out`}
          >
            {moviePopular.results?.map((movie) => {
              return (
                <div
                  style={{
                    backgroundImage: `url(https://image.tmdb.org/t/p/w500/${movie.poster_path})`,
                  }}
                  key={movie.id}
                  className="text-zinc-50 snap-start bg-cover shrink-0 grow-0 basis-1/5 max-w-[19.73%] w-1/5 aspect-video rounded bg-zinc-300 m-0.5 origin-left duration-200 delay-500 hover:scale-125"
                >
                  {movie.title}
                </div>
              );
            })}
          </div>
          <span
            onClick={handleRightClick}
            tabIndex="0"
            className="w-20 bg-[hsla(0,0%,8%,.7)] rounded-l opacity-70 z-10 flex justify-center items-center my-1.5"
          >
            <SlArrowRight size="2rem" className="text-slate-100" />
          </span>
        </div>
      </div>
      <div className="group/movies select-none">
        <section className="group/mylist flex items-end align-bottom">
          <div className="inline-block align-bottom text-zinc-400 ml-20 font-semibold text-xl cursor-pointer hover:text-slate-100 hover duration-100">
            Upcoming
          </div>
          <span className="whitespace-nowrap max-w-0 cursor-pointer opacity-0 group-hover/mylist:block group-hover/mylist:ml-2 group-hover/mylist:opacity-100 group-hover/mylist:max-w-fit duration-1000 text-[#54b9c5]">
            Explore All
          </span>
          <FiChevronRight
            strokeWidth="3"
            size="1.4rem"
            className="text-[#54b9c5] opacity-0 group-hover/movies:opacity-100"
          />
        </section>
        <div className="flex justify-center ">
          <span
            onClick={handleLeftClick}
            tabIndex="0"
            className="w-20 bg-[hsla(0,0%,8%,.7)] rounded-r opacity-70 z-10 flex justify-center items-center my-1.5"
          >
            <SlArrowLeft size="2rem" className="text-slate-100" />
          </span>
          <div
            ref={carousel}
            // style={{ transform: `translateX(-%)` }}
            className={`text-center overflow-hidden scroll-smooth snap-mandatory my-1 flex w-[calc(100%-10rem)] transform duration-700 ease-in-out`}
          >
            {movieUpcoming.results?.map((movie) => {
              return (
                <div
                  style={{
                    backgroundImage: `url(https://image.tmdb.org/t/p/w500/${movie.poster_path})`,
                  }}
                  key={movie.id}
                  className="text-zinc-50 snap-start bg-cover shrink-0 grow-0 basis-1/5 max-w-[19.73%] w-1/5 aspect-video rounded bg-zinc-300 m-0.5 origin-left duration-200 delay-500 hover:scale-125"
                >
                  {movie.title}
                </div>
              );
            })}
          </div>
          <span
            onClick={handleRightClick}
            tabIndex="0"
            className="w-20 bg-[hsla(0,0%,8%,.7)] rounded-l opacity-70 z-10 flex justify-center items-center my-1.5"
          >
            <SlArrowRight size="2rem" className="text-slate-100" />
          </span>
        </div>
      </div>
    </div>
  );
};

export default MovieSlider;
