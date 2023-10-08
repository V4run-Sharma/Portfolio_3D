import React from "react";
import { linkedin, github } from "../assets";

const SocMedLinks = () => {
  return (
    <div className="fixed flex items-center rounded-[7px] p-[2px] green-pink-gradient right-[-2.7rem] hover:right-[0.04rem] sm:active:right-0 transition-all ease-in-out top-20 z-20">
      <div className="w-2 ml-[-0.1rem] text-2xl">|</div>
      <div className="rounded-md w-fit m-[-0.5px] h-fit flex flex-col items-center space-y-[0.2rem] p-1 bg-tertiary ">
        <a
          href="https://linkedin.com/in/varun-sharma-4261bb1a0"
          target="_blank"
        >
          <div
            className="w-8 h-8 bg-cover"
            style={{ backgroundImage: `url(${linkedin})` }}
          ></div>
        </a>
        <a href="https://github.com/V4run-Sharma/" target="_blank">
          <div
            className="w-9 h-9 bg-cover"
            style={{ backgroundImage: `url(${github})` }}
          ></div>
        </a>
      </div>
    </div>
  );
};

export default SocMedLinks;
