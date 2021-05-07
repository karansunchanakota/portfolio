import React, { useState } from 'react'
import './CareerTimeline.css'
import fiiLogo from '../../images/timeline/fiiLogo.png'
import edwiselyLogo from '../../images/timeline/edwiselyLogo.png'
import amazonLogo from '../../images/timeline/amazonLogo.png'
import mtuLogo from '../../images/timeline/mtuLogo.png'
import cvrLogo from '../../images/timeline/cvrLogo.jpg'
import { Timeline, TimelineItem, TimelineSeparator, TimelineConnector, TimelineContent, TimelineOppositeContent, TimelineDot } from '@material-ui/lab'
import { Paper } from '@material-ui/core'

const CareerTimeline = () => {
    const [fiiModal, setFiiModal] = useState(false);
    return (
        <section className="career__timeline" id="timeline">
            <div style={{height:"0.75rem"}}>
            </div>
            <div className="career__timeline__container">
                <div className="main__heading">
                    <h2>TIMELINE</h2>
                    <div className="career__timeline__underline"></div>
                </div>
                <div className="timeline__list">
                    <div style={{fontSize:"1.25rem", padding:"0.125rem 0rem 0.25rem 0.75rem", borderBottom:"1px solid #b1b1bf", color:"#3f3f49"}}>Work History</div>
                    <Timeline className="timeline">
                        <TimelineItem>
                            <TimelineOppositeContent className="timeline__opposite__content">
                                <i>June 2020 - Present</i>
                                <span>Milwaukee, WI</span>
                            </TimelineOppositeContent>
                            <TimelineSeparator>
                                <TimelineDot className="timeline__dot">
                                    {/* <img style={{width:"2rem", padding:"0.25rem"}} src={fiiLogo}/> */}
                                </TimelineDot>
                            <TimelineConnector />
                            </TimelineSeparator>
                            <TimelineContent className="timeline__content">
                                <Paper className="timeline__paper">
                                    <div style={{display:"flex", justifyContent:"space-between", alignItems:"center", padding:"1rem 1rem 0.75rem 1rem", borderBottom:"1px solid #8f8f8f"}}>
                                        <div style={{display:"flex", alignItems:"center"}}>
                                            <img src={fiiLogo} style={{width:"4rem"}} />
                                            <span style={{marginLeft:"1rem", fontSize:"1.25rem", fontWeight:"350"}}>FII USA Inc.</span>
                                        </div>
                                        <span style={{fontSize:"1.125rem", fontWeight:"350"}}>Software Engineer</span>
                                    </div>
                                    <div className="job__info">
                                        <h6>DEVELOP PRODUCT</h6>
                                        <ul>
                                            <li>
                                                Developed full-stack web application that processes analyze,
                                                and renders data that acquires IP Camera information from 
                                                NVR (Network Video Recorder) server.
                                            </li>
                                            <li>
                                                Implemented front-end features by retrieving JSON data from the NVR server in a
                                                Linux environment hosted in VMware () utilizing REST API.
                                            </li>
                                            <li>
                                                Migrated all the whole view pages (UI) from JSP to React.js in order
                                                to modernize the UI and technology stack.
                                            </li>
                                            <li>
                                                Designed various APIs in the back end (NVR server) which manages user 
                                                information, camera information and performs functionalities that use
                                                Onvif (an open-source agent for IP cameras) and uses GStreamer for a live video stream.
                                            </li>
                                            <li>
                                                Coordinated with the front end, back end developers, computer vision
                                                engineers, and product manager as needed.
                                            </li>
                                            <li>
                                                Created test cases and plans for testing new features and APIs in the
                                                NVR server using POSTMAN and cURL.
                                            </li>
                                        </ul>
                                        <h6>TOOLS</h6>
                                        <ul>
                                            <li style={{fontWeight:"500"}}>React.js, JSP, Javascript - ES6, HTML5, CSS3, Bootstrap, jQuery, JSON</li>
                                        </ul>
                                    </div>
                                </Paper>
                            </TimelineContent>
                        </TimelineItem>
                        <TimelineItem>
                            <TimelineOppositeContent className="timeline__opposite__content">
                                <i>June 2019 - August 2019</i>
                                <span>Hyderabad, IN (Remote)</span>
                            </TimelineOppositeContent>
                            <TimelineSeparator>
                                <TimelineDot className="timeline__dot">
                                    {/* <img style={{width:"2rem", padding:"0.25rem"}} src={fiiLogo}/> */}
                                </TimelineDot>
                            <TimelineConnector />
                            </TimelineSeparator>
                            <TimelineContent className="timeline__content">
                                <Paper className="timeline__paper">
                                    <div style={{display:"flex", justifyContent:"space-between", alignItems:"center", padding:"1rem 1rem 0.75rem 1rem", borderBottom:"1px solid #8f8f8f"}}>
                                        <div style={{display:"flex", alignItems:"center"}}>
                                            <img src={edwiselyLogo} style={{width:"3.5rem"}} />
                                            <span style={{marginLeft:"1rem", fontSize:"1.25rem", fontWeight:"350"}}>EDWISELY</span>
                                        </div>
                                        <span style={{fontSize:"1.125rem", fontWeight:"350"}}>Web Developer Intern</span>
                                    </div>
                                    <div className="job__info">
                                        <h6>APPLICATION DEVELOPMENT</h6>
                                        <ul>
                                            <li>
                                                Worked on a website development that is into the E-Learning Platform.
                                            </li>
                                            <li>
                                                Implemented front-end features which utilizes HTML5, CSS3, JavaScript, jQuery and Bootstrap.

                                            </li>
                                            <li>
                                                Assessed UX and UI designs for technical feasibility and collaborated with product team members to implement a new feature
                                                developments.
                                            </li>
                                        </ul>
                                        <h6>TOOLS</h6>
                                        <ul>
                                            <li style={{fontWeight:"500"}}>Javascript - ES6, HTML5, CSS3, Bootstrap, jQuery</li>
                                        </ul>
                                    </div>
                                </Paper>
                            </TimelineContent>
                        </TimelineItem>
                        <TimelineItem>
                            <TimelineOppositeContent className="timeline__opposite__content">
                                <i>June 2019 - July 2019</i>
                                <span>Houghton, MI</span>
                            </TimelineOppositeContent>
                            <TimelineSeparator>
                                <TimelineDot className="timeline__dot">
                                    {/* <img style={{width:"2rem", padding:"0.25rem"}} src={fiiLogo}/> */}
                                </TimelineDot>
                            <TimelineConnector />
                            </TimelineSeparator>
                            <TimelineContent className="timeline__content">
                                <Paper className="timeline__paper">
                                    <div style={{display:"flex", justifyContent:"space-between", alignItems:"center", padding:"1rem 1rem 0.75rem 1rem", borderBottom:"1px solid #8f8f8f"}}>
                                        <div style={{display:"flex", alignItems:"center"}}>
                                            <img src={mtuLogo} style={{width:"4rem"}} />
                                            <span style={{marginLeft:"1rem", fontSize:"1.25rem", fontWeight:"350"}}>Michigan Technological University</span>
                                        </div>
                                        <span style={{fontSize:"1.125rem", fontWeight:"350"}}>Summer Youth Program Instructor</span>
                                    </div>
                                    <div className="job__info">
                                        <h6>INSTRUCTOR</h6>
                                        <ul>
                                            <li>
                                                Worked as Instructor for "Coding for the IoT" and "Video Game Programming".
                                            </li>
                                            <li>
                                                Designed different sample projects in the subject which intrigued the students
                                                to learn more about the course.
                                            </li>
                                            <li>
                                                Guided the class through activities in a timely manner to keep on track with the
                                                itinerary which improved my Time Management Skills.
                                            </li>
                                            <li>
                                                Communicated with participants that were different ages and from a different
                                                location which included South Korean students and resolved the conflicts when
                                                they are teamed up with different students.
                                            </li>
                                        </ul>
                                        <h6>TOOLS</h6>
                                        <ul>
                                            <li style={{fontWeight:"500"}}>Arduino, Python3, Turtle Graphics</li>
                                        </ul>
                                    </div>
                                </Paper>
                            </TimelineContent>
                        </TimelineItem>
                        <TimelineItem>
                            <TimelineOppositeContent className="timeline__opposite__content">
                                <i>August 2017 - July 2018</i>
                                <span>Hyderabad, IN</span>
                            </TimelineOppositeContent>
                            <TimelineSeparator>
                                <TimelineDot className="timeline__dot">
                                    {/* <img style={{width:"2rem", padding:"0.25rem"}} src={fiiLogo}/> */}
                                </TimelineDot>
                            <TimelineConnector />
                            </TimelineSeparator>
                            <TimelineContent className="timeline__content">
                                <Paper className="timeline__paper">
                                    <div style={{display:"flex", justifyContent:"space-between", alignItems:"center", padding:"1rem 1rem 0.75rem 1rem", borderBottom:"1px solid #8f8f8f"}}>
                                        <div style={{display:"flex", alignItems:"center"}}>
                                            <img src={amazonLogo} style={{width:"3.5rem"}} />
                                            <span style={{marginLeft:"1rem", fontSize:"1.25rem", fontWeight:"350"}}>AMAZON</span>
                                        </div>
                                        <span style={{fontSize:"1.125rem", fontWeight:"350"}}>Process Associate</span>
                                    </div>
                                    <div className="job__info">
                                        <h6>PROCESS MANAGEMENT</h6>
                                        <ul>
                                            <li>
                                                Presented analysis and insights on different issue segments identified from drivers’ reviews.
                                            </li>
                                            <li>
                                                Conducted root cause analysis, suggested a platform solution for driver’s performance enhancement.
                                            </li>
                                            <li>
                                                Investigated drivers' performance worldwide and collaborated with them regarding their work, paychecks, transactions, etc to summarize the fraudulent activities
                                            </li>
                                        </ul>
                                    </div>
                                </Paper>
                            </TimelineContent>
                        </TimelineItem>
                    </Timeline>
                    <div style={{fontSize:"1.25rem", padding:"0.125rem 0rem 0.25rem 0.75rem", borderBottom:"1px solid #b1b1bf", color:"#3f3f49"}}>Education History</div>
                    <Timeline className="timeline">
                        <TimelineItem>
                            <TimelineOppositeContent className="timeline__opposite__content">
                                <i>Sept 2018 - April 2020</i>
                                <span>Houghton, MI</span>
                            </TimelineOppositeContent>
                            <TimelineSeparator>
                                <TimelineDot className="timeline__dot">
                                    {/* <img style={{width:"2rem", padding:"0.25rem"}} src={fiiLogo}/> */}
                                </TimelineDot>
                            <TimelineConnector />
                            </TimelineSeparator>
                            <TimelineContent className="timeline__content">
                                <Paper className="timeline__paper">
                                    <div style={{display:"flex", justifyContent:"space-between", alignItems:"center", padding:"1rem 1rem 0.75rem 1rem", borderBottom:"1px solid #8f8f8f"}}>
                                        <div style={{display:"flex", alignItems:"center"}}>
                                            <img src={mtuLogo} style={{width:"4rem"}} />
                                            <span style={{marginLeft:"1rem", fontSize:"1.25rem", fontWeight:"350"}}>Michigan Technological University</span>
                                        </div>
                                        <span style={{fontSize:"1.125rem", fontWeight:"350"}}>Masters In Computer Science</span>
                                    </div>
                                    <div className="job__info">
                                        <h6>DEVELOP PRODUCT</h6>
                                        <ul>
                                            <li>
                                                Developed full-stack web application that processes analyze,
                                                and renders data that acquires IP Camera information from 
                                                NVR (Network Video Recorder) server.
                                            </li>
                                            <li>
                                                Implemented front-end features by retrieving JSON data from the NVR server in a
                                                Linux environment hosted in VMware () utilizing REST API.
                                            </li>
                                            <li>
                                                Migrated all the whole view pages (UI) from JSP to React.js in order
                                                to modernize the UI and technology stack.
                                            </li>
                                            <li>
                                                Designed various APIs in the back end (NVR server) which manages user 
                                                information, camera information and performs functionalities that use
                                                Onvif (an open-source agent for IP cameras) and uses GStreamer for a live video stream.
                                            </li>
                                            <li>
                                                Coordinated with the front end, back end developers, computer vision
                                                engineers, and product manager as needed.
                                            </li>
                                            <li>
                                                Created test cases and plans for testing new features and APIs in the
                                                NVR server using POSTMAN and cURL.
                                            </li>
                                        </ul>
                                        <h6>TOOLS</h6>
                                        <ul>
                                            <li>React.js, JSP, Javascript - ES6, HTML5, CSS3, Bootstrap, jQuery, JSON</li>
                                        </ul>
                                    </div>
                                </Paper>
                            </TimelineContent>
                        </TimelineItem>
                        <TimelineItem>
                            <TimelineOppositeContent className="timeline__opposite__content">
                                <i>September 2013 - April 2017</i>
                                <span>Hyderabad, IN</span>
                            </TimelineOppositeContent>
                            <TimelineSeparator>
                                <TimelineDot className="timeline__dot">
                                    {/* <img style={{width:"2rem", padding:"0.25rem"}} src={fiiLogo}/> */}
                                </TimelineDot>
                            <TimelineConnector />
                            </TimelineSeparator>
                            <TimelineContent className="timeline__content">
                                <Paper className="timeline__paper">
                                    <div style={{display:"flex", justifyContent:"space-between", alignItems:"center", padding:"1rem 1rem 0.75rem 1rem", borderBottom:"1px solid #8f8f8f"}}>
                                        <div style={{display:"flex", alignItems:"center"}}>
                                            <img src={cvrLogo} style={{width:"3.5rem"}} />
                                            <span style={{marginLeft:"1rem", fontSize:"1.25rem", fontWeight:"350"}}>CVR College Of Engineering</span>
                                        </div>
                                        <span style={{fontSize:"1.125rem", fontWeight:"350"}}>Bachelors In Information Technology</span>
                                    </div>
                                    <div className="job__info">
                                        <h6>DEVELOP PRODUCT</h6>
                                        <ul>
                                            <li>
                                                Developed full-stack web application that processes analyze,
                                                and renders data that acquires IP Camera information from 
                                                NVR (Network Video Recorder) server.
                                            </li>
                                            <li>
                                                Implemented front-end features by retrieving JSON data from the NVR server in a
                                                Linux environment hosted in VMware () utilizing REST API.
                                            </li>
                                            <li>
                                                Migrated all the whole view pages (UI) from JSP to React.js in order
                                                to modernize the UI and technology stack.
                                            </li>
                                            <li>
                                                Designed various APIs in the back end (NVR server) which manages user 
                                                information, camera information and performs functionalities that use
                                                Onvif (an open-source agent for IP cameras) and uses GStreamer for a live video stream.
                                            </li>
                                            <li>
                                                Coordinated with the front end, back end developers, computer vision
                                                engineers, and product manager as needed.
                                            </li>
                                            <li>
                                                Created test cases and plans for testing new features and APIs in the
                                                NVR server using POSTMAN and cURL.
                                            </li>
                                        </ul>
                                        <h6>TOOLS</h6>
                                        <ul>
                                            <li>React.js, JSP, Javascript - ES6, HTML5, CSS3, Bootstrap, jQuery, JSON</li>
                                        </ul>
                                    </div>
                                </Paper>
                            </TimelineContent>
                        </TimelineItem>
                    </Timeline>
                </div>
                <div style={{height:"0.75rem"}}></div>
            </div>
            <div style={{height:"1rem"}}>
            </div>
        </section>
    )
}
export default CareerTimeline;