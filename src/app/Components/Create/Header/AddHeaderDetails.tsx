import React from "react";
import { Link } from "react-router-dom";
import './AddHeaderDetails.css'
const AddHeaderDetails = () => {
  return (
    <div>
      <div className="mt-10">
        {/* Title */}
        <input
          className="w-full border-b mb-5 outline-none text-lg font-light border-black px-1 py-3"
          type="text"
          placeholder="Project Title *"
        />

        <div className="flex gap-6 wrap-required">
          {/* Base Url */}
          <input
            className=" w-full border-b mb-5 outline-none text-lg font-light border-black px-1 py-3"
            type="text"
            placeholder="Base Url"
          />

          {/* Version */}
          <input
            className="w-full border-b mb-5 outline-none text-lg font-light border-black px-1 py-3"
            type="text"
            placeholder="Version"
          />
        </div>

        {/* Description */}
        <textarea
          className="w-full border-b mb-5 border-black px-1 py-3 outline-none text-lg font-light"
          name="description"
          // cols={30}
          rows={3}
          placeholder="Description"
        ></textarea>

        <div
          className="
          add-header-buttons
          flex justify-between items-center
        ">
          <div className="flex gap-10 text-blue-600 flex-wrap">
            {/* Terms of service */}
            <span className="cursor-pointer">add terms of service</span>
            {/* licence */}
            <span className="cursor-pointer">add licence</span>
            {/* developer details */}
            <span className="cursor-pointer">add developer details</span>
          </div>
          <Link to='/add/server' 
            className="bg-green-500 px-5 py-2 text-slate-50 rounded-md">
            Next
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AddHeaderDetails;
