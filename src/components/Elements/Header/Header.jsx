import React, { useState } from "react";
import Logo from "../../../assets/logo.png";
import { HiDotsVertical, HiHome } from "react-icons/hi";
import { FaPlus, FaSearch } from "react-icons/fa";
import { IoStarSharp } from "react-icons/io5";
import { RiMovie2Fill } from "react-icons/ri";
import { TbDeviceTvOld } from "react-icons/tb";
import HeaderItems from "./HeaderItems";
import { BiUser } from "react-icons/bi";

const Header = () => {
  const [toogle, setToogle] = useState(false);

  const menu = [
    {
      name: "HOME",
      icon: <HiHome />,
    },
    {
      name: "SEARCH",
      icon: <FaSearch />,
    },
    {
      name: "WATCHLIST",
      icon: <FaPlus />,
    },
    {
      name: "ORIGINALS",
      icon: <IoStarSharp />,
    },
    {
      name: "MOVIES",
      icon: <RiMovie2Fill />,
    },
    {
      name: "SERIES",
      icon: <TbDeviceTvOld />,
    },
  ];

  return (
    <div className="text-white flex items-center justify-between px-6 py-4 bg-gray-950 fixed w-full z-999">
      <div className="flex items-center gap-8">
        <img
          src={Logo}
          alt="Logo Disney"
          className="w-[80px] md:w-[100px] object-cover"
        />
        <div className="hidden md:flex gap-8">
          {menu.map((item, index) => (
            <HeaderItems key={index} name={item.name} Icon={item.icon.type} />
          ))}
        </div>
        <div className="flex md:hidden gap-5">
          {menu.map(
            (item, index) =>
              index < 3 && (
                <HeaderItems key={index} name={""} Icon={item.icon.type} />
              )
          )}
          <div className="md:hidden" onClick={() => setToogle(!toogle)}>
            <HeaderItems name={" "} Icon={HiDotsVertical} />
            {toogle ? (
              <div className="absolute mt-3 bg-[#121212] border-[1px] border-gray-700 p-3 px-5 py-4">
                {menu.map(
                  (item, index) =>
                    index > 2 && (
                      <HeaderItems
                        key={index}
                        name={item.name}
                        Icon={item.icon.type}
                      />
                    )
                )}
              </div>
            ) : null}
          </div>
        </div>
      </div>
      <img
        src="https://cdn-icons-png.flaticon.com/512/9944/9944372.png"
        alt="User Profile"
        className="w-[40px] rounded-full"
      />
    </div>
  );
};

export default Header;
