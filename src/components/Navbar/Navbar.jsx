import React, { useState } from 'react';
import './Navbar.css';
import { images } from '../../constants';
import { RiCloseLine, RiMenuLine } from 'react-icons/ri';
import { BsGithub, BsLinkedin } from 'react-icons/bs'


const Navbar = () => {
    const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <header role='banner' className='app__navbar'>
      <div className="app__navbar-container">
        <div className="app__navbar-logo_wrapper">
            <a href="/" className="app__navbar-logo">
                <img src={images.Logo} alt="Logo" />
            </a>
        </div>
        <nav role='navigation' className='app__navbar-links' aria-label='Desktop navigation' >
            <ul className="app__navbar-links_list">
                <li className='app__navbar-links_list-item'><a href="#projects">Projects</a></li>
                <li role='separator' className="app__navbar-separator"></li>
                <li className='app__navbar-links_list-item'><a href="#skills">Skills</a></li>
                <li role='separator' className="app__navbar-separator"></li>
                <li className='app__navbar-links_list-item'><a href="#about">About</a></li>
                <li role='separator' className="app__navbar-separator"></li>
                <BsGithub />
                <BsLinkedin />
            </ul>
        </nav>
        <div className="app__navbar-mobile">
            <RiMenuLine color='var(--color-light)' size={30} onClick={() => setToggleMenu(true)} />
            {toggleMenu && (
                <>
                    <div className="app__navbar-mobile_container">
                        <div className="app__navbar-mobile_menu scale-up-right">
                            <div className="app__navbar-mobile_list">
                                <ul>
                                    <li><a href="#projects">Projects</a></li>
                                    <li><a href="#skills">Skills</a></li>
                                    <li><a href="#about">About</a></li>
                                </ul>
                                <RiCloseLine color='var(--color-light)' size={30} onClick={() => setToggleMenu(false)} cursor='pointer' />
                            </div>
                            <div className="app__navbar-mobile_socials">
                                <a href="https://github.com/alexstray"><BsGithub size={30} style={{marginRight: '2rem'}} /></a>
                                <BsLinkedin size={30} />
                            </div>
                        </div>
                        <div className="app__navbar-mobile_overlay" />
                    </div>
                </>
            )}
        </div>
      </div>
    </header>
  )
}

export default Navbar
