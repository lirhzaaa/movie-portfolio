import React from "react";
import disney from "../../../assets/Images/disney.png";
import pixar from "../../../assets/Images/pixar.png";
import nationalG from "../../../assets/Images/nationalG.png";
import marvel from "../../../assets/Images/marvel.png";
import starwar from "../../../assets/Images/starwar.png";

import disneyV from "../../../assets/Videos/disney.mp4";
import pixarV from "../../../assets/Videos/pixar.mp4";
import marvelV from "../../../assets/Videos/marvel.mp4";
import nationalgV from "../../../assets/Videos/national-geographic.mp4";
import startWarV from "../../../assets/Videos/star-wars.mp4";

const Card = () => {
  const listMovie = [
    {
      id: 1,
      img: disney,
      video: disneyV,
    },
    {
      id: 2,
      img: pixar,
      video: pixarV,
    },
    {
      id: 3,
      img: marvel,
      video: marvelV,
    },
    {
      id: 4,
      img: nationalG,
      video: nationalgV,
    },
    {
      id: 5,
      img: starwar,
      video: startWarV,
    },
  ];
  return (
    <div className="flex gap-2 md:gap-5 p-2 px-5 md:px-16">
      {listMovie.map((item) => (
        <div className="border-[2px] border-gray-500 rounded-lg hover:scale-110 transition-all duration-300 ease-in-out cursor-pointer relative shadow-xl shadow-gray-800 ">
          <video
            src={item.video}
            autoPlay
            loop
            playsInline
            muted
            className="absolute z-0 top-0 rounded-md opacity-0 hover:opacity-50"
          />
          <img src={item.img} alt="" className="w-full z-[1]" />
        </div>
      ))}
    </div>
  );
};

export default Card;
