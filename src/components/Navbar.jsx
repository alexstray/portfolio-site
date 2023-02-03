import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FiMenu } from 'react-icons/fi';
import styles from '../styles';
import { navLinks } from '../constants';

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const [activeLink, setActiveLink] = useState('');

  const location = useLocation();

  useEffect(() => {
    setActiveLink(location.pathname);
  }, [location]);

  return (

    <div className='relative z-[1000] py-4 border-b border-[rgba(255,255,255,0.15)]'>
      <div className={`${styles.containerWidth} flex justify-between items-center`}>
        <Link to='/'>
          <h5 className='text-white text-4xl -tracking-[0.04em]'>Alex Simpson</h5>
        </Link>
        <ul className={`md:${styles.flexCenter} hidden md:flex`}>
          {navLinks.map((nav, index) => (
            <li key={nav.id} className={`${index === navLinks.length -1 ? 'pl-6' : 'px-6 border-r border-[rgba(255,255,255,0.15)]'} ${styles.transition500} text-lg font-normal text-white cursor-pointer hover:text-primaryPurple`}>
              {activeLink === `/${nav.id}` ? <Link to={`/`}>Home</Link> : <Link to={`/${nav.id}`}>{nav.title}</Link>}
            </li>
          ))}
        </ul>
        <div className='md:hidden'>
          <div className='text-2xl items-center flex md:hidden h-full text-white'>
             <FiMenu onClick={() => setToggle((prev) => !prev)} />
          </div>
          <div className={`${toggle ? 'block' : 'hidden'} md:hidden`}>
            <ul className={`${styles.flexCenter} scale-up-ver-top flex-col py-4 absolute right-0 left-0 top-[4.5rem] bg-primaryPurple`}>
              {navLinks.map((nav) => (
                <li key={nav.id} className='text-white py-2' onClick={() => setToggle(false)}>
                  {activeLink === `/${nav.id}` ? <Link to={`/`}>Home</Link> : <Link to={`/${nav.id}`}>{nav.title}</Link>}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar
