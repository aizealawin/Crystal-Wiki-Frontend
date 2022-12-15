import React from 'react'

const DeityCard = ({title, image}) => {
  return (
    <div className='DeityDetails'>
      {/* <p className='deityTitle'>{title}</p> */}
      <img src={image} alt='broken pic'/>
    </div>
  )
}

export default DeityCard