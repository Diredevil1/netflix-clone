import React, { useState } from "react";
import { SlArrowRight } from "react-icons/sl";
import { SlArrowLeft } from "react-icons/sl";
import { FiChevronRight } from "react-icons/fi";

const MovieSlider = () => {
  const [currMovement, setCurrMovement] = useState(1);
  const [currentPosition, setCurrentPosition] = useState(0);

  const handleLeftClick = () => {
    setCurrMovement((curr) => curr - 1);
    setCurrentPosition(currMovement * 100);
    console.log(currentPosition, currMovement);
  };
  const handleRightClick = () => {
    setCurrMovement((curr) => curr + 1);
    setCurrentPosition(currMovement * 100);
    console.log(currentPosition, currMovement);
  };

  return (
    <div className="group/movies select-none">
      <section className="group/mylist flex items-end align-bottom">
        <div className="inline-block align-bottom text-zinc-400 ml-20 font-semibold text-xl cursor-pointer hover:text-slate-100 hover duration-100">
          My List
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
      <div className="flex justify-center">
        <span
          onClick={handleLeftClick}
          tabIndex="0"
          className="w-20 bg-[hsla(0,0%,8%,.7)] rounded-r opacity-70 z-10 flex justify-center items-center my-1.5"
        >
          <SlArrowLeft size="2rem" className="text-slate-100" />
        </span>
        <div
          className={`text-center my-1 flex w-[calc(100%-10rem)] transform -translate-x-[${currentPosition}%] duration-700 ease-in-out`}
        >
          <div className="shrink-0 grow-0 basis-1/5 max-w-[19.73%] w-1/5 aspect-video rounded bg-zinc-300 m-0.5 origin-left duration-200 delay-300 hover:scale-125">
            1
          </div>
          <div className="shrink-0 grow-0 basis-1/5 max-w-[19.73%] w-1/5 aspect-video rounded bg-zinc-300 m-0.5">
            2
          </div>
          <div className="shrink-0 grow-0 basis-1/5 max-w-[19.73%] w-1/5 aspect-video rounded bg-zinc-300 m-0.5">
            3
          </div>
          <div className="shrink-0 grow-0 basis-1/5 max-w-[19.73%] w-1/5 aspect-video rounded bg-zinc-300 m-0.5">
            4
          </div>
          <div className="shrink-0 grow-0 basis-1/5 max-w-[19.73%] w-1/5 aspect-video rounded bg-zinc-300 m-0.5 origin-right duration-200 delay-300 hover:scale-125">
            5
          </div>
          <div className="shrink-0 grow-0 basis-1/5 max-w-[19.73%] w-1/5 aspect-video rounded bg-zinc-300 m-0.5">
            6
          </div>
          <div className="shrink-0 grow-0 basis-1/5 max-w-[19.73%] w-1/5 aspect-video rounded bg-zinc-300 m-0.5">
            7
          </div>
          <div className="shrink-0 grow-0 basis-1/5 max-w-[19.73%] w-1/5 aspect-video rounded bg-zinc-300 m-0.5">
            8
          </div>
          <div className="shrink-0 grow-0 basis-1/5 max-w-[19.73%] w-1/5 aspect-video rounded bg-zinc-300 m-0.5">
            9
          </div>
          <div className="shrink-0 grow-0 basis-1/5 max-w-[19.73%] w-1/5 aspect-video rounded bg-zinc-300 m-0.5">
            9
          </div>
          <div className="shrink-0 grow-0 basis-1/5 max-w-[19.73%] w-1/5 aspect-video rounded bg-zinc-300 m-0.5">
            9
          </div>
          <div className="shrink-0 grow-0 basis-1/5 max-w-[19.73%] w-1/5 aspect-video rounded bg-zinc-300 m-0.5">
            9
          </div>
          <div className="shrink-0 grow-0 basis-1/5 max-w-[19.73%] w-1/5 aspect-video rounded bg-zinc-300 m-0.5">
            9
          </div>
          <div className="shrink-0 grow-0 basis-1/5 max-w-[19.73%] w-1/5 aspect-video rounded bg-zinc-300 m-0.5">
            9
          </div>
          <div className="shrink-0 grow-0 basis-1/5 max-w-[19.73%] w-1/5 aspect-video rounded bg-zinc-300 m-0.5">
            9
          </div>
          <div className="shrink-0 grow-0 basis-1/5 max-w-[19.73%] w-1/5 aspect-video rounded bg-zinc-300 m-0.5">
            9
          </div>
          <div className="shrink-0 grow-0 basis-1/5 max-w-[19.73%] w-1/5 aspect-video rounded bg-zinc-300 m-0.5">
            9
          </div>
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
  );
};

export default MovieSlider;
