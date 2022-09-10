import React, { FC } from "react";
import { Parameter } from "../../../../utils/data/apis";
import Api from "../Body";
import ApiParameter from "./ApiParameter";

interface ApiParametesProps {
  parameters: Parameter[];
}

const ApiParametes: FC<ApiParametesProps> = ({ parameters }): JSX.Element => {
  return (
    <div>
      <div className="flex justify-between items-center bg-slate-50 px-8 py-3 text-base">
        <p>Parameters</p>
        <button className="px-3 py-1 border border-black rounded">
          Try it out
        </button>
      </div>

      {parameters.length > 0 ? (
        <table className="mx-8 w-max">
          <tr>
            <th className="py-3 text-left">Name</th>
            <th className="py-3 text-left">Description</th>
          </tr>
          <tbody>
            {parameters.map((parameter) => {
              return <ApiParameter parameter={parameter} />;
            })}
          </tbody>
        </table>
      ) : (
        <p className="px-8 font-light py-3">No parameters</p>
      )}
    </div>
  );
};

export default ApiParametes;
