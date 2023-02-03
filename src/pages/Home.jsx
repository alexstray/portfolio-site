import React from 'react';
import styles from '../styles';
import { Navbar } from '../components';


function makeSpans(text) {
    return text.split('').map((letter, index) => {
      return <span key={index}>{letter}</span>;
    });
}


const Home = () => {
  return (
      <section className={`bg-primaryPurple h-screen`}>
        <div className='red-gradient h-screen w-screen absolute' />
        <div className='orange-gradient h-screen w-screen absolute' />
        <div className='yellow-gradient h-screen w-screen absolute' />
        <div className='blue-gradient h-screen w-screen absolute' />
        <div className='purple-gradient h-screen w-screen absolute' />

        <div>

            <Navbar />
            <div className={`${styles.containerWidth} z-[100] h-[80vh] md:h-[90vh] relative flex items-center justify-center`}>
                <h1 className='text-white text-7xl md:text-8xl text-center cursor-default'>
                    {makeSpans('Bringing ideas to life with innovative front-end solutions.')}
                </h1>
            </div>
        </div>
    </section>
  )
}

export default Home


// Have the letters fall or screen change before going to next page