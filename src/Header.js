import React from 'react';
import './Header.css'
import GitHubIcon from './assets/icons/github-icon.svg';
import LinkedInIcon from './assets/icons/linkedin-icon.svg';
import YoutubeIcon from './assets/icons/youtube-icon.svg'

const Header = () => {
    return (
        <header className="header">
            <h1>Jaymin West</h1>
            <div className='line'></div>
            <div className='social-icons'>
                <a href="https://github.com/jayminwest" target='_blank' rel='noopener noreferrer'>
                    <img src={GitHubIcon} alt="GitHub"/> 
                </a>
                <a href="https://www.linkedin.com/in/jaymin-west/" target='_blank' rel="noopener noreferrer">
                    <img src={LinkedInIcon} alt="LinkedIn"/>
                </a>
                <a href="https://www.youtube.com/channel/UCtrGZc-hme--8LECM0dMS5A" target='_blank' rel="noopener noreferrer">
                    <img src={YoutubeIcon} alt="Youtube"/>
                </a>
            </div>
        </header>
    )
}

export default Header;