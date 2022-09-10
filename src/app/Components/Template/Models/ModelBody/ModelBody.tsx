import React, { FC } from 'react'
import Model from '../Model/Model'

interface ModelBodyProps {
    isActive: boolean
}

const ModelBody: FC<ModelBodyProps> = ({isActive}): JSX.Element => {
  return (
    <div className={`
    ${isActive ? 'h-max' : 'hidden'}
    border-t-2 px-12 py-2 
    `}>
        <Model/>
        <Model/>
        <Model/>
        <Model/>
    </div>
  )
}

export default ModelBody