import React, { useRef } from 'react'
import './Skills.css'
import SkillChart from './SkillChart'
import { Card, CardContent } from '@material-ui/core'
// import { Card, div, CardContent } from 'reactstrap'
import angularJS from '../../images/skills/angularJS.svg'
import bootstrap from '../../images/skills/bootstrap-4.svg'
import cProgram from '../../images/skills/c-program.svg'
import cpp from '../../images/skills/cpp.svg'
import css from '../../images/skills/css-5.svg'
import finalCut from '../../images/skills/final-cut-pro.png'
import flask from '../../images/skills/flask.svg'
import git from '../../images/skills/git-icon.svg'
import html from '../../images/skills/html5.svg'
import java from '../../images/skills/java-4.svg'
import jquery from '../../images/skills/jquery-1.svg'
import logicPro from '../../images/skills/logic-pro-x.png'
import javascript from '../../images/skills/logo-javascript.svg'
import json from '../../images/skills/json.svg'
import materialize from '../../images/skills/materialize.svg'
import mongodb from '../../images/skills/mongodb.svg'
import mysql from '../../images/skills/mysql-5.svg'
import nodejs from '../../images/skills/nodejs-1.svg'
import python from '../../images/skills/python-5.svg'
import rails from '../../images/skills/rails-1.svg'
import reactIcon from '../../images/skills/react-2.svg'
import subversion from '../../images/skills/subversion.svg'

const Skills = () => {
    var webTechnologies = [
        ["HTML", html, 90],
        ["CSS", css, 90],
        ["Bootstrap", bootstrap, 85],
        ["Materialize", materialize, 80],
        ["Javascript", javascript, 80],
        ["React", reactIcon, 80],
        ["jQuery", jquery, 80],
        ["JSON", json, 75],
        ["Node", nodejs, 70],
        ["Ruby on Rails", rails, 50],
        ["Flask", flask, 45],
        ["Angular", angularJS, 40]
    ];
    var databaseManagement = [
        ["Mysql", mysql, 60],
        ["MongoDB", mongodb, 50]
    ]
    var programmingLanguages = [
        ["Java", java, 70],
        ["Python 3", python, 65],
        ["C", cProgram,60],
        ["C++", cpp, 30]
    ]
    var otherSkill = [
        ["Git", git],
        ["SVN", subversion],
        ["Logic Pro X", logicPro],
        ["Final Cut Pro", finalCut]
    ]
    
    return (
        <section className="skills" id="skills">
            <div style={{height:"0.75rem"}}>
            </div>
            <div className="skills__container">
                <div className="main__heading">
                    <h2>SKILLS</h2>
                    <div className="skills__underline"></div>
                </div>
                <Card className="all__skills">
                    <div className="skills__with__graph">
                        <Card className="skills__card">
                            <div className="skills__card__header">
                                Web Technologies
                            </div>
                            <CardContent className="skills__card__body">
                                {
                                    webTechnologies.map(element => (
                                        <div className="skills_single">
                                            <Card className="skills_icons_card">
                                                <img className="skills_icons" src={element[1]} />
                                            </Card>
                                            <span>{element[0]}</span>
                                        </div>
                                    ))
                                }
                            </CardContent>
                        </Card>
                        <Card className="skills__card">
                            <CardContent className="skills__card__graph__body">
                                <SkillChart yAxes={webTechnologies} height="300px" width="480px"/>
                            </CardContent>
                        </Card>
                    </div>
                    <div className="skills__with__graph">
                        <Card className="skills__card">
                            <div className="skills__card__header">
                                Database Management
                            </div>
                            <CardContent className="skills__card__body">
                                {
                                    databaseManagement.map(element => (
                                        <div className="skills_single">
                                            <Card className="skills_icons_card">
                                                <img className="skills_icons" src={element[1]} />
                                            </Card>
                                            <span>{element[0]}</span>
                                        </div>
                                    ))
                                }
                            </CardContent>
                        </Card>
                        <Card className="skills__card">
                            <CardContent className="skills__card__graph__body">
                                <SkillChart yAxes={databaseManagement} height="100px" width="480px"/>
                            </CardContent>
                            {/* <div className="skills__card__header">
                                Database Management
                            </div>
                            <CardContent className="skills__card__body">
                                {
                                    databaseManagement.map(element => (
                                        <div className="skills_single">
                                            <Card className="skills_icons_card">
                                                <img className="skills_icons" src={element[1]} />
                                            </Card>
                                            <span>{element[0]}</span>
                                        </div>
                                    ))
                                }
                            </CardContent> */}
                        </Card>
                    </div>
                    <div className="skills__with__graph"> 
                        <Card className="skills__card">
                            <div className="skills__card__header">
                                Programming Languages
                            </div>
                            <CardContent className="skills__card__body">
                                {
                                    programmingLanguages.map(element => (
                                        <div className="skills_single">
                                            <Card className="skills_icons_card">
                                                <img className="skills_icons" src={element[1]} />
                                            </Card>
                                            <span>{element[0]}</span>
                                        </div>
                                    ))
                                }
                            </CardContent>
                        </Card>
                        <Card className="skills__card">
                            <CardContent className="skills__card__graph__body">
                                <SkillChart yAxes={programmingLanguages} height="135px" width="480px"/>
                            </CardContent>
                            {/* <div className="skills__card__header">
                                Programming Languages
                            </div>
                            <CardContent className="skills__card__body">
                                {
                                    programmingLanguages.map(element => (
                                        <div className="skills_single">
                                            <Card className="skills_icons_card">
                                                <img className="skills_icons" src={element[1]} />
                                            </Card>
                                            <span>{element[0]}</span>
                                        </div>
                                    ))
                                }
                            </CardContent> */}
                        </Card>
                    </div>
                    <div className="skills__with__graph">
                        <Card className="skills__card">
                            <div className="skills__card__header">
                                Other
                            </div>
                            <CardContent className="skills__card__body">
                                {
                                    otherSkill.map(element => (
                                        <div className="skills_single">
                                            <Card className="skills_icons_card">
                                                <img className="skills_icons" src={element[1]} />
                                            </Card>
                                            <span>{element[0]}</span>
                                        </div>
                                    ))
                                }
                            </CardContent>
                        </Card>
                        <Card className="skills__card">
                            {/* <div className="skills__card__header">
                                Other
                            </div>
                            <CardContent className="skills__card__body">
                                {
                                    otherSkill.map(element => (
                                        <div className="skills_single">
                                            <Card className="skills_icons_card">
                                                <img className="skills_icons" src={element[1]} />
                                            </Card>
                                            <span>{element[0]}</span>
                                        </div>
                                    ))
                                }
                            </CardContent> */}
                        </Card>
                    </div>
                </Card>
            </div>
            <div style={{height:"0.75rem"}}>
            </div>
        </section>
    )
}
export default Skills;