import React, { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import ModelBody from "./ModelBody/ModelBody";

function Models() {
  const [isActive, setIsActive] = useState(false);
  return (
    <div className="border-2 mt-8 rounded-lg">
      <div
        className="flex  px-12 py-3 items-center justify-between cursor-pointer hover:bg-slate-50"
        onClick={() => setIsActive(!isActive)}
      >
        <div className="flex items-center space-x-4">Models</div>
        <div className={`${isActive ? 'rotate-180' : 'rotate-0'} ease-linear duration-300 text-2xl`}>
          <IoIosArrowDown />
        </div>
      </div>
      <ModelBody isActive={isActive} />
    </div>
  );
}

export default Models;
