import React from 'react'

const Educard = ({item}) => {
      const {title,institution,start,end,marks}=item
  return (
    <>
      <div className='mb-1'>
         <p className=' text-lg'><b>Course:</b> {title}</p>
         <p className=' text-lg'><b>Institution:</b> {institution}</p>
           <div className='flex gap-x-4'>
             <p className=' text-lg'><b>Percentage / CGPA :</b>{marks}</p>
             <p className=' text-lg'><b>Start:</b> {start} </p>
             <p className=' text-lg'><b>End :</b> {end} </p>
             
           </div>
        
        
      </div>
    </>
  )
}

export default Educard