import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import propertyImg from '../public/assets/projects/property.jpg'
import inventory from '../public/assets/projects/inventory.png'
import netflixImg from '../public/assets/projects/netflix.jpg'
import chatbot from '../public/assets/projects/chatbot.png'
import wirelessplus from '../public/assets/projects/wirelessplus.png'
import gallery from '../public/assets/projects/gallery.png'
import ProjectItem from './ProjectItem'

const Projects = () => {
  const name = [1, 3, 4, 67]
  return (
    <div id='projects' className='w-full'>
      <div className='max-w-[1240px] mx-auto px-2 py-16'>
        <p className='text-xl tracking-widest uppercase text-[#5651e5]'>
          Projects
        </p>
        <h2 className='py-4'>What I&apos;ve Built</h2>
        <div className='grid md:grid-cols-2 gap-8'>
          <ProjectItem
            title='Pixalbay Gallery'
            backgroundImg={gallery}
            projectUrl='https://pixabay-gallery-surya.netlify.app/'
            codeUrl='https://github.com/suryasama008/react-tailwiind-pixabay-photo-gallery'
            tech='React JS, Tailwind CSS, Pixabay API'
          />
          <ProjectItem
            title='Inventory Management System'
            backgroundImg={inventory}
            projectUrl='https://wirelessplus.netlify.app/'
            codeUrl='https://github.com/suryasama008/wireless-vite'
            tech='React JS, Bootstrap 5, Firebase'
          />
          <ProjectItem
            title='AI Chatbot'
            backgroundImg={chatbot}
            projectUrl='https://chatbotsurya.netlify.app/'
            codeUrl='https://github.com/suryasama008/chatbot-2.0'
            tech='React JS, GPT-3.5 turbo API'
          />

          <ProjectItem
            title='Netflix App'
            backgroundImg={netflixImg}
            projectUrl='/netflix'
            codeUrl='/'
            tech='React JS, tailwind CSS, TMDB API'
          />
        </div>
      </div>
    </div>
  )
}

export default Projects
