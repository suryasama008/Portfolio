import React from 'react'
import Image from 'next/image'
import Skill from './Skill'
const Skills = () => {
  return (
    <div id='skills' className='w-full lg:h-screen p-2 '>
      <div className='max-w-[1240px] mx-auto flex flex-col justify-center h-full'>
        <p className='text-xl tracking-widest uppercase text-indigo-600'>
          Skills
        </p>
        <h2 className='py-4'>What I Can Do</h2>
        {/* A grid system that is responsive. */}
        <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-8'>
          {/* A div that has a padding of 6px, a shadow, rounded edges, and a hover effect. */}
          <Skill title='HTML' src='/../public/assets/skills/html.png' />
          <Skill title='CSS' src='/../public/assets/skills/css.png' />
          <Skill
            title='Javascript'
            src='/../public/assets/skills/javascript.png'
          />
          <Skill title='Node js' src='/../public/assets/skills/node.png' />
          <Skill title='React' src='/../public/assets/skills/react.png' />
          <Skill title='Next js' src='/../public/assets/skills/nextjs.png' />
          <Skill title='Tailwind' src='/../public/assets/skills/tailwind.png' />
          <Skill title='Firebase' src='/../public/assets/skills/firebase.png' />
          <Skill title='Mondo DB' src='/../public/assets/skills/mongo.png' />
          <Skill title='Github' src='/../public/assets/skills/github.png' />
        </div>
      </div>
    </div>
  )
}

export default Skills
