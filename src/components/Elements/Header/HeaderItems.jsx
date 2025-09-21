import React from "react";

const HeaderItems = (props) => {
  const { name, Icon } = props;
  return (
    <div className="text-white flex items-center cursor-pointer gap-3 text-[18px] font-semibold hover:underline underline-offset-8 mb-2">
        <Icon className="h-4" />
        <h2 className="">{name}</h2>
    </div>
  );
};

export default HeaderItems;
