import React from 'react';
import {AiFillGithub} from 'react-icons/ai';

const ProjectCard = ({item}) => {

    const{ project_title, overview,deloyed_link,github_link, project_description}=item;

  return (
        <>
            <div>
                <div className='flex gap-x-10 items-center'>
                   <a href={deloyed_link}
                   className='text-lg text-blue-600'
                    >
                    {project_title}</a>

                    <a href={github_link}><AiFillGithub  className='text-lg text-blue-600' size={25}/></a>
                </div>
              

                <p>{project_description}</p>

              
            </div>
        </>
  )
}

export default ProjectCard;