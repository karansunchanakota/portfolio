import React from 'react'
import './Projects.css'
import { Container, Card, CardActionArea, CardMedia, CardContent, CardActions, Button } from '@material-ui/core'
import netflixProject from '../../images/projects/netflixProject.jpg'
import phishingProject from '../../images/projects/phishingProject.png'
import crudProject from '../../images/projects/crudProject.png'

const Projects = () => {
    return (
        <section className="projects" id="projects">
            <div style={{height:"0.75rem"}}>
            </div>
            <div className="projects__container">
                <div className="main__heading">
                    <h2>PROJECTS</h2>
                    <div className="projects__underline"></div>
                </div>
                <div className="projects__cards">
                    <Card className="projects__card">
                        <CardActionArea>
                            <CardMedia
                            component="img"
                            alt="Contemplative Reptile"
                            height="200"
                            image={phishingProject}
                            title="Contemplative Reptile"
                            />
                            <CardContent className="projects__card__content">
                                <h6>Phishing Website Detection</h6>
                                <p>
                                    Phishing Website detection web application which gives accuracy
                                    of large datasets of phishing links using random forest classifier
                                    done using Python Flask and Anaconda
                                </p>
                            </CardContent>
                        </CardActionArea>
                        <CardActions>
                            <Button size="small" color="primary">
                                Github
                            </Button>
                        </CardActions>
                    </Card>
                    <Card className="projects__card">
                        <CardActionArea>
                            <CardMedia
                            component="img"
                            alt="Contemplative Reptile"
                            height="200"
                            image={netflixProject}
                            title="Contemplative Reptile"
                            />
                            <CardContent className="projects__card__content">
                                <h6>Netflix Clone</h6>
                                <p>
                                    Netflix Clone using React.js
                                </p>
                            </CardContent>
                            <CardActions>
                                <Button size="small" color="primary">
                                    Github
                                </Button>
                            </CardActions>
                        </CardActionArea>
                    </Card>
                    <Card className="projects__card">
                        <CardActionArea>
                            <CardMedia
                            component="img"
                            alt="Contemplative Reptile"
                            height="200"
                            image={crudProject}
                            title="Contemplative Reptile"
                            />
                            <CardContent className="projects__card__content">
                                <h6>CRUD Articles Application</h6>
                                <p>
                                    Ruby on Rails Application which performs CRUD Operations, includes User Authorization. - Team Project
                                </p>
                            </CardContent>
                        </CardActionArea>
                        <CardActions>
                            <Button size="small" color="primary">
                                Github
                            </Button>
                        </CardActions>
                    </Card>
                </div>
            </div>
            <div style={{height:"0.75rem"}}>
            </div>
        </section>
    )
}
export default Projects;
