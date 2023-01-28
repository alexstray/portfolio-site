import React from 'react';
import './About.css';
import { images } from '../../constants';

const About = () => {
  return (
    <div className='app__about' id='about'>
      <div className="app__about-container container__size">
        <div className="app__about-img">
          <img src={images.AboutImg} alt="About Img" />
        </div>
        <div className="app__about-content">
          <div className="app__about-content_text">
            <h2>Alex</h2>
            <p>I’m a front end developer consistently working on projects and strengthening my portfolio. Since I’ve been young, I’ve always had a passion for creativity and I learned that I truly love to express it with coding and digital design. Creating completely responsive, and outstanding sites to draw people in is more than just work for me. Aside from my passion of development, I’m also an avid traveler, just coming back from Ireland recently, and writer.</p>
          </div>
          <div className='app__about-content_school'>
            <h3>Somerset College</h3>
            <p>Associate's Degree in Computer Science</p>
            <p>Software Programming Field</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
