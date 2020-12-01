import React from 'react'
import Fade from 'react-reveal/Fade'
import { Element } from 'react-scroll'
import './LandingSection.scss'

export default function LandingSection() {
    return (
        <>
            <Element name="Home" className='landing-section-container'>
                <div className='landing-inner-container'>
                    <Fade up duration={1000} distance="20%">
                        <h1>Brayden Werner</h1>
                    </Fade>
                    <Fade up delay={400} duration={500} distance="40%">
                        <h2>Full Stack Developer</h2>
                    </Fade>
                </div>
            </Element>
        </>
    )
}
