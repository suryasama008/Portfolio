import React from 'react'

const About = () => {
  return (
    /* A div that is full width, on medium screens it is the height of the screen, it has padding of 2
   on all sides, it is a flex container, it has items that are centered, and it has a padding of 16
   on the top and bottom. */
    <div id='about' className='w-full md:h-screen p-2 flex items-center py-16'>
      {/* A div that is centered on the screen, on medium screens it is a grid with 3 columns and a gap
  of 8. */}
      <div className='max-w-[1240px] m-auto md:grid grid-cols-3 gap-8'>
        {/* Telling the div to span 2 columns. */}
        <div className='col-span-2'>
          {/* Making the text uppercase, making the text size xl, making the text tracking widest, and
making the text color indigo 500. */}
          <p className='uppercase text-xl tracking-widest text-indigo-500'>
            About
          </p>
          <h2 className='py-4'>Who I Am</h2>
          <p className='py-2 text-gray-600'>I am not your normal developer</p>
          <p className='text-gray-600'>
            I am a highly motivated and experienced Full Stack Developer with a
            strong background in front-end development, UI design, and project
            management. Skilled in React, Redux, Firebase, MaterialUI, React
            Native, Node.js, and Agile methodologies, I excel at creating
            efficient and user-friendly applications. My experience includes
            working on inventory management systems, weather forecast
            applications, and responsive web designs for various clients and
            college projects. As a dedicated team player and effective
            communicator, I strive to deliver top-quality solutions and exceed
            client expectations.
          </p>
          <p className='py-2 text-gray-600 underline cursor-pointer'>
            Check out some of my latest projects
          </p>
        </div>

        <div className='w-full h-auto m-auto shadow-md mt-8 flex-col shadow-gray-600 rounded-sm border border-gray-300 flex  items-center p-2  hover:scale-110 ease-in duration-300 rotate-3 '>
          <p className='rounded-full border-1  border-gray-300 text-xl px-2 shadow-xl shadow-gray-600 mb-2'>
            x
          </p>
          <img
            src='https://images.pexels.com/photos/114907/pexels-photo-114907.jpeg?cs=srgb&dl=pexels-monoar-rahman-114907.jpg&fm=jpg'
            alt='/'
          />
        </div>
      </div>
    </div>
  )
}

export default About
