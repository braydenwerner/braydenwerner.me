import React from 'react'
import Fade from 'react-reveal/Fade'
import { Element } from 'react-scroll'
import './About.scss'
import sql from '../../icon/sql.svg'
import firebase from '../../icon/firebase.svg'

export default function About() {
    return (
        <>
            <Element name="About" className="outer-about-container">
                <Fade distance="20%" up>
                    <div className="about-main-container">

                        <div className="about-title-container">
                            <div className="about-title">About</div>
                        </div>
                        <div className="about-column-wrapper">
                            <div className="about-column-1">
                                <h1 className="about-column-1-header">
                                    Hi, my name is Brayden.
                                </h1>
                                <p>
                                    I&apos;m a full stack developer from Tustin, CA.
                                    Currently, I am a student at the <a href="https://www.ucdavis.edu/" target="_blank" rel="noreferrer">University of California, Davis</a>
                                    &nbsp;pursuing a degree in Computer Science.
                                </p>

                                <p>
                                    I enjoy building full stack web applications using a variety of technologies and frameworks.
                                    I&apos;m always looking to learn something new.
                                </p>
                            </div>

                            <div className="about-column-2">
                                <h1>
                                    A Few Technologies I&apos;ve Used
                                </h1>
                                <div className="about-tech-grid">
                                    <i className="fab fa-js"></i>
                                    <i className="fab fa-html5"></i>
                                    <i className="fab fa-css3-alt"></i>
                                    <i className="fab fa-react"></i>
                                    <i className="fab fa-node-js"></i>
                                    <i className="fab fa-sass"></i>
                                    <i className="fab fa-java"></i>
                                    <i className="fab fa-python"></i>
                                    <i className="fab fa-linux"></i>
                                    <i className="fab fa-aws"></i>
                                    <img className="sql" src={sql}></img>
                                    <img className="firebase" src={firebase}></img>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="about-button-container">
                        <Fade up delay={250} duration={500} distance="40%">
                            <a href="mailto:braydenwerner0@gmail.com" aria-label={name} target="_blank" rel="noreferrer">
                                <button className="contact-button">Contact</button>
                            </a>
                        </Fade>
                        <Fade up delay={400} duration={500} distance="40%">
                            <a>
                                <button className="resume-button">Resume</button>
                            </a>
                        </Fade>
                    </div>
                </Fade>
            </Element>

        </>
    )
}
