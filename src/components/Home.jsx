import React from "react";
import web2 from "../assets/huncho.webp";
import Hero from "./Hero";

const Home = () => {
  const tracks = [
    {
      id: 1,
      title: "How U Feel",
      src: web2,
      artist: "HUNCHO JACK, JACK HUNCHO",
      album: "HUNCHO JACK",
      year: 2017,
    },
    {
      id: 2,
      title: "Huncho Jack",
      src: web2,
      artist: "HUNCHO JACK, JACK HUNCHO",
      album: "HUNCHO JACK",
      year: 2017,
    },
    {
      id: 3,
      title: "Dubai Shit",
      src: web2,
      artist: "HUNCHO JACK, JACK HUNCHO",
      album: "HUNCHO JACK",
      year: 2017,
    },
    {
      id: 4,
      title: "Black & Chinese",
      src: web2,
      artist: "HUNCHO JACK, JACK HUNCHO",
      album: "HUNCHO JACK",
      year: 2017,
    },
    {
      id: 5,
      title: "Saint Laurent Mask",
      src: web2,
      artist: "HUNCHO JACK, JACK HUNCHO",
      album: "HUNCHO JACK",
      year: 2017,
    },
    {
      id: 6,
      title: "Modern Slavery",
      src: web2,
      artist: "HUNCHO JACK, JACK HUNCHO",
      album: "HUNCHO JACK",
      year: 2017,
    },
    {
      id: 7,
      title: "Motorcycle Patches",
      src: web2,
      artist: "HUNCHO JACK, JACK HUNCHO",
      album: "HUNCHO JACK",
      year: 2017,
    },
    {
      id: 8,
      title: "Where U From",
      src: web2,
      artist: "HUNCHO JACK, JACK HUNCHO",
      album: "HUNCHO JACK",
      year: 2017,
    },
    {
      id: 9,
      title: "Moon Rock",
      src: web2,
      artist: "HUNCHO JACK, JACK HUNCHO",
      album: "HUNCHO JACK",
      year: 2017,
    },
    {
      id: 10,
      title: "Saint",
      src: web2,
      artist: "HUNCHO JACK, JACK HUNCHO",
      album: "HUNCHO JACK",
      year: 2017,
    },
  ];
  return (
    <div className="pb-4">
      <Hero />
      <div className="px-12 mb-14">
        <div className="py-5 grid place-items-center">
          <div className="font-semibold text-2xl py-2">CATEGORY</div>
          <div className="flex gap-4">
            <button className="px-4 py-2 rounded-lg bg-[#FD8A8A] cursor-pointer hover:scale-105">
              All
            </button>
            <button className="px-4 py-2 rounded-lg bg-[#FD8A8A] cursor-pointer hover:scale-105">
              R&B
            </button>
            <button className="px-4 py-2 rounded-lg bg-[#FD8A8A] cursor-pointer hover:scale-105">
              Hip Hop
            </button>
            <button className="px-4 py-2 rounded-lg bg-[#FD8A8A] cursor-pointer hover:scale-105">
              Classics
            </button>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-3">
          {tracks.map(({ id, title, src, artist, album, year }) => {
            return (
              <div key={id} className="px-2 py-2 gap-6 shadow-xl rounded-xl ">
                <h2 className="grid place-items-center font-bold">{title}</h2>
                <img
                  className="grid place-items-center rounded-md"
                  src={src}
                  alt="song"
                />
                <p className="grid place-items-center font-semibold">
                  {artist}
                </p>
                <p className="grid place-items-center font-semibold">
                  Album: {album} {year}
                </p>
                <div className="flex justify-center gap-2">
                  <button className="px-4 py-2 rounded-lg bg-[#FD8A8A] cursor-pointer hover:scale-105">
                    Play Now
                  </button>
                  <button className="px-4 py-2 rounded-lg bg-[#9EA1D4] cursor-pointer hover:scale-105">
                    Add to Playlist
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Home;
