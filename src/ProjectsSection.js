import React from 'react';
import './ProjectsSection.css';

const ProjectsSection = () => {
    return (
        <section className='projects-section'>
            <h2>Projects</h2>
            <div className='project-grid'>
                {/* Project #1 */}
                <div className='project-item'>
                    <img src='project1.jpg' alt='Project 1'/>
                    <h3>Avalanche Forecaster GPT</h3>
                    <p>Short description of project</p>
                    <a href='https://github.com/jayminwest/Snow-Pack-Layer-Prediction'>View Project</a>
                </div>
                {/* Project #2 */}
                <div className='project-item'>
                    <img src='project2.jpg' alt='Project 2'/>
                    <h3>Project 2</h3>
                    <p>Short description of project</p>
                    <a href='https://github.com/jayminwest'>View Project</a>
                </div>
            </div>
        </section>
    )
}

export default ProjectsSection;