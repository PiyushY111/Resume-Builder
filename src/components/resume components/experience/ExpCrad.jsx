import React from 'react'
import {ImLocation2} from 'react-icons/im';
import {AiOutlineLink} from 'react-icons/ai';

const ExpCrad = ({item}) => {

    const {title,company,certificate,location,start,end, workdecsription}=item;
  return (
    <>
        <div>

            <div className='flex gap-x-2'>
            <p>{title}</p>
             <p>in</p>
            <p>{company}</p>
            <p><b>Start:</b> {start}</p>
            <p><b>End:</b> {end}</p>
            </div>

            <div className='flex gap-x-8 items-center my-1'>
             <a href={certificate} 
             className='text-blue-900 font-semibold flex gap-x-1 items-center'>
             Certificate <AiOutlineLink size={20}/></a>
             <p className='flex gap-2 items-center text-blue-600'> <ImLocation2 size={20}/> {location}</p>
            </div>
            
            <p>{workdecsription}</p>
        </div>
    </>
  )
}

export default ExpCrad
