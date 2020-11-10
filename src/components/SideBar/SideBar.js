import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import { CSSTransition, TransitionGroup } from 'react-transition-group'
import './SideBar.scss'

export default function SideBar({ children, location }) {
    const [isMounted, setMounted] = useState(false)

    useEffect(() => {
        const timeout = setTimeout(() => setMounted(true), 0)
        console.log(isMounted)
        return () => clearTimeout(timeout)
    }, [])

    console.log(isMounted)

    return (
        <>
            <div className={location}>
                <TransitionGroup component={null}>
                    {isMounted && (
                        <CSSTransition classNames='fade' timeout={100}>
                            {children}
                        </CSSTransition>
                    )}
                </TransitionGroup>
            </div>
        </>
    )
}

SideBar.propTypes = {
    children: PropTypes.node.isRequired,
    location: PropTypes.string
}
