import React from 'react'

const WorldCard = ({title,image}) => {
  return (
    <div className='WorldDetails'>
      <p>{title}</p>
      <img src={image} alt='broken image'/>
    </div>
  )
}

export default WorldCard
