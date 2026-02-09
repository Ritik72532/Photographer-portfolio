import React from 'react'

const ProjectCard = ({title,description,image,tech}) => {
  return (
    <div className='bg-dark-300 rounded-2xl overflow-hidden hover:-translate-y-2 transition duration-300 cursor-pointer'>
      <img src={image} alt={title} className='object-cover h-60 w-full'/>
      <div className="p-6">
        <h3 className='text-xl font-semibold mb-2'>{title}</h3>
        <p className='text-gray-400 mb-4'>{description}</p>
        <div className='flex flex-wrap gap-2 mb-4'>
            {tech.map((item,index)=>(
                <span key={index} className='px-3 py-1 rounded-full text-sm bg-dark-400'>
                    {item}
                </span>
            ))}
        </div>
        <div className='flex gap-2'>
            <a href="#" className='text-center px-4 py-2 flex-1 bg-purple font-medium rounded-lg hover:bg-purple-700 transition duration-300 '>
               View more...
            </a>
        </div>
      </div>
    </div>
  )
}

export default ProjectCard
