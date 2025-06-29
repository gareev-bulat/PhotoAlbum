import React from 'react'
import { useLocation } from 'react-router-dom'
import './screens.css'

const PrimaryView = () => {

  const { state } = useLocation();
  console.log(state)

  return (
    <div className='primaryViewContainer'>
        <img className='image' src={state?.imgPath} width={600} height={600} alt={state?.imgName} />
         <h1 className='textView'>{state?.imgName}</h1>
         <h3 className='date'>{state?.imgDate}</h3>
    </div>
  )
}

export default PrimaryView;