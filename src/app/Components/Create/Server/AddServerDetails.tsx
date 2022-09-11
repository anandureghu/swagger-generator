import React, { useState } from "react";
import { AiOutlinePlus } from "react-icons/ai";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { RootState } from "../../../redux/store";

// TODO: change servers data structure to hash table
const AddServerDetails = () => {
  const [serverId, setserverId] = useState(1);
  const serversStore = useSelector((state: RootState) => state.header.servers)
  const [servers, setServers] = useState(serversStore);

  const handleServerDelete = (id: number) => {
    setServers(servers.filter((server) => server.id !== id));
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const key = e.target.name
    const value = e.target.value
    let newServers = servers

    newServers.map(server => {
      if (server.id === parseInt(key)){
        server.url = value
      }
    })

    setServers(newServers)
    console.log(newServers)
  }

  return (
    <div className="mt-10">
      {/* Limiting servers to 5 numbers */}
      {servers.length < 5 && (
        <div
          className="mb-5 cursor-pointer flex items-center gap-2 justify-end text-blue-600"
          onClick={() => {
            setServers([...servers, { id: serverId + 1, url: "" }]);
            setserverId(serverId + 1);
          }}
        >
          <AiOutlinePlus /> Add new Server
        </div>
      )}
      {servers.map((server, index) => {
        return (
          <div className="flex items-center gap-5">
            <input
              className="outline-none border-b border-black w-full px-1 py-3 mb-5"
              type="text"
              placeholder={`Server url ${index + 1}`}
              name={`${server.id}`}
              value={server.url}
              onChange={handleChange}
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
