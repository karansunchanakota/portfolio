import React, { useEffect } from 'react'
import './Main.css'
import About from '../../views/About/About'
import CareerTimeline from '../../views/CareerTimeline/CareerTimeline'
import Projects from '../../views/Projects/Projects'
// import Contact from '../../views/Contact/Contact'
// import Skills from '../../views/Skills/Skills'
import $ from 'jquery'
// import rightArrow from '../../images/rightArrow.svg'
import { ArrowForward } from '@material-ui/icons';
const Main = () => {
    useEffect(() => {
        ($(".page__link")).click(function() {
            var destination = $(this).attr('dest');
            $('html, body').animate(
                {
                    scrollTop: $('#' + destination).offset().top
                },
                500
            );
        });
    },[])
    return (
        <div className="main">
            <div className="main__home" id="home">
                <a dest="about" className="page__link know__more">
                    Know more about my work
                    <ArrowForward className="rightArrow" />
                </a>
            </div>
            <About />
            <CareerTimeline />
            <Projects />
            {/* <Skills />
            <Contact /> */}
        </div>
    )
}

export default Main;
