import React from 'react'
import developer from '../public/assets/developer.jpg'
import { AiOutlineClose, AiOutlineMenu, AiOutlineMail } from 'react-icons/ai'
import { FaLinkedinIn, FaGithub } from 'react-icons/fa'
import { BsFillPersonLinesFill } from 'react-icons/bs'
import { HiChevronDoubleUp } from 'react-icons/hi'
import Link from 'next/link'
const Contact = () => {
  return (
    <div id='contact' className='w-full lg:h-screen'>
      <div className='max-w-[1240px] m-auto px-2 py-16 w-full'>
        <p className='text-xl tracking-widest uppercase text-indigo-600'>
          Contact
        </p>
        <h2 className='py-4'>Get In Touch</h2>
        <div className='grid lg:grid-cols-5 gap-8 '>
          {/*left*/}
          {/* This is a div that is taking up 3 columns on the left side of the screen and 2 columns on
  the right side of the screen. */}
          <div className='col-span-3 lg:col-span-2 w-full h-full shadow-xl shadow-gray-400 rounded-xl p-4'>
            <div className='lg:p-4 h-full'>
              <div>
                <img
                  className='rounded-xl hover:scale-105 ease-in duration-300'
                  src='https://cdn.pixabay.com/photo/2017/02/08/15/36/zaneprazdneny-2049242_1280.jpg'
                  alt=''
                />
              </div>
              <div>
                <h2 className='py-2'>Surya</h2>
                <p>Front-End Developer</p>
                <p className='py-4'>
                  I am available for freelance or full-time positions. contact
                  me and lets talk
                </p>
                <div>
                  <p className='uppercase pt-8'>Connect with me</p>
                  <div className='flex items-center justify-between py-4 px-10'>
                    {/* Creating a div with a border, a shadow, and a hover effect. */}
                    <div className='rounded-full  border-2 border-gray-200 shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-125 ease-in duration-300'>
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
          </div>
          {/*right*/}
          {/* This is a div that is taking up 3 columns on the left side of the screen and 2 columns on
the right side of the screen. */}
          <div className='col-span-3 w-full shadow-xl shadow-gray-400 rounded-xl lg:p-4'>
            <div className='p-4'>
              <form>
                {/* This is a div that is taking up 2 columns on the left side of the screen and 2 columns on
the right side of the screen. */}
                <div className='grid md:grid-cols-2 gap-4 w-full py-2'>
                  <div className='flex flex-col'>
                    <label className='uppercase text-sm py-2'>Name</label>
                    <input
                      className='border-2 rounded-lg p-3 flex border-gray-300'
                      type='text'
                      name='name'
                    />
                  </div>
                  <div className='flex flex-col'>
                    <label className='uppercase text-sm py-2'>
                      Phone Number
                    </label>
                    <input
                      className='border-2 rounded-lg p-3 flex border-gray-300'
                      type='text'
                      name='phone'
                    />
                  </div>
                </div>
                <div className='flex flex-col py-2'>
                  <label className='uppercase text-sm py-2'>Email</label>
                  <input
                    className='border-2 rounded-lg p-3 flex border-gray-300'
                    type='email'
                    name='email'
                  />
                </div>
                <div className='flex flex-col py-2'>
                  <label className='uppercase text-sm py-2'>Subject</label>
                  <input
                    className='border-2 rounded-lg p-3 flex border-gray-300'
                    type='text'
                    name='subject'
                  />
                </div>
                <div className='flex flex-col py-2'>
                  <label className='uppercase text-sm py-2'>Message</label>
                  <textarea
                    className='border-2 rounded-lg p-3 border-gray-300'
                    rows='10'
                    name='message'
                  ></textarea>
                </div>
                <button className='w-full p-4 text-gray-100 mt-4'>
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
        <div className='flex justify-center py-12'>
          <Link href='/'>
            <div className='rounded-full  border-2 border-gray-200 shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-125 ease-in duration-200'>
              <HiChevronDoubleUp className='text-indigo-600 ' size={30} />
            </div>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Contact
