import React from 'react'
import './About.css'
import { Container, Card, CardContent } from '@material-ui/core'
import karan from '../../images/karanDP.png'

const About = () => {
    return (
        <section className="about" id="about">
            <div className="main__heading">
                <h2>ABOUT</h2>
                <div className="about__underline"></div>
            </div>
            <Container className="about__container">
                <div className="about__profile">
                    <img src={ karan } />
                </div>
                <Card className="about__card">
                    <CardContent className="about__card__content">
                        <ul>
                            <li>
                                In the process of pursuing my and graduation
                                in Computer Science, I found myself diligent and enjoyed woking
                                on technical and computer driven aspects which lead to follow
                                my true passion for software and full-stack development.
                            </li> <br></br>
                            <li>
                                Working in a corporate sector of software development, my office
                                has given me a broader perspective of how a software is born from
                                scratch to deployment. And also here is where I got to explore more
                                about Web Development which dragged my interest more towards designing
                                responsive UI Layouts.
                            </li>
                            <li> <br></br>
                                My UI designs are very fast and intuitive and very easy to use.
                                This portfolio shows my skill and showcases my detailed oriented
                                and organizational skills.
                            </li> 
                        </ul>
                    </CardContent>
                </Card>
            </Container>
        </section>
    )
}

export default About;


