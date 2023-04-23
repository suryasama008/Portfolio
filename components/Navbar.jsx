import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { AiOutlineClose, AiOutlineMenu, AiOutlineMail } from 'react-icons/ai'
import { FaLinkedinIn, FaGithub } from 'react-icons/fa'
import { BsFillPersonLinesFill } from 'react-icons/bs'
import Router, { useRouter } from 'next/router'
const Navbar = () => {
  const [nav, setNav] = useState(false)
  const [shadow, setShadow] = useState(false)
  const [navBg, setNavBg] = useState('#D3D3D3')
  const [linkColor, setLinkColor] = useState('black')

  const toggleNavbar = () => {
    setNav(!nav)
  }
  useEffect(() => {
    const handleShadow = () => {
      if (window.scrollY >= 90) {
        setShadow(true)
      } else {
        setShadow(false)
      }
    }
    window.addEventListener('scroll', handleShadow)
  }, [])

  useEffect(() => {
    if (
      Router.asPath === '/inventory' ||
      Router.asPath === '/netflix' ||
      Router.asPath === '/crypto' ||
      Router.asPath === '/twitch'
    ) {
      setNavBg('transperant')
      setLinkColor('#D3D3D3')
    } else {
      setNavBg('white')
      setLinkColor('black')
    }
  }, [])

  return (
    <div
      style={{ backgroundColor: `${navBg}` }}
      className={
        shadow
          ? 'fixed w-full h-20 shadow-xl z-[100]'
          : 'fixed w-full h-20 z-[100]'
      }
    >
      <div className='flex justify-between items-center w-full h-full px-2 2xl:px-16'>
        <div style={{ color: `${linkColor}` }}>
          <h3 className='text-3xl md:text-4xl font-medium '>{'<Surya/>'}</h3>
          <h4 className='font-extralight md:text-xl'>Front-end Developer</h4>
        </div>
        <div>
          <ul style={{ color: `${linkColor}` }} className='hidden md:flex'>
            <Link href='/'>
              <li className='ml-10 text-sm uppercase hover:border-b border-gray-300 '>
                Home
              </li>
            </Link>
            <Link href='/#about'>
              <li className='ml-10 text-sm uppercase hover:border-b border-gray-300 '>
                About
              </li>
            </Link>
            <Link href='/#skills'>
              <li className='ml-10 text-sm uppercase hover:border-b border-gray-300 '>
                Skills
              </li>
            </Link>
            <Link href='/#projects'>
              <li className='ml-10 text-sm uppercase hover:border-b border-gray-300 '>
                Projects
              </li>
            </Link>
            <Link href='/#contact'>
              <li className='ml-10 text-sm uppercase hover:border-b border-gray-300 '>
                Contact
              </li>
            </Link>
          </ul>
          <div onClick={toggleNavbar} className='md:hidden '>
            <AiOutlineMenu size={25} />
          </div>
        </div>
      </div>
      <div
        className={
          nav
            ? 'md:hidden fixed left-0 top-0 w-full h-screen bg-black/70 duration-500'
            : ''
        }
      >
        <div
          className={
            nav
              ? 'fixed left-0 top-0 w-[75%] sm:w-[60%] md:[45%] h-screen bg-[#ecf0f3] p-10 ease-in duration-500'
              : 'fixed left-[-100%] top-0 w-[75%] p-10 ease-in duration-500'
          }
        >
          <div>
            <div className='flex w-full items-center justify-between'>
              <Link href='/'>
                <div className=''>
                  <h3 className='text-2xl font-medium '>{'<Surya />'}</h3>
                  <h4 className='font-extralight'>Front-end Developer</h4>
                </div>
              </Link>
              <div
                onClick={toggleNavbar}
                className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer'
              >
                <AiOutlineClose />
              </div>
            </div>
            <div className='border-b border-gray-300 my-4'>
              <p className='w-[85%] md:w-[90%]'>
                Let's build somethig amazing together{' '}
              </p>
            </div>
          </div>
          <div className='py-4 flex flex-col'>
            <ul>
              <Link href='/'>
                <li className='py-4 text-sm'>Home</li>
              </Link>
              <Link href='/#about'>
                <li onClick={() => setNav(false)} className='py-4 text-sm'>
                  About
                </li>
              </Link>
              <Link href='/#skills'>
                <li onClick={() => setNav(false)} className='py-4 text-sm'>
                  Skills
                </li>
              </Link>
              <Link href='/#projects'>
                <li onClick={() => setNav(false)} className='py-4 text-sm'>
                  Projects
                </li>
              </Link>
              <Link href='/#contact'>
                <li onClick={() => setNav(false)} className='py-4 text-sm'>
                  Contact
                </li>
              </Link>
            </ul>
            <div className='pt-40'>
              <p className='uppercase tracking-widest text-indigo-500'>
                Let's Connect
              </p>
              <div className='flex items-center justify-between my-4 px-10 w-full sm:w-[80%]'>
                <div className='rounded-full shadow-lg shadow-gray-300 p-3 cursor-pointer hover:scale-105 ease-in duration-300'>
                  <a href='https://www.linkedin.com/in/surya-prakash-reddy-sama/'>
                    <FaLinkedinIn />
                  </a>
                </div>
                <div className='rounded-full shadow-lg shadow-gray-300 p-3 cursor-pointer hover:scale-105 ease-in duration-300'>
                  <a href='https://github.com/suryasama008'>
                    <FaGithub />
                  </a>
                </div>
                <div className='rounded-full shadow-lg shadow-gray-300 p-3 cursor-pointer hover:scale-105 ease-in duration-300'>
                  <AiOutlineMail />
                </div>
                <div className='rounded-full shadow-lg shadow-gray-300 p-3 cursor-pointer hover:scale-105 ease-in duration-300'>
                  <BsFillPersonLinesFill />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar
