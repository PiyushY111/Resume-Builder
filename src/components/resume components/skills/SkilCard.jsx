import React from 'react'

const SkilCard = ({item}) => {

    const {title,skill}=item
  return (
   <>
    <div >
        <p><b>{title}:</b></p>
        <p>{skill}</p>
    </div>
   </>
  )
}

export default SkilCard;