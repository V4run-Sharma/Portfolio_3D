import React from "react";

const SocMedLinks = () => {
  return (
    <div className="fixed flex items-center rounded-[7px] p-[2px] green-pink-gradient right-[-3.30rem] hover:right-0 sm:active:right-0 transition-all ease-in-out top-20 z-20">
      <div className="w-2 ml-[-0.1rem] text-2xl">|</div>
      <div className="rounded-md w-fit m-[-0.5px] h-fit flex flex-col space-y-2 p-2 bg-tertiary ">
        <a
          href="https://linkedin.com/in/varun-sharma-4261bb1a0"
          target="_blank"
          className="w-8 h-8 bg-[url('./linkedin.png')] bg-cover"
        ></a>
        <a
          href="https://github.com/V4run-Sharma/"
          target="_blank"
          className="w-9 h-9 bg-[url('./github.png')] bg-cover"
        ></a>
      </div>
    </div>
  );
};

export default SocMedLinks;
