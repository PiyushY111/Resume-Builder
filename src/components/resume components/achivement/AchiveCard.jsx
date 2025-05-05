import React from 'react'

const AchiveCard = ({item}) => {

    const{title,description}=item
  return (
    <>
        <div>
            <p>{title}</p>
            <p>{description}</p>
        </div>
    </>
  )
}

export default AchiveCard