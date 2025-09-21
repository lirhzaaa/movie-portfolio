import React from "react";

const NavbarItems = (props) => {
  const { name } = props;
  return (
    <div className="text-white flex items-center cursor-pointer gap-3 text-[18px] font-normal relative after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-white after:transform after:scale-x-0 after:transition-transform after:duration-500 after:origin-left hover:after:scale-x-100">
      <h2>{name}</h2>
    </div>
  );
};

export default NavbarItems;
