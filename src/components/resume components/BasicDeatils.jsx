import React from 'react'
import { useSelector } from 'react-redux';
import {ImGithub} from 'react-icons/im'
import {BsLinkedin} from 'react-icons/bs'
import {MdAlternateEmail,MdWifiCalling1} from 'react-icons/md'


const BasicDeatils = () => {
    const { user } = useSelector((state) => state);

   const {name, designation, linkedin, github, email, phone}=user?.basicInfo?.details

  return (
    <>
         <div className='w-[80%] mx-auto mt-3 border-b-2 '>

            <p>
                {
                    name && <p className='text-black text-4xl font-bold uppercase font-serif text-center '>{name} </p>
                }
            </p>
            <p>
                {
                    designation && <p className='text-center text-2xl text-orange-600 capitalize'>{designation} </p>
                }
            </p>
            <div className='flex w-[100%] justify-evenly items-center text-blue-800 mt-2 ]'>
               <p >{
                github &&
                 <a href={github}><ImGithub size={25} /></a>
                  }
                 </p>

                 <p>
                    {
                        linkedin &&
                        <a href={linkedin}> <BsLinkedin size={25}/></a>
                    }
                 </p>

                 <p>
                    {
                        email &&
                            <a href={email} className='flex gap-x-3 txet-xl font-medium'  ><MdAlternateEmail size={25}/>{email}</a>
                    }
                 </p>
                 <p>
                    {
                        phone &&
                        <p className='flex justify-center gap-x-2 items-center text-xl'><MdWifiCalling1 size={25}/> {phone}</p>
                    }
                 </p>
          </div>
         </div>

         

    </>
  )
}

export default BasicDeatils;