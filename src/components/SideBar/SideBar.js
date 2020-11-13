import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
//  import { CSSTransition, TransitionGroup } from 'react-transition-group'
import './SideBar.scss'

export default function SideBar({ children, location }) {
    //  const [isMounted, setMounted] = useState(false)

    useEffect(() => {
        //  const timeout = setTimeout(() => setMounted(true), 0)
        //  return () => clearTimeout(timeout)
    }, [])

    return (
        <div className={location}>
            {children}
        </div>
    )
}

SideBar.propTypes = {
    children: PropTypes.node.isRequired,
    location: PropTypes.string
}
