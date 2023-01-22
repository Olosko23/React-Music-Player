import React from "react";
import { CgMusic } from "react-icons/cg";
import { Link, Outlet } from "react-router-dom";

//bg-[#9EA1D4] background color
const Navbar = () => {
  const links = [
    {
      id: 1,
      title: "Home",
      link: "/",
    },
    {
      id: 2,
      title: "Top Trending",
      link: "/trending",
    },
    {
      id: 3,
      title: "Top Grossing",
      link: "/grossing",
    },
    {
      id: 4,
      title: "New Release",
      link: "/release",
    },
  ];
  return (
    <>
      <div className="w-full  bg-[#A8D1D1] flex justify-between px-5 py-4">
        <div className="pt-2 cursor-pointer hover:scale-105">
          <Link to="/">
            <CgMusic size={30} />
          </Link>
        </div>
        <div className="flex gap-6">
          {links.map(({ id, title, link }) => {
            return (
              <Link
                to={link}
                key={id}
                className="pt-2 hover:scale-105 cursor-pointer capitalize font-semibold hover:border-b-2 border-[#FD8A8A]"
              >
                {title}
              </Link>
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
      <Outlet />
    </>
  );
};

export default Navbar;
