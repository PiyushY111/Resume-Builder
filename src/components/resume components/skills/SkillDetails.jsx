import React from 'react'
import { useSelector } from 'react-redux';
import SkilCard from './SkilCard';

const SkillDetails = () => {

    const {user}=useSelector((state)=>state);
    const skil=user.summery.details
  return (
    <>
       <div className='mt-0 min-w-[50%] pt-2 lg:pt-4'>
         <h1 className='text-2xl w-fit border-b-2 border-black'>Skils</h1>
          <div>
            {
                skil.map((item,index)=>(
                      
                      <SkilCard key={index} item={item}/>
                ))
            }
         </div>
       </div>
        
    </>
  )
}

export default SkillDetails;