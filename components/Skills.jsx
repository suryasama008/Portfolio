import React from 'react'
import Image from 'next/image'
import Skill from './Skill'
import node from '../public/assets/skills/node.png'
import react from '../public/assets/skills/react.png'
import html from '../public/assets/skills/html.png'
import css from '../public/assets/skills/css.png'
import javascript from '../public/assets/skills/javascript.png'
import mongo from '../public/assets/skills/mongo.png'
import github from '../public/assets/skills/github.png'
import firebase from '../public/assets/skills/firebase.png'
import nextjs from '../public/assets/skills/nextjs.png'
import tailwind from '../public/assets/skills/tailwind.png'

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
          <Skill title='HTML' src={html} />
          <Skill title='CSS' src={css} />
          <Skill
            title='Javascript'
            src='/../public/assets/skills/javascript.png'
          />
          <Skill title='Node js' src={node}  color="gray"/>
          <Skill title='React' src={react} color = "teal" />
          <Skill title='Next js' src={nextjs} color = "white"/>
          <Skill title='Tailwind' src={tailwind} color="blue" />
          <Skill title='Firebase' src={firebase} color = "yellow" />
          <Skill title='Mondo DB' src={mongo} color = "green" />
          <Skill title='Github' src={github} color = "white" />
        </div>
      </div>
    </div>
  )
}

export default Skills
