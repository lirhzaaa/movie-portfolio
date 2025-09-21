import React, { useState, useEffect, useRef } from "react";
import NavbarItems from "./NavbarItems";
import { FaSearch } from "react-icons/fa";
import GlobalApi from "../../../Services/GlobalApi";

const Navbar = () => {
  const [toogle, setToogle] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const debounceRef = useRef(null);

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

  useEffect(() => {
    if (debounceRef.current) {
      clearTimeout(debounceRef.current);
    }
    if (searchQuery.trim()) {
      debounceRef.current = setTimeout(() => {
        GlobalApi.getSearchResults(searchQuery).then((res) => {
          setSearchResults(res.data.results.slice(0, 5));
        });
      }, 500);
    } else {
      setSearchResults([]);
    }
    return () => {
      if (debounceRef.current) {
        clearTimeout(debounceRef.current);
      }
    };
  }, [searchQuery]);

  return (
    <div
      className={`text-white flex items-center justify-between px-4 md:px-8 py-8 ${
        scrolled
          ? "bg-gray-950 transition-all duration-500"
          : "bg-gray-800/5 transition-all duration-500"
      } fixed w-full z-[999]`}
    >
      <div className="flex items-center gap-4 md:gap-10 h-full">
        <span className="font-serif text-2xl">Lirhza Movie</span>
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
      <div className="flex items-center gap-5 h-full relative">
        {showSearch && (
          <>
            <input
              type="text"
              placeholder="Search..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="bg-gray-800 text-white rounded px-2 py-1 border border-gray-600 focus:outline-none focus:border-gray-500"
            />
            {searchResults.length > 0 ? (
              <div className="absolute top-full mt-2 bg-gray-800 border border-gray-600 rounded shadow-lg p-2 min-w-[300px] max-h-[400px] overflow-y-auto z-50 scrollbar-hide">
                {searchResults.map((movie, index) => (
                  <div key={index} className="flex items-center gap-3 p-2 hover:bg-gray-700 cursor-pointer">
                    <img
                      src={`https://image.tmdb.org/t/p/w92${movie.poster_path}`}
                      alt={movie.title}
                      className="w-12 h-18 object-cover rounded"
                    />
                    <span className="text-white">{movie.title}</span>
                  </div>
                ))}
              </div>
            ) : searchQuery.trim() && (
              <div className="absolute top-full mt-2 bg-gray-800 border border-gray-600 rounded shadow-lg p-2 min-w-[300px] z-50">
                <div className="text-white text-center py-4">Tidak Tersedia</div>
              </div>
            )}
          </>
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
