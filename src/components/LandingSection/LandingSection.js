import React from 'react'
import { Element } from 'react-scroll'
import './LandingSection.scss'

export default function LandingSection() {
    return (
        <>
            <Element name="Home" className='landing-section-container'>
                <div className='name-container'>
                    <h1>Brayden Werner</h1>
                    <h2>Software Engineer</h2>

                </div>
                <div className='paragraph-container'>
                </div>
            </Element>
        </>
    )
}
