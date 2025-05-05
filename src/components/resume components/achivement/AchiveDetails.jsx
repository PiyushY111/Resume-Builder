import React from 'react'
import { useSelector } from 'react-redux';
import AchiveCard from './AchiveCard';
const AchiveDetails = () => {

    const {user}=useSelector((state)=>state);

    const achivement=user.achievements.details
  return (
     <>
     <div>
       <h1 className='text-2xl w-fit border-black border-b-2'>Achivements</h1>

      <div>
            {
                achivement.map((item,index)=>(
                   
                   <AchiveCard  key={index} item={item}/>
                ))
            }
        </div>
     </div>
        
     </>
  )
}

export default AchiveDetails;