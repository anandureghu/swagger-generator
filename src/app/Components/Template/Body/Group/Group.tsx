import React, { useState } from "react";
import GroupBody from "./GroupBody/GroupBody";
import { IoIosArrowDown } from "react-icons/io";

function Group() {

  const [isActive, setIsActive] = useState(false)

  return (
    <div>
      <div className="flex items-center justify-between border-b-2 px-12 py-3 cursor-pointer hover:bg-slate-100"
        onClick={() => setIsActive(!isActive)}
      >
        <div className="flex items-center space-x-4">
          {/* Group tag name */}
          <h2 className="text-2xl font-semibold">Tag</h2>
          {/* Group tag description */}
          <p className="text-sm font-light text-slate-500">Lorem ipsum dolor sit amet.</p>
        </div>
        <div className={`${isActive ? 'rotate-180' : 'rotate-0'} ease-linear duration-300 text-2xl`}>
          <IoIosArrowDown />
        </div>
      </div>
      <GroupBody isActive={isActive}/>
    </div>
  );
}

export default Group;
