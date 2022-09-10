import React, { FC } from "react";
import { Link } from "react-router-dom";
import { BsArrowRight } from 'react-icons/bs'

interface TabProps {
  index: number
}

const Tabs: FC<TabProps> = ({index}) => {
  const tabs = [
    {index: 1, name: "1", url: "/add/header" },
    {index: 2, name: "2", url: "/add/server"},
    {index: 3, name: "3", url: "/add/api" },
    {index: 4, name: "4", url: "/add/model" },
  ];
  return (
    <div className="flex gap-10">
      {tabs.map((tab) => {
        return <div className="flex items-center gap-10" key={tab.index}>
          <Link 
          className={`
            ${index >= tab.index ? 'bg-green-500 font-normal text-slate-50' : 'bg-gray-300 font-thin text-gray-600'} 
            px-4 py-2 text-slate-50 capitalize rounded-full text-3xl h-16 w-16 flex items-center justify-center`
          }
          to={tab.url}>{tab.name}</Link>
          <BsArrowRight className={`
            ${tab.index < index ? 'text-black' : 'text-gray-300'}
            text-4xl scale-x-150 scale-y-125
            ${tab.index === index ? 'animate-pulse' : 'animate-none'}
          `}/>
        </div>;
      })}
    </div>
  );
};

export default Tabs;
