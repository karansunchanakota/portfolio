import React from 'react'
import './Contact.css'
import { Card } from '@material-ui/core'
import gmail from '../../images/contact/gmail.png'
import github from '../../images/contact/github.png'
import linkedin from '../../images/contact/linkedin.png'

const Contact = () => {
    return (
        <section className="contact" id="contact">
            <div style={{height:"0.75rem"}}>
            </div>
            <div className="contact__container">
                <div className="main__heading">
                    <h2>CONTACT</h2>
                    <div className="contact__underline"></div>
                </div>
                <Card className="contact__card">
                    <a className="contact__info" href="mailto:sunchanakotakaran@gmail.com">
                        <img src={gmail}/>
                        sunchanakotakaran@gmail.com
                    </a>
                    <a className="contact__info" href="http://github.com/karansunchanakota" target="_blank">
                        <img src={github}/>
                        github.com/karansunchanakota
                    </a>
                    <a className="contact__info" href="https://www.linkedin.com/in/karan-sunchanakota-708b4417a/" target="_blank">
                        <img src={linkedin}/>
                        linkedin.com/in/karan-sunchanakota
                    </a>
                </Card>
            </div>
            <div style={{height:"0.75rem"}}>
            </div>
        </section>
    )
}
export default Contact;