import React from 'react'
import './Navbar.css'

const Navbar = () => {
    return (
        <div className="navbar__main">
            <div className="navbar__brand page__link" dest="home">
                <h3>Karan Sunchanakota</h3>
                <span>Software Engineer</span>
            </div>  
            <nav className="navbar__items">
                <div>
                    <a dest="about" className="page__link">About</a>
                </div>
                {/* <div>
                    <a dest="experience" className="page__link">Experience</a>
                </div> */}
                <div>
                    <a dest="timeline" className="page__link">Timeline</a>
                </div>
                <div>
                    <a dest="projects" className="page__link">Projects</a>
                </div>
                <div>
                    <a dest="skills" className="page__link">Skills</a>
                </div>
                <div>
                    <a dest="contact" className="page__link">Contact</a>
                </div>
                <div>
                    {/* <a dest="home" className="page__link" >Resume</a> */}
                    <a href="https://drive.google.com/file/d/1K9c1TVhvRKtegljaxZAmLtemEh2y5zUC/view?usp=sharing" target="_blank">Resume</a>
                </div>
            </nav>
        </div>
    )
}
export default Navbar;
