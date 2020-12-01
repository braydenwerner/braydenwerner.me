import React, { useState, useEffect } from 'react'
import Fade from 'react-reveal/Fade'
import { Link } from 'react-scroll'
import { navLinks } from '../../constants/constants'
import './Nav.scss'

export default function Nav() {
    const [isMounted, setMounted] = useState(false)
    const navLinkDelay = 300

    useEffect(() => {
        const timeout = setTimeout(() => setMounted(true), 900)
        return () => clearTimeout(timeout)
    }, [])
    return (
        <>
            {isMounted && (
                <Fade down key={name}>
                    <div className="navContainer">
                        {navLinks && navLinks.map(({ name }, i) => {
                            return (
                                <Fade down key={name} delay={i * navLinkDelay}>
                                    <li className="nav-item" >
                                        <Link activeClass="active" to={name} spy={true} smooth={true} offset={-140} duration={500}>
                                            {name}
                                        </Link>
                                    </li>
                                </Fade>
                            )
                        })}
                        <a href="mailto:braydenwerner0@gmail.com" aria-label={name} target="_blank" rel="noreferrer">
                            <div className="nav-email">braydenwerner0@gmail.com</div>
                        </a>
                    </div>
                </Fade>
            )}
        </>
    )
}
