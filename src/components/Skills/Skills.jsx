import React, { useEffect } from 'react';
import './Skills.css';
import TagCloud from 'TagCloud';


const Skills = () => {
    useEffect(() => {
        const container = '.tagcloud';
        const texts = [
          'HTML',
          'CSS',
          'SASS',
          'JavaScript',
          'React',
          'Angular',
          'GIT',
          'GITHUB',
          'Tailwind'
        ];
    
        const options = {
          radius: 300,
          maxSpeed: 'normal',
          initSpeed: 'normal',
          keep: true,
          breakpoints: {
            650: {
              radius: 100,
            }
          }
        };
    
        TagCloud(container, texts, options);
      }, []);

  return (
    <div id='skills' className='text-sphere app__skills'>
      <span className="tagcloud"></span>
    </div>
  )
}

export default Skills
