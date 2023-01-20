import React from "react";
import { CgMusic } from "react-icons/cg";
//bg-[#9EA1D4] background color
const Navbar = () => {
  const links = [
    {
      id: 1,
      title: "Home",
    },
    {
      id: 2,
      title: "Top Trending",
    },
    {
      id: 3,
      title: "Top Grossing",
    },
    {
      id: 4,
      title: "New Release",
    },
  ];
  return (
    <div className="w-full  bg-[#A8D1D1] flex justify-between px-5 py-4">
      <div className="pt-2 cursor-pointer hover:scale-105">
        <CgMusic size={30} />
      </div>
      <div className="flex gap-6">
        {links.map(({ id, title }) => {
          return (
            <a
              href="/"
              key={id}
              className="pt-2 hover:scale-105 cursor-pointer capitalize font-semibold hover:border-b-2 border-[#FD8A8A]"
            >
              {title}
            </a>
          );
        })}
      </div>
      <div className="flex gap-4 font-bold">
        <button className="px-4 py-2 rounded-lg bg-[#FD8A8A] cursor-pointer hover:scale-105">
          Login
        </button>
        <button className="px-4 py-2 rounded-lg bg-[#FD8A8A] cursor-pointer hover:scale-105">
          Sign up
        </button>
      </div>
    </div>
  );
};

export default Navbar;
