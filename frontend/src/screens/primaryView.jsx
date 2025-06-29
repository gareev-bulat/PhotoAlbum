import React from 'react'
import { useLocation } from 'react-router-dom'

const primaryView = () => {

  const { state } = useLocation();

  return (
    <div>
        <h1>{state?.imgName}</h1>
        <img src={state?.imgPath} alt={state?.imgName} width={600} height={600} />
    </div>
  )
}

export default primaryView;