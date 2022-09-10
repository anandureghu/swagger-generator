import React, { FC } from 'react'
import { Response } from '../../../../utils/data/apis'

interface ApiResponsesProps {
    responses: Response[]
}

const ApiResponses: FC<ApiResponsesProps> = ({responses}): JSX.Element => {
  return (
    <div>ApiResponses</div>
  )
}

export default ApiResponses