import React, { useState, useEffect } from 'react'
import { ANIMATION_DELAY } from '../../constants/constants'
import PropTypes from 'prop-types'
import './SideBar.scss'

export default function SideBar({ children, location }) {
    const [isMounted, setMounted] = useState(false)

    useEffect(() => {
        const timeout = setTimeout(() => setMounted(true), ANIMATION_DELAY)
        return () => clearTimeout(timeout)
    }, [])

    return (
        <>
            {isMounted && (
                <div className={location} >
                    {children}
                </div>
            )}
        </>
    )
}

SideBar.propTypes = {
    children: PropTypes.node.isRequired,
    location: PropTypes.string
}
