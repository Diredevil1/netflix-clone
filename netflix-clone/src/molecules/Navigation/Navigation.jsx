import React from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { IoMdNotificationsOutline } from "react-icons/Io";
import { BsArrowUpSquareFill } from "react-icons/bs";

const Navigation = () => {
  return (
    <header className="flex justify-between py-4 px-11 bg-black">
      <nav className="flex items-center gap-5">
        <div className="before:content-['NETFLIX'] mr-4 text-3xl text-rose-600 font-medium "></div>
        <ul className="flex gap-4 cursor-pointer text-sm font-medium">
          <li
            tabIndex="0"
            className="text-slate-300 hover:text-zinc-400 hover:ease-in-out duration-300 focus:text-slate-50"
          >
            Home
          </li>
          <li
            tabIndex="0"
            className="text-slate-300 hover:text-zinc-400 hover:ease-in-out duration-300 focus:text-slate-50 focus:font-semibold"
          >
            Tv Shows
          </li>
          <li
            tabIndex="0"
            className="text-slate-300 hover:text-zinc-400 hover:ease-in-out duration-300 focus:text-slate-50 focus:font-semibold"
          >
            Movies
          </li>
          <li
            tabIndex="0"
            className="text-slate-300 hover:text-zinc-400 hover:ease-in-out duration-300 focus:text-slate-50 focus:font-semibold"
          >
            New & Popular
          </li>
          <li
            tabIndex="0"
            className="text-slate-300 hover:text-zinc-400 hover:ease-in-out duration-300 focus:text-slate-50 focus:font-semibold"
          >
            My List
          </li>
          <li
            tabIndex="0"
            className="text-slate-300 hover:text-zinc-400 hover:ease-in-out duration-300 focus:text-slate-50 focus:font-semibold"
          >
            Browse by language
          </li>
        </ul>
      </nav>
      <div className="flex gap-4 text-2xl items-center">
        <i>
          <AiOutlineSearch className="cursor-pointer text-slate-50" />
        </i>
        <i>
          <IoMdNotificationsOutline className="cursor-pointer text-slate-50" />
        </i>
        <i>
          <BsArrowUpSquareFill className="cursor-pointer text-slate-50" />
        </i>
      </div>
    </header>
  );
};

export default Navigation;
