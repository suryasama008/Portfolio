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
            tech='React JS'
          />
          <ProjectItem
            title='Inventory Management System'
            backgroundImg={inventory}
            projectUrl='https://wirelessplus.netlify.app/'
            tech='React JS'
          />
          <ProjectItem
            title='AI Chatbot'
            backgroundImg={chatbot}
            projectUrl='https://chatbotsurya.netlify.app/'
            tech='React JS'
          />

          <ProjectItem
            title='Netflix App'
            backgroundImg={netflixImg}
            projectUrl='/netflix'
            tech='React JS'
          />
        </div>
      </div>
    </div>
  )
}

export default Projects
