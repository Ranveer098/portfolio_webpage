import React from "react";
import Link from "next/link";
import { CircularText } from "./Icons";

const HireMe = () => {
  return (
    <div className="fixed left-4 bottom-4 flex items-center justify-center overflow-hidden">
      <div className=" w-48 h-auto flex items-center justify-center relative">
        <CircularText className={"fill-dark animate-spin"} />
        <Link
          href="mailto:nageshwar.y195@gmail.com"
          className="flex items-center
    justify-center absolute left-1/2 top-4 -translate-x-1/2 translate-y-1/2 bg-dark text-light shadow-md border border-solid border-dark w-20 h-20 rounded-full
    
    "
        >
          Hire Me
        </Link> 
      </div>
    </div>
  );
};

export default HireMe;
