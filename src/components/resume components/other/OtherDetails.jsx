import React from 'react'
import OtherCard from './OtherCard';
import { useSelector } from 'react-redux';

const OtherDetails = () => {
    const {user}=useSelector((state)=>state);
    const other=user.others.details;
  return (
    <>
        <div>
            {
                other.map((item,index)=>(
                   < OtherCard key={index} item={item}/>
                ))
            }
        </div>
    </>
  )
}

export default OtherDetails