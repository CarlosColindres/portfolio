import React from 'react'
interface Props {
    img: string
    name: string
    description: string
    live: string
    code: string
}
const ProjectCard: React.FC<Props> = ({img,name,description,live,code}) => {
    return (
      <div className='lg:flex lg:justify-between pb-4 px-4 mt-8'>
        <div className='card-img'>
          <img className='w-full shadow-lg' src={img} alt={name} />
          
        </div>
        <div className='flex justify-center card-text'>
          <div className='lg:w-4/5'>
            <h2 className='text-4xl text-darkGreen my-8'>{name}</h2>
            <p className='mb-6 w-11/12 dark:text-bgColor'>{description}</p>
            <a
              className='inline-block text-lg py-2 px-8 border-darkGreen text-darkGreen hover:text-lightGreen hover:border-lightGreen border-2 rounded-md mb-4 mr-2 lg:mb-0'
              href={live}
              target='_blank'
              rel='noreferrer'>
              See Live
            </a>
            <a
              className='inline-block text-lg py-2 px-8 border-darkGreen bg-darkGreen text-bgColor hover:bg-lightGreen hover:border-lightGreen hover:text-darkGray border-2 rounded-md lg:ml-6 '
              href={code}
              target='_blank'
              rel='noreferrer'>
              Source Code
            </a>
          </div>
        </div>
      </div>
    )
}

export default ProjectCard
