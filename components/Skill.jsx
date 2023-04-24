import React from 'react'
import Image from 'next/image'
const Skill = ({ src, title,color }) => {
  return (
    <div className='p-6 bg-gray-100  shadow-md shadow-gray-400 border border-gray-200 rounded-xl hover:scale-105 ease-in duration-300' >
      {/* Creating a grid with 2 columns and a gap of 4px. */}
      <div className='grid grid-cols-2 gap-4 justify-center items-center'>
        <div className='m-auto'>
          <Image src={src} width='64px' height='64px' alt='/' />
        </div>
        {/* Centering the text vertically and horizontally. */}
        <div className='flex flex-col items-center justify-center'>
          <h3>{title}</h3>
        </div>
      </div>
    </div>
  )
}

export default Skill
