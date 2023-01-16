import React, { useState } from "react";

import { SlArrowRight } from "react-icons/sl";
import { SlArrowLeft } from "react-icons/sl";

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
        <div className="shrink-0 grow-0 basis-1/5 max-w-[19.73%] w-1/5 aspect-video rounded bg-zinc-300 m-0.5">
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
        <div className="shrink-0 grow-0 basis-1/5 max-w-[19.73%] w-1/5 aspect-video rounded bg-zinc-300 m-0.5">
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
  );
};

export default MovieSlider;
