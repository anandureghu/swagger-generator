import React, { FC } from 'react'
import Apis from '../../../../../utils/data/apis'
import API from '../../Api/Api'

interface GroupBodyProps {
    /**
     * to indicate the body of the group need to be shown
     */
    isActive: boolean
}

const GroupBody: FC<GroupBodyProps> = (props): JSX.Element => {
    const { isActive } = props
  return (
    <div className={`${isActive ? 'h-max' : 'hidden'}`}>
      {Apis.map(api => {
        return <API api={api}/>
      })}
    </div>
  )
}

export default GroupBody