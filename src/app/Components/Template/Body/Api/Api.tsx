import React, { FC, useState } from "react";
import ApiParametes from "./ApiParametes";
import ApiResponses from "./ApiResponses";
import { IoIosArrowDown } from "react-icons/io";
import { Api } from "../../../../utils/data/apis";

interface ApiProps {
  api: Api;
}

const API: FC<ApiProps> = ({ api }): JSX.Element => {
  const [isApiActive, setIsApiActive] = useState(false);

  return (
    <div
      className={`
        ${api.method === "GET" ? "bg-blue-100 border-blue-400" : ""}
        ${api.method === "POST" ? "bg-green-100 border-green-400" : ""}
        ${api.method === "PUT" ? "bg-orange-100 border-orange-400" : ""}
        ${api.method === "DELETE" ? "bg-red-100 border-red-400" : ""}
        ${api.method === "PATCH" ? "bg-teal-100 border-teal-400" : ""}
        mx-12 my-3 border rounded
    `}
    >
      <div
        className={`
        ${api.method === "GET" && isApiActive? "border-b border-blue-400" : ""}
        ${api.method === "POST" && isApiActive? "border-b border-green-400" : ""}
        ${api.method === "PUT" && isApiActive? "border-b border-orange-400" : ""}
        ${api.method === "DELETE" && isApiActive? "border-b border-red-400" : ""}
        ${api.method === "PATCH" && isApiActive? "border-b border-teal-400" : ""}
        flex items-center justify-between cursor-pointer p-2
        `}
        onClick={() => setIsApiActive(!isApiActive)}
      >
        <div className="flex items-center text-sm">
          {/* API Method */}
          <p
            className={`
            ${api.method === "GET" ? "bg-blue-400" : ""}
            ${api.method === "POST" ? "bg-green-400" : ""}
            ${api.method === "PUT" ? "bg-orange-400" : ""}
            ${api.method === "DELETE" ? "bg-red-400" : ""}
            ${api.method === "PATCH" ? "bg-teal-400" : ""}
            py-1 px-3 rounded text-slate-50 font-semibold w-24 text-center
        `}
          >
            {api.method}
          </p>

          {/* API Url */}
          <p className="ml-3 font-semibold text-base">{api.url}</p>

          {/* Api description */}
          {api.description && (
            <p className="ml-3 font-light text-sm text-gray-600">{`${
              api.description?.length > 30
                ? api.description?.substring(0, 30)
                : api.description
            }`}</p>
          )}
        </div>

        <div
          className={`${
            isApiActive ? "rotate-180" : "rotate-0"
          } ease-linear duration-300 text-2xl`}
        >
          <IoIosArrowDown />
        </div>
      </div>

      {isApiActive && (
        <div>
          <ApiParametes parameters={api.parameters} />
          {/* <ApiResponses responses={api.responses} /> */}
        </div>
      )}
    </div>
  );
};

export default API;
