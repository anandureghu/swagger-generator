import React, { useState } from 'react'
import {IoIosArrowForward} from 'react-icons/io'
import ModelData from './ModelData'

function Model() {

  const [isActive, setIsActive] = useState(false)

  return (
    <div className={`bg-gray-100 my-3 rounded ${isActive ? 'pb-3': ''}`}>
      {/* Model Name */}
      <div className='p-3 px-7 flex items-center cursor-pointer'
        onClick={() => setIsActive(!isActive)}
      >
        Model Name
        <span className={`
        ${isActive ? 'rotate-90' : 'rotate-0'} 
        ml-2 ease-in duration-150
        `}>
          <IoIosArrowForward/>
        </span>
        <span className={`${isActive ? 'block' : 'hidden'} text-sm ml-2`}>{'{'}</span>
      </div>

      <div className={`
      ${isActive ? 'h-max' : 'hidden'}
      px-12
      `}>
        <ModelData/>
        <ModelData/>
        <ModelData/>
        <ModelData/>
      </div>

      <span className={`${isActive ? 'block' : 'hidden'} text-sm px-6`}>{'}'}</span>
    </div>
  )
}

export default Model