import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
const Project = ({ title, backgroundImg, projectUrl, codeUrl,tech }) => {
  return (
    <div className='relative flex items-center justify-center h-auto w-full shadow-xl shadow-gray-400 rounded-xl p-4 group hover:bg-gradient-to-r from-indigo-600 to-indigo-400'>
      <Image
        className='rounded-xl group-hover:opacity-10'
        src={backgroundImg}
        alt='/'
      />
      {/* It's a div that is hidden until the user hovers over the image. It's positioned at the
center of the image. */}
      <div className='hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]'>
        <h3 className='text-2xl text-white tracking-wider text-center'>
          {title}
        </h3>
        <p className='pb-4 pt-2 text-white text-center'>{tech}</p>
        <Link href={projectUrl}>
          <p className='text-center px-10 py-3 rounded-xl bg-white text-gray-700 font-bold text-lg cursor-pointer'>
            View Demo
          </p>
        </Link>
        <Link href={codeUrl}>
          <p className='text-center px-10 py-3 rounded-xl mt-2 bg-white text-gray-700 font-bold text-lg cursor-pointer'>
            Source Code
          </p>
        </Link>
      </div>
    </div>
  )
}

export default Project
