import React from 'react'
import { useSelector } from 'react-redux'
import ExpCrad from './ExpCrad';

const EcperienceDetails = () => {
    const {user}=useSelector((state)=>state);

    const exp=user.workExp.details
  return (
      <>
      <div >
        <h1 className='text-2xl'>Experience</h1>
        <div className='mt-2'>
            {
                exp.map((item,index)=>(
                  
                  <ExpCrad key={index} item={item}/>
                ))
            }
        </div>
      </div>
       
    </>
  )
}

export default EcperienceDetails