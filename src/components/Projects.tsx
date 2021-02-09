import React from 'react'
import { data } from '../data/data'
import ProjectCard from './ProjectCard'
const Projects = () => {
    return (
        <div className='px-4'>
            {data.map((project) => <ProjectCard key={project.name} {...project}/>)}
        </div>
    )
}

export default Projects
