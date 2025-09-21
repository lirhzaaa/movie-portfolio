import React, { useState, useEffect } from "react";
import Logo from "../../../assets/logo.png";
import NavbarItems from "./NavbarItems";
import { FaSearch } from "react-icons/fa";

const Navbar = () => {
  const [toogle, setToogle] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [showSearch, setShowSearch] = useState(false);

  const menu = [
    { name: "Home" },
    { name: "Movies" },
    { name: "Series" },
    { name: "My List" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 0);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`text-white flex items-center justify-between px-4 md:px-8 py-8 ${
        scrolled
          ? "bg-gray-950 transition-all duration-500"
          : "bg-gray-800/5 transition-all duration-500"
      } fixed w-full z-[999]`}
    >
      <div className="flex items-center gap-4 md:gap-10 h-full">
        <img
          src={Logo}
          alt="Logo Disney"
          className="w-[60px] md:w-[100px] object-cover transition-all duration-300"
        />
        <div className="hidden md:flex gap-8">
          {menu.map((item, index) => (
            <NavbarItems key={index} name={item.name} />
          ))}
        </div>
        <div className="flex md:hidden gap-4 items-center h-full">
          {menu.map(
            (item, index) => index < 3 && <NavbarItems key={index} name={""} />
          )}
          <div className="relative md:hidden">
            <button
              className="p-2 rounded hover:bg-gray-800 transition"
              onClick={() => setToogle(!toogle)}
            ></button>
            {toogle && (
              <div className="absolute right-0 mt-2 bg-[#181818] border border-gray-700 rounded shadow-lg p-3 min-w-[140px]">
                {menu.map(
                  (item, index) =>
                    index > 2 && <NavbarItems key={index} name={item.name} />
                )}
              </div>
            )}
          </div>
        </div>
      </div>
      <div className="flex items-center gap-5 h-full">
        {showSearch && (
          <input
            type="text"
            placeholder="Search..."
            className="bg-gray-800 text-white rounded px-2 py-1 border border-gray-600 focus:outline-none focus:border-gray-500"
          />
        )}
        <FaSearch
          className="cursor-pointer hover:text-gray-500 transition"
          onClick={() => setShowSearch(!showSearch)}
        />
        <img
          src="https://cdn-icons-png.flaticon.com/512/9944/9944372.png"
          alt="User Profile"
          className="w-[36px] md:w-[40px] rounded-full border-2 border-gray-700 hover:border-gray-500 transition-all duration-200 cursor-pointer"
        />
      </div>
    </div>
  );
};

export default Navbar;
