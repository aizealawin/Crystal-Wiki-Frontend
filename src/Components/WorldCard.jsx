import React from 'react'

const WorldCard = ({title,image}) => {
  return (
    <div className='WorldDetails'>
      <p>{title}</p>
      <img className='lore-card' src={image} alt='broken pic'/>
    </div>
  )
}

export default WorldCard
