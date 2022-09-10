import React, { FC } from "react";
import { Parameter } from "../../../../utils/data/apis";

interface ApiParameterProps {
  parameter: Parameter;
}

const ApiParameter: FC<ApiParameterProps> = ({ parameter }): JSX.Element => {
  return (
    <tr>
      <td className="py-2 pr-10">
        <div className="font-bold my-1 relative">
          {parameter.name}
          <span className="font-normal absolute -top-1 ml-1 text-red-500 text-sm">
            {parameter.required ? "  *required" : ""}
          </span>
        </div>
        <div className="text-sm font-bold text-gray-700 my-1">
          <span>{parameter.type}</span>
          {parameter.fomrat && <span className="text-gray-500">(${parameter.fomrat})</span>}
        </div>
        <div className="text-gray-500 text-sm font-bold italic my-1">( {parameter.in} )</div>
      </td>

      <td>
        <div>
            <p>{parameter.description}</p>
            <input
            className="px-2 py-1 rounded border my-1 disabled:bg-slate-50 disabled:text-gray-400" 
            type={`${parameter.type === 'file' ? 'file' : 'text'}`}
            disabled 
            placeholder={parameter.name} />
        </div>
      </td>
    </tr>
  );
};

export default ApiParameter;
