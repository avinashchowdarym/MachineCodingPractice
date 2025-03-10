import React from 'react'

const Card = ({title, imgsrc , description}) => {
  return (
    <div className='flex flex-col border-1 bg-white justify-content items-center p-3 h-max border-gray-950 gap-2 z-30'>
        <div className='text-2xl font-bold'>{title}</div>
        <div>
            <img src={imgsrc}/>
        </div>
        <a href='/' className='text-blue-600'>
            {description}
        </a>
    </div>
  )
}

export default Card