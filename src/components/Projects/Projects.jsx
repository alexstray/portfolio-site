import React from 'react';
import './Projects.css';
import { data } from '../../constants';


const ProjectCard =({pcard: { imgUrl, title, tags, github, preview } }) => (
    <div className='app__project-card'>
        <img src={imgUrl} alt="Project Img" />
        <div className='app__project-card_content'>
            <h4>{title}</h4>
            <div className='app__project-card_btns'>
                <a href={github} target='_blank' rel='noreferrer'>Github</a>
                <a href={preview} target='_blank' rel='noreferrer'>Preview</a>
            </div>
            <div className='app__project-card_tags'>
                <p>{tags}</p>
            </div>
        </div>
    </div>
)

const Projects = () => {
  return (
    <div className='app__projects' id='projects'>
        <div className="app__projects-container container__size">
            <div className="app__projects-grid">
                {data.portfolioItems.map((pcard) => <ProjectCard pcard={pcard} />)}
            </div>
        </div>
    </div>
  )
}

export default Projects
