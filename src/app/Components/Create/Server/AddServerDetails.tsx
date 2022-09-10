import React, { useState } from "react";
import { AiOutlinePlus } from "react-icons/ai";
import { Link } from "react-router-dom";

const AddServerDetails = () => {
  const [serverId, setserverId] = useState(1);
  const [servers, setServers] = useState([{ id: serverId, url: "" }]);

  const handleServerDelete = (id: number) => {
    setServers(servers.filter((server) => server.id !== id));
  };
  return (
    <div className="mt-10">
      <div
        className="mb-5 cursor-pointer flex items-center gap-2 justify-end text-blue-600"
        onClick={() => {
          setServers([...servers, { id: serverId + 1, url: "" }]);
          setserverId(serverId + 1);
        }}
      >
        <AiOutlinePlus /> Add new Server
      </div>
      {servers.map((server, index) => {
        return (
          <div className="flex items-center gap-5">
            <input
              className="outline-none border-b border-black w-full px-1 py-3 mb-5"
              type="text"
              placeholder={`Server url ${index + 1}`}
            />
            {servers.length > 1 && (
              <span
                className="cursor-pointer h-9 rounded-md text-red-500 border-red-500 border px-3 py-1"
                onClick={() => handleServerDelete(server.id)}
              >
                delete
              </span>
            )}
          </div>
        );
      })}

      <div className="flex justify-between">
        <Link
          to="/add/header"
          className="bg-gray-500 px-10 py-2 text-slate-50 rounded"
        >
          Back
        </Link>
        <Link
          to="/add/api"
          className="bg-green-500 px-10 py-2 text-slate-50 rounded"
        >
          Next
        </Link>
      </div>
    </div>
  );
};

export default AddServerDetails;
