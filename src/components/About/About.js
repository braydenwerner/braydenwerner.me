import React from 'react'
import Fade from 'react-reveal/Fade'
import { Element } from 'react-scroll'
import './About.scss'

export default function About() {
    return (
        <>
            <Element name="About" className="outer-about-container">
                <Fade up>
                    <div className="main-container">

                        <div className="title-container">
                            <div className="title">About</div>
                        </div>
                        <div className="column-wrapper">
                            <div className="column-1">
                                <p>
                                    Hi, my name is Brayden. I&apos;m a software engineer from Tustin, CA.
                                    Currently, I am a student at the <a href="https://www.ucdavis.edu/" target="_blank" rel="noreferrer">University of California, Davis </a>
                                    pursuing a degree in Computer Science.
                                </p>

                                <p>
                                    I enjoy building applications in a variety of languages, using different technologies,
                                    and I am always looking to learn something new.
                                </p>
                            </div>

                            <div className="column-2">
                                <img className="main-image"></img>
                            </div>
                        </div>
                    </div>
                </Fade>
            </Element>
        </>
    )
}
