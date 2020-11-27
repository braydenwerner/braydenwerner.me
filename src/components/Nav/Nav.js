import React from 'react'
import { Link } from 'react-scroll'
import { navLinks } from '../../constants/constants'
import './Nav.scss'

export default function Nav() {
    return (
        <>
            <div className="navContainer">
                {navLinks && navLinks.map(({ name }) => {
                    return (
                        <li className="nav-item" key={name}>
                            <Link activeClass="active" to={name} spy={true} smooth={true} offset={-70} duration={500}>
                                {name}
                            </Link>
                        </li>
                    )
                })}
            </div>
        </>
    )
}
