import React from 'react'
import { useSelector } from 'react-redux';
import ProjectCard from './ProjectCard';


const Projects = () => {

    const {user}=useSelector((state)=>state)

    const project=user.projects.details;
  

  return (
    <>
        <h1 className='text-2xl w-fit border-b-2'>Projects</h1>
         
         <div>
          {
            project.map((item,index)=>(
                <ProjectCard key={index} item={item}/>
            ))
          }
         </div>
    </>
  )
}

export default Projects;