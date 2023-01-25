import React from 'react';
import './Hero.css';
import { images } from '../../constants';

const Hero = () => {
  return (
    <div className='app__hero'>
      <div className="app__hero-container container__size">
        <div className="app__hero-text">
          <h1>
            Hi, I'm <span>Alex</span>. <br />
            Welcome to my <br />
            <span>portfolio</span>.
          </h1>
          <h4>
            Front End Developer <br />
            UI/UX Designer
          </h4>
        </div>
        <div className='app__hero-img'>
          {/* <img src={images.Myself} alt="Myself" /> */}
        </div>
        <div className='hero__space' />
      </div>
    </div>
  )
}

export default Hero
