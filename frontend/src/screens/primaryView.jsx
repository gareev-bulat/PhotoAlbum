import React from 'react'
import { useLocation } from 'react-router-dom'
import './screens.css'


const PrimaryView = () => {

  const { state } = useLocation();

  return (
    <div className='primaryViewContainer'>
        <img className='image' src={state?.imgPath} width={600} height={600} alt={state?.imgTitle} />
         <h1 className='textView'>{state?.imgTitle}</h1>
         <h3 className='date'>{state?.imgDate}</h3>
    </div>
  )
}

export default PrimaryView;