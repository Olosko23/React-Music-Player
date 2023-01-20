import React from "react";
import { CgMusic } from "react-icons/cg";

const Hero = () => {
  return (
    <div className="flex justify-between w-full h-[700px] bg-[url('/src/assets/hero1.jpg')] bg-cover">
      <div className="basis-2/3 grid place-items-center px-5 font-bold text-4xl text-[#2e3047]">
        Welcome to the epitome of music collection <br />
        Browse both past and freshly released tracks <br /> Anywhere Anytime
        Free of Charge
      </div>
      <div className="grid place-items-center mr-40 basis-1/3text-4xl">
        <CgMusic size={50} />
      </div>
    </div>
  );
};

export default Hero;
