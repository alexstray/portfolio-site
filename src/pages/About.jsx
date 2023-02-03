import React from 'react';
import { Navbar } from '../components';
import styles from '../styles';
import { images } from '../constants';

const About = () => {
  return (
    <div className='relative h-screen'>
      <Navbar />

      {/* Bg */}
      <div className='project-clip bg-gradient-to-l from-primaryPurple to-primaryPink absolute top-0 right-0 left-0 h-full z-[0]' />

      {/* Header */}
      <div className='z-[100] relative bg-white'>
        <h2 className='bg-gradient-to-l from-purple-900 to-pink-400 text-5xl text-center font-extrabold uppercase -tracking-[0.02em] py-2'>About Me</h2>
      </div>

      <div className={`${styles.containerWidth} pt-10 relative flex flex-col-reverse md:flex-row items-center md:items-start`}>
        <div className='mt-2 md:mt-0 md:mr-2'>
            {/* Img */}
            <div className='bg-white rounded-lg overflow-hidden h-[300px] w-[300px]'>
                <img src={images.Myself} alt="About Img" className='w-full h-full object-cover object-top' />
            </div>
            {/* Titles */}
            <div className='bg-white mt-2 rounded-lg p-2 font-bold text-primaryPurple'>
                <p>Front End Developer</p>
                <p>UX/UI Designer</p>
            </div>
            {/* School */}
            <div className='bg-white p-2 rounded-lg mt-2'>
                <h4 className='text-primaryPurple font-bold font-poppins'>Somerset College</h4>
                <p className='text-sm'>Associate's Degree in Computer Science</p>
                <p className='text-sm italic'>Software Programming Track</p>
                <h5 className='text-primaryPurple font-bold font-poppins mt-2'>Certificates</h5>
                <ul>
                    <li className='text-sm'>CIT</li>
                    <li className='text-sm'>Computer Hardware Repair</li>
                    <li className='text-sm'>Cyber Security</li>
                    <li className='text-sm'>A+</li>
                </ul>
            </div>
        </div>
        <div>
            {/* About Section */}
            <p className='bg-white rounded-lg p-2'>I’m a front end developer consistently working on projects and strengthening my portfolio. Since I’ve been young, I’ve always had a passion for creativity and I learned that I truly love to express it with coding and digital design. Creating completely responsive, and outstanding sites to draw people in is more than just work for me. Aside from my passion of development, I’m also an avid traveler, just coming back from Ireland recently, and writer.</p>
            {/* Skills */}
            <ul className='bg-white p-2 rounded-lg mt-2 flex flex-wrap gap-2 text-sm'>
                <li className='bg-purple-200 px-2 rounded-full'>HTML</li>
                <li className='bg-purple-200 px-2 rounded-full'>CSS</li>
                <li className='bg-purple-200 px-2 rounded-full'>Sass</li>
                <li className='bg-purple-200 px-2 rounded-full'>JavaScript</li>
                <li className='bg-purple-200 px-2 rounded-full'>React</li>
                <li className='bg-purple-200 px-2 rounded-full'>Angular</li>
                <li className='bg-purple-200 px-2 rounded-full'>API</li>
                <li className='bg-purple-200 px-2 rounded-full'>Figma</li>
                <li className='bg-purple-200 px-2 rounded-full'>Adobe Photoshop</li>
                <li className='bg-purple-200 px-2 rounded-full'>Tailwind</li>
            </ul>
        </div>
      </div>
    </div>
  )
}

export default About
