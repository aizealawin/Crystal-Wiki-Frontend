import React from 'react'

const MapCard = ({title,image}) => {
  return (
    <div className='MapDetails'>
      <p>{title}</p>
      <img src={image} alt='broken pic'/>
    </div>
  )
}

export default MapCard
