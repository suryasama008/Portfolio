import React from 'react'
import { AiOutlineClose, AiOutlineMenu, AiOutlineMail } from 'react-icons/ai'
import { FaLinkedinIn, FaGithub } from 'react-icons/fa'
import { BsFillPersonLinesFill } from 'react-icons/bs'
const Main = () => {
  return (
    /* Setting the height of the div to the height of the screen. */
    <div id='home' className='w-full h-screen text-center'>
      {/* Setting the max width of the div to 1240px, and centering it. */}
      <div className='max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center '>
        <div>
          {/* Setting the text to uppercase, making the text size small, and making the text gray. */}
          <p className='uppercase text-sm tracking-widest text-gray-600'>
            LET S BUILD SOMETHING AWESOME TOGETHER
          </p>

          <h1 className='py-4 text-gray-700'>
            Hi, Im <span className='text-red-600'>Surya</span>
          </h1>
          <h1>A Full Stack Web Developer</h1>
          <p className='py-4 text-gray-600 max-w-[70%] m-auto'>
            I am a full stack web developer specializing in building (and
            Occasionaly designing) exceptional digital experiences. I love to
            create beautiful and performant products with delightful user
            experiences. Currently, I amm focused on building responsive front-end
            web applications while learning back-end technologies.
          </p>
          {/* Centering the div, and making sure that the div is not wider than 330px. */}
          <div className='flex items-center justify-between max-w-[330px] m-auto'>
            {/* Creating a div with a border, a shadow, and a hover effect. */}
            <div className='rounded-full  border-2 border-gray-200 shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-125 ease-in duration-200'>
              <a href='https://www.linkedin.com/in/surya-prakash-reddy-sama/'>
                <FaLinkedinIn />
              </a>
            </div>
            <div className='rounded-full  border-2 border-gray-200 shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-125 ease-in duration-300'>
              <a href='https://github.com/suryasama008'>
                <FaGithub />
              </a>
            </div>
            <div className='rounded-full  border-2 border-gray-200 shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-125 ease-in duration-300'>
              <AiOutlineMail />
            </div>
            <div className='rounded-full  border-2 border-gray-200 shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-125 ease-in duration-300'>
              <BsFillPersonLinesFill />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Main
