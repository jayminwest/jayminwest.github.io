import React from 'react';
import './IntroSection.css';

const IntroSection = () => {
    return (
        <section className='intro-section'>
            <div className='abstract-shape'></div>
            <div className='text-content'>
                <div className='name'>Jaymin West</div>
                <div className='title'>Software Engineer</div>
                <div className='location'>Fort Collins, Colorado</div>
            </div>    
        </section>
    );
};

export default IntroSection;