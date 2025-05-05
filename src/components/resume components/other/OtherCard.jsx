import React from 'react'

const OtherCard = ({item} )=> {

    const {title,description}=item;
  return (
    <>
        <div>
           <p className='text-2xl w-fit border-b-2 border-black'>{title}</p>
           <p>{description}</p>
        </div>
    </>
  )
}

export default OtherCard