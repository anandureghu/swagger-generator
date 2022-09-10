import React, { useState } from "react";
import { IoIosArrowForward } from "react-icons/io";

function ModelData() {
  const [isEnumActive, setIsEnumActive] = useState(false);
  const [isArrayActive, setIsArrayActive] = useState(false);

  return (
    <div className="text-sm font-light flex">
      {/* Column name */}
      <div className="text-gray-600">
        column_name
        <span className="text-rose-600 text-lg ml-1">*</span>
      </div>

      {/* Column details */}
      <div className="mt-1 ml-20">
        {/* Data type */}
        <p className="font-semibold text-indigo-600">
          datatype
          <span className="text-gray-500 ml-1">($sub)</span>
        </p>

        {/* Example */}
        <p>
          <span className="text-violet-500 font-normal mr-1">example:</span>
          something
        </p>

        {/* Enums */}
        <div onClick={() => setIsEnumActive(!isEnumActive)}>
          <p className="font-normal">Enum:</p>
          <div className="flex items-center ml-5 cursor-pointer">
            <span className={`${isEnumActive ? "rotate-90" : "rotate-0"}`}>
              <IoIosArrowForward />
            </span>
            {isEnumActive ? (
              // enum data
              <span>[data, data, data]</span>
            ) : (
              // enum length
              <span>Array[3]</span>
            )}
          </div>
        </div>

        {/* Array */}
        <div className={`
        flex font-normal cursor-pointer
        ${isArrayActive ? 'items-start' : 'items-center'}
        `} 
            onClick={() => setIsArrayActive(!isArrayActive)}
        >
          <div className={`${isArrayActive ? "rotate-90" : "rotate-0"} mr-2`}>
            <IoIosArrowForward />
          </div>
          <div>
            {isArrayActive 
                ? <div>
                    [
                        <p className="font-semibold text-indigo-600">
                            datatype 
                            <span className="text-gray-500 ml-1">($sub)</span>
                        </p>
                        <p className="font-light">
                            <span className="font-normal text-violet-500">example: </span>
                            something    
                        </p>
                    ]
                </div>
                : <div>[...]</div>
            }
          </div>
        </div>
      </div>
    </div>
  );
}

export default ModelData;
