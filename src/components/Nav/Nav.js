import React, { useState, useEffect } from 'react'
import Fade from 'react-reveal/Fade'
import { Link } from 'react-scroll'
import { navLinks } from '../../constants/constants'
import './Nav.scss'

export default function Nav() {
    const [isMounted, setMounted] = useState(false)

    useEffect(() => {
        const timeout = setTimeout(() => setMounted(true), 400)
        return () => clearTimeout(timeout)
    }, [])
    return (
        <>
            {isMounted && (
                <Fade down key={name}>
                    <div className="navContainer">
                        {navLinks && navLinks.map(({ name }) => {
                            return (
                                <li className="nav-item" key={name}>
                                    <Link activeClass="active" to={name} spy={true} smooth={true} offset={-140} duration={500}>
                                        {name}
                                    </Link>
                                </li>
                            )
                        })}
                    </div>
                </Fade>
            )}
        </>
    )
}
