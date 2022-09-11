import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { setHeaderDeatils } from "../../../redux/slice/swagger/header";
import { RootState } from "../../../redux/store";
import { Header } from "../../../types/header";
import "./AddHeaderDetails.css";

type HeaderChangeEvent = React.ChangeEvent<
  HTMLInputElement | HTMLTextAreaElement
>;

const AddHeaderDetails = () => {
  const dispatch = useDispatch();
  const headerStore = useSelector((state: RootState) => state.header);
  const [header, setHeader] = useState(headerStore);

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const key = event.target.name;
    const value = event.target.value;

    const newHeader: Header = {
      ...header,
      [key]: value,
    };

    setHeader(newHeader);
    dispatch(setHeaderDeatils({ header: newHeader }));
    // TODO: don't clear data after refresh
    // localStorage.setItem("SWAGGER_GENERATOR_HEADER", JSON.stringify(newHeader))
  };

  // TODO: don't clear data after refresh
  // useEffect(() => {
  //   const existingHeaderString = localStorage.getItem("SWAGGER_GENERATOR_HEADER")

  //   const existingHeader: Header = existingHeaderString && existingHeaderString !== 'null' ? JSON.parse(existingHeaderString) : ''
  //   setHeader(existingHeader)
  //   dispatch(setHeaderDeatils({header: existingHeader}))
  // }, [])

  return (
    <div>
      <div className="mt-10">
        {/* Title */}
        <input
          className="w-full border-b mb-5 outline-none text-lg font-light border-black px-1 py-3"
          type="text"
          placeholder="Project Title *"
          value={header.title}
          name="title"
          onChange={handleChange}
        />

        <div className="flex gap-6 wrap-required">
          {/* Base Url */}
          <input
            className=" w-full border-b mb-5 outline-none text-lg font-light border-black px-1 py-3"
            type="text"
            placeholder="Base Url"
            value={header.baseUrl}
            name="baseUrl"
            onChange={handleChange}
          />

          {/* Version */}
          <input
            className="w-full border-b mb-5 outline-none text-lg font-light border-black px-1 py-3"
            type="text"
            placeholder="Version"
            value={header.version}
            name="version"
            onChange={handleChange}
          />
        </div>

        {/* Description */}
        <textarea
          className="w-full border-b mb-5 border-black px-1 py-3 outline-none text-lg font-light"
          name="description"
          rows={3}
          placeholder="Description"
          value={header.description}
          onChange={handleChange}
        ></textarea>

        <div
          className="
          add-header-buttons
          flex justify-between items-center
        "
        >
          <div className="flex gap-10 text-blue-600 flex-wrap">
            {/* Terms of service */}
            <span className="cursor-pointer">add terms of service</span>
            {/* licence */}
            <span className="cursor-pointer">add licence</span>
            {/* developer details */}
            <span className="cursor-pointer">add developer details</span>
          </div>
          <Link
            to="/add/server"
            className="bg-green-500 px-5 py-2 text-slate-50 rounded-md"
          >
            Next
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AddHeaderDetails;
